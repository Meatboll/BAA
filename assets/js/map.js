$(document).ready(function(){
  buildMap();
});

var sw = document.body.clientWidth,
    bp = 550,
    $map = $('.map');
var static = httpmaps.google.commapsapistaticmapcenter=40.440625,-79.995886&zoom=13&markers=40.440625,-79.995886&size=640x320&sensor=true;
var embed = 'iframe width=980 height=650 frameborder=0 scrolling=no marginheight=0 marginwidth=0 src=https://www.google.com/maps/place/Bloomsburg+Auto+Auction/@40.9974912,-76.4865803,15z/data=!4m2!3m1!1s0x0:0xd735e2da6ef73c00
function buildMap() {
  if(swbp) { If Large Screen
      if($('.map-container').length  1) { If map doesn't already exist
        buildEmbed();
      }
  } else {
      if($('.static-img').length  1) { If static image doesn't exist
        buildStatic();
      }
  }
};

function buildEmbed() { Build iframe view
    $('div class=map-container').html(embed).prependTo($map);
};
  
function buildStatic() { Build static map
   var mapLink = $('.map-link').attr('href'),
       $img = $('img class=static-img ').attr('src',static);
   $('a').attr('href',mapLink).html($img).prependTo($map); 
}

$(window).resize(function() {
  sw = document.body.clientWidth;
  buildMap();
  google.maps.event.trigger(map, resize);
});// JavaScript Document