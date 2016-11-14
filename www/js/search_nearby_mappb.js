$(document).on('pageshow', '#sear_nearby_mapp', function(){ 

/*$(document).off('click','#search_near_twokmyu').on('click','#search_near_twokmyu'){*/
$(document).off('click','#search_near_twokmyu').on('click','#search_near_twokmyu',function(){
alert('2 js');
$.mobile.changepage($('#search_near_twokm'),{transition:"none",changeHash: true,reverse: false});
return false;
});

});