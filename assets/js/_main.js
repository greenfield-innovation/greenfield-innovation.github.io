/*! Plugin options and other jQuery stuff */

// Responsive Nav
var navigation = responsiveNav("#site-nav", { // Selector: The ID of the wrapper
  animate: true, // Boolean: Use CSS3 transitions, true or false
  transition: 400, // Integer: Speed of the transition, in milliseconds
  label: "<i class='icon-reorder'></i> Menu", // String: Label for the navigation toggle
  insert: "before", // String: Insert the toggle before or after the navigation
  customToggle: "", // Selector: Specify the ID of a custom toggle
  openPos: "relative", // String: Position of the opened nav, relative or static
  jsClass: "js", // String: 'JS enabled' class which is added to <html> el
  init: function(){}, // Function: Init callback
  open: function(){}, // Function: Open callback
  close: function(){} // Function: Close callback
});


$('html').click(function(e) {
  navigation.toggle(true);  //Hide the menus if visible
});

$('#nav-toggle').click(function(e) {
  e.stopPropagation();
  e.preventBubble();
  navigation.toggle();
});


$('#site-nav').click(function(event){
    event.stopPropagation();
});

// FitVids options
$(function() {
  $("article").fitVids();
});
