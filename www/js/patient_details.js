$(document).on('pageshow', '#patient_details', function(){ 

$(document).off('click', '#patient_deta_enter').on('click', '#patient_deta_enter', function() { 
 $.mobile.changePage($('#question'), { transition: "none", changeHash: true, reverse: false }); 
   return false;
});

});