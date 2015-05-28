( function( d3, HOLDINGS, SUB_INDUSTRY_MAP, SECTOR_IDS, symbol2subindustry, flareSectorMap ) {
  'use strict';
  // Allocation Structure: Sector / Group / Industry / Subindustry / (Security)
  
  /* Zoomable Treemap adapted from Mike Bostock http://bost.ocks.org/mike/treemap/  */
  var symbols = d3.keys(HOLDINGS).join(',');

  var yqlSelect = ['select symbol, Name, LastTradePriceOnly from yahoo.finance.quotes where symbol in ("',
                   symbols,
                   '")'];
  var yqlUrl = ['https://query.yahooapis.com/v1/public/yql?q=', yqlSelect.join(' '), '&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'];
  var goUp;

  function find(collection, idName, id, findAll, retrieveField){
    var all = [], item;
    for(var i in collection){
      if(!collection.hasOwnProperty(i)){ continue; }
      item = collection[i];
      if(item[idName] == id){
        if(retrieveField){ return item[retrieveField]; }
        if(!findAll){ return item; }
        all.push(item);
      } else {
        var parts = String.prototype.split.call(idName, '_');
        if(parts.length > 1 && item[parts[0]][parts[1]] == id){
          return retrieveField ? item[parts[0]][ retrieveField ] : item[ parts[0] ];
        }
      }
    }
    return all;
  }

// determines if white or black will be better contrasting color
  function getContrastYIQ(hexcolor){
    hexcolor = hexcolor.replace('#', '');
    var r = parseInt(hexcolor.substr(0,2),16);
    var g = parseInt(hexcolor.substr(2,2),16);
    var b = parseInt(hexcolor.substr(4,2),16);
    var yiq = ((r*299)+(g*587)+(b*114))/1000;
    return (yiq >= 128) ? 'black' : 'white';
  }

  var width = 1000,
      height = 625,
      formatNumber = d3.format(',d'),
      formatCurrency = d3.format('$,d'),
      transitioning;

  var colorScale = d3.scale.ordinal()
      .domain(SECTOR_IDS)
      .range(PALETTE);

  var x = d3.scale.linear().domain([0, width]).range([0, width]);
  var y = d3.scale.linear().domain([0, height]).range([0, height]);


  var treemap = d3.layout.treemap()
      .children(function(d, depth) { return depth ? null : d._children; })
      .sort(function(a, b) { return a.value - b.value; })
      .ratio(height / width * 0.5 * (1 + Math.sqrt(5)))
      .round(false);

  var breadCrumbTrail = d3.select('#breadcrumbTrail').append('svg')
      .attr('width', width)
      .attr('height', '30px')
      .attr('class', 'trail');

  var legend = d3.select('#legend').append('svg')
      .attr('width', width)
      .attr('height', 30)
      .attr('class', 'legend');
  var lastX = 0;
  var isLegendComplete = false;

  var svg = d3.select('#chart').append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('height', height)
      .style('shape-rendering', 'crispEdges');

  function run(){
    callback(yahooResponseStatic);
    d3.json(yqlUrl.join(''), callback);
        
    function callback(yahooResponse) {
      // Yahoo format {"query":{"count":1,"created":"2015-02-25T00:05:52Z","lang":"en-US","results":{"quote":{"symbol":"AAPL","LastTradePriceOnly":"132.17"}}}}
      if(!yahooResponse.query.results){
        run();  // Re-try upon null result: {"query":{"count":0,"created":"2015-02-25T22:33:20Z","lang":"en-us","results":null}}
      }
      var prices = yahooResponse.query.results.quote;


      function buildFlareData(prices) {
        var flareData = flareSectorMap();	// Empty, complete GICS
        for (var symbol in HOLDINGS) {  // crawl flareData and add holdings.
          if (HOLDINGS.hasOwnProperty(symbol)) {
            var holding = HOLDINGS[symbol];
            holding.symbol = symbol;
            holding.name = find(prices, 'symbol', symbol, false, 'Name');
            holding.price = find(prices, 'symbol', symbol, false, 'LastTradePriceOnly');
            holding.sub_industry_id = symbol2subindustry[symbol];
            holding.sub_industry_name = SUB_INDUSTRY_MAP[holding.sub_industry_id].name;
            holding.sector_id = parseInt(String(holding.sub_industry_id).slice(0,2), 10);
            holding.value = Math.round(holding.price * holding.qty);
            addSecurity(flareData, holding);
          }
        }
        pruneEmptyBranches(flareData);
        return flareData;
      }

      // Removes branches where no securities contained.
      function pruneEmptyBranches(d) {
        for (var c = d.children.length; c > 0;) {
          var kid = d.children[--c];
          if (!kid.value) {
            if (kid.children) {
              pruneEmptyBranches(kid);
            } else {
              d.children.splice(c, 1);
            }
          }
        }
      }

      // adds security to flareData, matching on sub-industry name.
      function addSecurity(flareData, holding) {
        var subName = holding.sub_industry_name;
        if (flareData.name === subName) {
          flareData.children = flareData.children || [];
          flareData.sector_id = holding.sector_id;
          flareData.children.push(holding); // add child if name matches
          return true;
        }
        if (!flareData.children) {
          return false; // unexpected structure
        }
        flareData.children.forEach(
            function (kid) {
              if (addSecurity(kid, holding)) {
                kid.sector_id = holding.sector_id;
                return true;
              }
            }
        );
        return false;
      }

      function initialize(root) {
        root.x = root.y = 0;
        root.dx = width;
        root.dy = height;
        root.depth = 0;
      }

      // Aggregates the values for internal nodes. Normally done by the treemap layout
      function accumulate(d) {
        return (d._children = d.children) ?
               d.value = d.children.reduce(
                   function (p, v) {
                     v.sector_id = (v.children && v.children.length) ? v.children[0].sector_id : v.sector_id;
                     return p + accumulate(v);
                   }, 0)
            : d.value;
      }

      //polygon points for arrows. e.g. '0,0 116,0 123,15 116,30 0,30 7,15';
      function pointsCalc(textWidth) {
        var a = [];
        textWidth += 14;
        a.push('0,0');
        a.push(textWidth + ',0');
        a.push(textWidth + 7 + ',' + 15);
        a.push(textWidth + ',' + 30);
        a.push('0,' + 30);
        a.push(7 + ',' + 15);
        return a.join(' ');
      }
      function updateBreadCrumbTrail(d) {
        lastX = 0;
        var objPath = [];
        breadCrumbTrail.datum(d.parent).selectAll('g').remove();
        objPath.unshift(d);
        while(d.parent){
          objPath.unshift(d.parent);
          d = d.parent;
        }

        for(var o = 0; o < objPath.length; o++){
          var obj = objPath[o];
          var g = d3.select('.trail').append('g');
          g.datum(obj);

          var arrow = g.append('polygon').attr('fill', function(obj) { return colorScale(obj.sector_id || 0); } ).style('stroke', '#dddddd');
          var txt = g.append('text').text('' + obj.name)
              .attr('y', 15)
              .attr('x', o > 0 ? 12 : 8)
              .attr('dy', '0.35em')
              .attr('class', 'breadcumb-text')
              .style('fill', function(obj) {
                return getContrastYIQ(colorScale(obj.sector_id || 0));
              });
          var textWidth = txt[0][0].offsetWidth;
          arrow.attr('points', pointsCalc(textWidth)).on('click' , function(d){goUp(d)});
          g.attr('transform', function() { return 'translate(' + ((10 * o) + lastX) + ', 0)' });
          lastX += textWidth + 6;
        }
        breadCrumbTrail.select('.trail').style('visibility', '');
      }

      // Compute the treemap layout recursively
      function layout(d) {
        if (d._children) {
          treemap.nodes({_children: d._children});
          d._children.forEach(function (c) {
            c.x = d.x + c.x * d.dx;
            c.y = d.y + c.y * d.dy;
            c.dx *= d.dx;
            c.dy *= d.dy;
            c.parent = d;
            c.fill = getContrastYIQ( colorScale(c.sector_id || 0) );
            layout(c);
          });
        }
      }


      function display(d) {
        svg.html('');
        var g1 = svg.insert('g')
            .datum(d)
            .attr('class', 'depth');

        var g = g1.selectAll('g')
            .data(d._children)
            .enter().append('g');

        g.filter(function (d) { return d._children })
            .classed('children', true)
            .on('click', transition);

        g.selectAll('.child')
            .data(function (d) { return d._children || [d] })
            .enter().append('rect')
            .attr('class', 'child')
            .call(rect);

        g.append('text')
            .attr('class', function (d) { return d.qty ? 'holding' : 'binLabel' })
            .attr('dy', '.75em')
            .attr('fill', getContrastYIQ(colorScale(d.sector_id || 0)))
            .text(function (d) {
              if (d.qty) {  // it is a holding
                return d.name + ' (' + d.symbol + ')'
              }
              return d.name;
            })
            .call(text);
        
        g.append('text')
            .attr('class', 'currency')
            .attr('dy', '1.75em')
            .text(function (d) { return formatCurrency(d.value); })
            .call(text);

        function transition(d, isUp) {
          if (transitioning || !d){ return; }
          transitioning = true;

          var g2 = display(d);
          var t1 = g1.transition().duration(750);
          var t2 = g2.transition().duration(750);

          x.domain([d.x, d.x + d.dx]);    // Update the domain only after entering new elements.
          y.domain([d.y, d.y + d.dy]);

          svg.style('shape-rendering', null); // Enable anti-aliasing during the transition.

          if(d.depth !== 0 && isUp){ // Except for top level draw child nodes on top of parent nodes.
            svg.selectAll('.depth').sort(function (a, b) {
              return a.depth - b.depth;
            });
          }

          g2.selectAll('text').style('fill-opacity', 0);  // Fade-in entering text.

          t1.selectAll('text').call(text).style('fill-opacity', 0);   // Transition to the new view.
          t2.selectAll('text').call(text).style('fill-opacity', 1);
          t1.selectAll('rect').call(rect);
          t2.selectAll('rect').call(rect);

          t1.remove().each('end', function () {   // Remove the old node when the transition is finished.
            svg.style('shape-rendering', 'crispEdges');
            transitioning = false;
          });
          transitioning = false;
        }

        goUp = function(d){
          transition(d, true);
        };

        function buildLegend(root){
          var lg = legend.append('g').attr('display', 'table-cell');
          root._children.forEach(function(d){
            var wrekd = lg.append('rect')
                .attr('height', 30)
                .attr('fill', colorScale(d.sector_id || 0))
                .attr('y', 0)
                .attr('overflow-x', 'visible')
                .datum(d)
                .on('click', transition);
            var txt = lg.append('text')
                .text(function(){
                  return find(SUB_INDUSTRY_MAP, 'sector_id', d.sector_id, false, 'name');
                })
                .attr('y', 17)
                .attr('fill', getContrastYIQ(colorScale(d.sector_id || 0)))
                .on('click', transition);
            var txtWidth = txt[0][0].offsetWidth;
            wrekd.attr('width', (txtWidth + 17) ).attr('x', lastX);
            txt.attr('x', 8 + lastX);
            lastX += (txtWidth + 16);
          });
          isLegendComplete = true;
        }
        
        !isLegendComplete && buildLegend(root);
        updateBreadCrumbTrail(d);
        return g;
      }

      function text(str) {
        str.attr('x', function (d) { return x(d.x) + 6 })
            .attr('y', function (d) { return y(d.y) + 6 })
            .attr('fill',
            function(d) {
              return getContrastYIQ( colorScale(d.sector_id || 0) );
            }
        );
      }

      function rect(rec) {
        rec.attr('x', function (d) { return x(d.x) })
            .attr('y', function (d) { return y(d.y) })
            .attr('width', function (d) { return x(d.x + d.dx) - x(d.x) })
            .attr('height', function (d) { return y(d.y + d.dy) - y(d.y) })
            .attr('fill', function(d) { return colorScale(d.sector_id || 0) } );
        return rec;
      }

      var root = buildFlareData(prices);
      initialize(root);
      accumulate(root);
      layout(root);
      display(root);

    }
  }
  run();
})(d3, HOLDINGS, SUB_INDUSTRY_MAP, SECTOR_IDS, symbol2subindustry, flareSectorMap);


