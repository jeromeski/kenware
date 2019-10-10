
$(document).ready(function(){
    new WOW().init();

    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay: true,
        autoplayTimeout:5000,
        margin: 20,
        responsiveClass: true, 
        nav: false,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            },

            1500:{
                items: 8
            }
        }
    });
});

var list = document.getElementsByClassName("marketplace__list");
var nodesToSort = list[0].querySelectorAll(".marketplace__item");
var orderBy = document.getElementById("marketplace__orderby");

orderBy.onchange = function() {
  if (orderBy.value === "ascending") {
    Array.prototype.map
      .call(nodesToSort, function(node) {
        return {
          node: node,
          relevantText: node.querySelector("span").textContent
        };
      })
      .sort(function(a, b) {
        return a.relevantText.localeCompare(b.relevantText);
      })
      .forEach(function(item) {
        list[0].appendChild(item.node);
      });
  } else if (orderBy.value === "descending") {
    Array.prototype.map
      .call(nodesToSort, function(node) {
        return {
          node: node,
          relevantText: node.querySelector("span").textContent
        };
      })
      .reverse(function(a, b) {
        return a.relevantText.localeCompare(b.relevantText);
      })
      .forEach(function(item) {
        list[0].appendChild(item.node);
      });
  }
  else {
      location.reload();
  }
};
