//function to add active class to current page
$('.page .header ul li a').filter(function(){
    return this.href === location.href;
    
  }).addClass('active');

const myMap = new Map;