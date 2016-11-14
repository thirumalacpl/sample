//$("#map").css("display","none");
navigator.geolocation.getCurrentPosition(onSuccess, onError);
function onSuccess(position) {
var element = document.getElementById('map');
lati = position.coords.latitude;
//alert(lati+'lati');
long = position.coords.longitude;
//alert(long+'long');
initMap();
}
function onError(error) {
alert('code: ' + error.code + 'n' +
'message: ' + error.message + 'n');
}
var map;
var infowindow;
function initMap() {
  var pyrmont = {lat: lati, lng: long};
  map = new google.maps.Map(document.getElementById('map'), {
    center: pyrmont,
    zoom: 1
  });
 document.getElementById('map').style.visibility = 'hidden';
var keyword = location.hash.replace("#","");
//alert(keyword+'keyword');
//document.getElementById("key").innerHTML = keyword.toUpperCase();
  var service = new google.maps.places.PlacesService(map);
  //alert(service+'service');
  service.nearbySearch({
    location: pyrmont,
    radius: 500,
    types: [keyword]
  }, callback);
}
function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    //alert(status+'status'+google.maps.places.PlacesServiceStatus.OK+'google.maps.places.PlacesServiceStatus.OK');
    for (var i = 0; i < results.length; i++) {  
      var placeLoc = results[i].geometry.location;
      //alert(placeLoc+'placeLoc');
  var placeName = results[i].name;
 // alert(placeName+'placeName');
  var address = results[i].vicinity;

  var place_id = results[i].place_id;
//alert(address+'address'+place_id);
/*var chatr='<br><div class="ui-grid-b"  id="image"><div class="ui-block-a msg_grid_3" style="margin-top: 6%;"> <i class="zmdi zmdi-time zmd-fw" style="    opacity: 0.5; padding-left:7%;"></i><span class="msg_span_3">'+address+'</span><br><span class="msg_span_3">'+address+'</span><a href="#"  class="delete" id="'+address+'"><img src="images/primary/delete_icon1.png"  class="img_delete_icon" alt="" ></a>  </div><div class="ui-block-b msg_box msg_grid_4 msg_mid_bgg"><p class="msg_grid_p_1 "><a href="#popupPhotoPortrait" data-rel="popup" data-position-to="window" class="ui-btn ui-corner-all ui-shadow ui-btn-inline im" data-transition="fade" id="'+address+'"><img src="http://staging.eimpressive.com/fourthforce/super/'+address+'"  class="imgsize imguirot" alt="" ></a></p></div><div class="ui-block-c msg_grid_5 msg_grid_5_1"><img src="images/primary/chat-icon.png" alt="" class="p_img_grid" style="width:80px;"><br><p class="p_msg_grid">'+address+'</p></div></div> '



$('.chatr').append(chatr);*/

var att="<h1 >" + placeName + "</h1><br><p>" + address + "</p><br><a href='' class='iom' id='" + address + "'><button>click</button></a>" 
$('#att').append(att);


  //alert(address+'address');
  $( "div#display" ).append( $( "<div data-role='collapsible' ><h1 >" + placeName + "</h1><p onclick='Myfuncti()' id='df' value='" + address + "'>" + address + "</p></div>" ) );
$('[data-role=collapsible').collapsible();

/*   $(".im").click(function(){

var element = $(this);
var img_id = element.attr("id");
//alert(img_id+'asdasdw');
  
});*/

    }

    $(".iom").click(function(){  
alert('po');
var element = $(this);
var imgg_id = element.attr("id");
alert(imgg_id);

sessionStorage.setItem("imgg_id",JSON.stringify(imgg_id)); 
   //$("#positionWindowwer").open();
   $('#positionWindowwer').popup('open'); 
   navigator.geolocation.getCurrentPosition(locSuccess, locError);
     //e.preventDefault();
             //   calculateRoute();

//        $.mobile.changePage("getb.html", { transition: "none", changeHash: true, reverse: false }); return false;

});


    $("#map").remove();

var map,
                currentPosition,
                directionsDisplay, 
                directionsService;

            function initialize(lat, lon)
            {
               

                directionsDisplay = new google.maps.DirectionsRenderer(); 
                directionsService = new google.maps.DirectionsService();

                currentPosition = new google.maps.LatLng(lat, lon);

                map = new google.maps.Map(document.getElementById('map_canvas'), {
                   zoom: 15,
                   center: currentPosition,
                   mapTypeId: google.maps.MapTypeId.ROADMAP
                 });

                directionsDisplay.setMap(map);

                 var currentPositionMarker = new google.maps.Marker({
                    position: currentPosition,
                    map: map,
                    title: "Current position"
                });

                var infowindow = new google.maps.InfoWindow();
                google.maps.event.addListener(currentPositionMarker, 'click', function() {
                    infowindow.setContent("Current position: latitude: " + lat +" longitude: " + lon);
                    infowindow.open(map, currentPositionMarker);
                });
            }

            function locError(error) {
                // initialize map with a static predefined latitude, longitude
               initialize(59.3426606750, 18.0736160278);
            }

            function locSuccess(position) {
                initialize(position.coords.latitude, position.coords.longitude);
            }

            function calculateRoute() {
              user_objaq = JSON.parse(sessionStorage.getItem("imgg_id"));
              alert(user_objaq+'place input text');
                //var targetDestination = $("#target-dest").val();
                var targetDestination = user_objaq;
                if (currentPosition && currentPosition != '' && targetDestination && targetDestination != '') {
                    var request = {
                        origin:currentPosition, 
                        destination:targetDestination,
                        travelMode: google.maps.DirectionsTravelMode["DRIVING"]
                    };

                    directionsService.route(request, function(response, status) {
                        if (status == google.maps.DirectionsStatus.OK) {
                            directionsDisplay.setPanel(document.getElementById("directions"));
                            directionsDisplay.setDirections(response); 

                            /*
                                var myRoute = response.routes[0].legs[0];
                                for (var i = 0; i < myRoute.steps.length; i++) {
                                    alert(myRoute.steps[i].instructions);
                                }
                            */
                            $("#results").show();
                        }
                        else {
                            $("#results").hide();
                        }
                    });
                }
                else {
                    $("#results").hide();
                }
            }

            $(document).on("pageinit", "#map_page", function() {
                alert('yes');
                

            });

            $(document).on('click', '#directions-button', function(e){
                alert('directions');
                e.preventDefault();
                calculateRoute();

            });


            $(document).on('click', '#directions-buttona', function(e){
                alert('directionsaaaaaaa');
               navigator.geolocation.getCurrentPosition(locSuccess, locError);

            });
    
  }
}




/*    function Myfuncti(){
alert('asdasdddddd');
var dd=document.getElementById("df").value;
alert(dd+'dd');
var element = $(this);
var img_id = element.attr("id");
alert(img_id+'img_id');

}*/

/*$(".oom").click(function(){
alert('oom');
var element = $(this);
var img_id = element.attr("id");
alert(img_id+'img_id');
});*/


function Myfunc(){
    var val = document.getElementById("choice").value;
    window.location.href = "map.html#"+val;
  
}
function loader(){
      $('div.cssload-thecube').hide();
  }

