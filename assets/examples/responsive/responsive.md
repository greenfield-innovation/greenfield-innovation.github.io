---
layout: examples
permalink: /examples/responsive/
title: Responsive Web App
tags: [mobile-first, responsive, bootstrap 3, software development service, dev-on-demand, contract, hourly, retainer, senior user experience engineer]
modified: 2015-05-22
---
<style type="text/css">


.schprockets {
  box-sizing: border-box;
  width: 100%;
  max-width: 1040px;
  max-height: 675px;
  border: 2px solid #222222;
  border-right: 12px solid #222222;
  background-color: #222222;
  padding: 0;
  zoom: 1;
  position: relative;
  overflow-y: visible;
}

.banner figure {
  display: inline-block;
  margin:0;
  padding:0;
  -webkit-margin-before:0;
  -webkit-margin-after:0;
  -webkit-margin-start:0;
  -webkit-margin-end:0;
}

.banner figcaption {
  display: block;
  position: relative;
  bottom: 0;
  left: 25%;
  width: 75%;
  height: 2rem;
  zoom: 1;
  opacity: .6;
  margin: 0;
  padding: 2.2rem 1rem 0 0;
  background-color: #222222;
  color: #ffffff;
  font-size: 1.1rem;
  text-align: right;
  overflow-y: visible;
}

.banner {
  width: 100%;
  overflow: hidden;
  font-size: 1.7%;
  line-height: 3.3%;
  text-align: center;
  color: rgba(255,255,255,.6);
  background: #222;
}
.banner ul {
  padding:0;
  margin:0;
  list-style: none;
  width: 300%;
}
.banner ul li {
  display: block;
  float: left;
  width: 33%;
  min-height: 350px;
  -o-background-size: 100% 100%;
  -ms-background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  -webkit-background-size: 100% 100%;
  background-size: 100% 100%;
}

.banner .inner {
  padding: 160px 0 110px;
}

.banner .btn:hover {
  background: rgba(255,255,255,.05);
}

.banner .dots {
  position: absolute;
  left: 0;
  bottom: 1.5rem;
  margin: 0;
  padding: 0;
}

.banner .dots li {
  display: inline-block;
  zoom: 1;
  width: 1.1rem;
  height: 1.1rem;
  line-height: 1.1rem;
  margin: 0 .25rem;
  text-indent: -999em;
  border: 2px solid #fff;
  border-radius: .4rem;
  cursor: pointer;
  opacity: .4;
  -webkit-transition: background .5s, opacity .5s;
  -moz-transition: background .5s, opacity .5s;
  transition: background .5s, opacity .5s;
}

.banner .dots li.active {
  background: #fff;
  opacity: 1;
}

@media only screen and (max-width: 669px){
  .deviceEmulation {
    display:none;
  }
}

/** stack sprocket holes/dots and caption */
@media only screen and (max-width: 580px) {
 .banner .dots {
   position: relative;
   padding-left: 12px;
   margin: 0 auto;
   float: none;
   width: 100%;
   clear: both;
  }
  .banner figcaption {
    width: 100%;
    left: 0;
    clear: both;
    float: none;
    padding: .75rem 0 0 12px;
    text-align: center;  
  }
}

/* make up for disproportionate min-height 350px on unslide */
@media only screen and (max-width: 534px) {
  .banner figcaption {
    padding: 0 0 0 12px;
    margin-top: 1rem;
  }
  .banner .dots {
    bottom: 2rem;
  }
}
</style>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>


## Challenge
* Auto insurance consumers compare brands and purchase 
* Single page application in beta
* Costly maintenance, with ~ 2200 lines of custom CSS (50%)
* Must become mobile-responsive
* Needed to accept private-label brands
* Rapidly evolving business rules


## Approach
* Establish support matrix for screens small as 360px
* Rethink grid layouts with Bootstrap
* Gradually replace custom styling
* Write Ember code for new features and interactions


