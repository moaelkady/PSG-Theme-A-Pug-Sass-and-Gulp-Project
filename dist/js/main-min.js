$(".page .header ul li a").filter(function(){return this.href===location.href}).addClass("active"),$(window).scroll(function(){$(this).scrollTop()?$("#toTop").fadeIn():$("#toTop").fadeOut()}),$("#toTop").click(function(){$("html, body").animate({scrollTop:0},1e3)});const myMap=new Map;