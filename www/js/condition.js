$(document).on('pageshow', '#pageone', function(){ 

//alert('condition');

$(document).off('click', '#emergency').on('click', '#emergency', function() {
//alert('condition emergency but clcik');
$.ajax({url: 'http://staging.eimpressive.com/slim/slim-heart-mergedb/condition.php?',
  data:$('#new').serialize(),
  type: 'post',                   
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  beforeSend: function() {
  },
  complete: function() {
  },
  success: function (result) {
    console.log('searchlpa ' +result);
    if(result[0]){
      $("#popupsearchmade").popup("open");
//alert('Data available for the search made');

/*       sessionStorage.setItem("condition_details_array",JSON.stringify(result[0]));
        sessionStorage.setItem("categories_details_array",JSON.stringify(result[1]));
           sessionStorage.setItem("activities_details_arrayaa",JSON.stringify(result[2]));*/

           //sessionStorage.setItem("user_data",JSON.stringify(result[1]));
              sessionStorage.setItem("condition_details_array",JSON.stringify(result[0]));
              sessionStorage.setItem("categories_details_array",JSON.stringify(result[1]));
              sessionStorage.setItem("activities_details_arrayaa",JSON.stringify(result[2]));
               sessionStorage.setItem("emergency","1");

$.mobile.loading().hide();
$.mobile.changePage($('#cond_patient_details'), { transition: "none", changeHash: true, reverse: false });
}else {
  alert('No Data Found for the search record'); 
}

return false;
},
error: function (request,error) {
// This callback function will trigger on unsuccessful action     
console.log(request);
console.log(error);  

alert('Network error has occurred please try again!');
}
});

});




/*condition = JSON.parse(sessionStorage.getItem("condition_details_array"));

alert(condition+'condition');*/


});