## Results
* Reaches variety of mobile-only customers
* Increases touch-free sales, savings for agents
* Saves money with shorter approval loops and a free license
* Reduces regression risk
* Less proprietary code to manage
* Easy handoff to client / well-understood standards

<div class="schprockets">
  <div class="banner" style="max-height: 675px; overflow: hidden;">
    <ul>
      <li><figure>
        <img  
          alt="Mobile emulation during development"
          title="Samsung Galaxy S4" 
          src="/assets/examples/responsive/360x640-samsung-galaxy-s4/04-rates-1040.png?__inline=true" />
        <figcaption><span class="deviceEmulation">Device emulation: </span>360x640 Samsung Galaxy S4</figcaption></figure>
      </li>
      <li><figure>
        <img  
          alt="Mobile emulation during development"
          title="iPhone 6 vertical" 
          src="/assets/examples/responsive/375x667-iphone-6/04-rates-1040.png" />
        <figcaption><span class="deviceEmulation">Device emulation: </span>375x667 Apple iPhone 6</figcaption></figure>
      </li>
      
      <li><figure>
        <img  
          alt="Mobile emulation during development" 
          title="Google Nexus 7 horizontal" 
          src="/assets/examples/responsive/960x600-google-nexus-7/04-rates-1040.png" />
        <figcaption><span class="deviceEmulation">Device emulation: </span>960x600 Google Nexus 7</figcaption></figure>
      </li>
    
      <li><figure>
        <img  
          alt="Mobile emulation during development"
          title="Blackberry Playbook" 
          src="/assets/examples/responsive/1024x600-blackberry-playbook/04-rates-1040.png" />
        <figcaption><span class="deviceEmulation">Device emulation: </span>1024x600 Blackberry Playbook</figcaption></figure>
      </li>
    
      <li><figure>
        <img  
          alt="Mobile emulation during development"
          title="Apple iPad Mini" 
          src="/assets/examples/responsive/1024x768-ipad-mini/04-rates-1040.png" />
        <figcaption><span class="deviceEmulation">Device emulation: </span>1024x768 Apple iPad Mini</figcaption></figure>
      </li>
      
      <li><figure>
        <img  
          alt="Mobile emulation during development" 
          title="Google Nexus 10 horizontal" 
          src="/assets/examples/responsive/1280x800-google-nexus-10/04_rates-1040.png" />
        <figcaption><span class="deviceEmulation">Device emulation: </span>1280x800 Google Nexus 10</figcaption></figure>
      </li>
      
      <li><figure>
        <img  
          alt="Device emulation during development" 
          title="Apple Thunderbolt 27in Display" 
          src="/assets/examples/responsive/2560x1440-apple-thunderbolt/rates-2560x1440-apple-thunderbolt-1040.png" />
        <figcaption><span class="deviceEmulation">Device emulation: </span>2560x1440 Apple Thunderbolt Display</figcaption></figure>
      </li>
    </ul>
  </div>
</div>

<span class="tags">Bootstrap, Ember, Handlebars, Elixir, Couchbase, Compare &amp; Buy</span>

<script src="../../js/plugins/unslider.min.js?__inline=true"></script>
<script async defer src="../../js/plugins/jquery.touchSwipe.min.js?__inline=true"></script>


<script>
  var unslider, slidey;
  $(document).ready(function() {
    unslider = $('.banner').unslider({
      speed: 250,               //  The speed to animate each slide (in milliseconds)
      delay: 4000,              //  The delay between slide animations (in milliseconds)
      starting: function() {},  //  A function that gets called before every slide animation
      complete: function() {},  //  A function that gets called after every slide animation
      keys: true,               //  Enable keyboard (left, right) arrow shortcuts
      dots: true,               //  Display dot navigation
      easing: 'linear',
      fluid: false              //  Support responsive design. May break non-responsive designs
    });
    slidey = unslider.data('unslider');
    slidey.next();
    slidey.stop();
  }); 
  
  $('.banner.hasdots li.dot').click(function() {
    unslider.data.stop();
  });  
</script>
