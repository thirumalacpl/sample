$(document).on('pageshow', '#pageone', function(){ 
	
$(document).off('click', '#emergency').on('click', '#emergency', function() { 
 $.mobile.changePage($('#patient_details'), { transition: "none", changeHash: true, reverse: false }); 
   return false;
});

});