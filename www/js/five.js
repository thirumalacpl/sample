$(document).on('pageshow', '#question_li', function(){ 

//alert('condition');
		//userobject = JSON.parse(sessionStorage.getItem("categories_details_array"));	
		activities_details_ag = JSON.parse(sessionStorage.getItem("activities_details_arrayaa"));	
		pat_id_lasts = JSON.parse(sessionStorage.getItem("pat_id_lasts"));

		  $(document).off('click', '#tosear_nearby_mapp').on('click', '#tosear_nearby_mapp', function() {

$.mobile.changePage($('#sear_nearby_mapp'), { transition: "none", changeHash: true, reverse: false });

     return false;
});

$('#chestpain').empty();
$('#painstrt').empty();
$('#painstrt3').empty();
$('#painstrt4').empty();
$('#painstrt5').empty();
$('#painstrt6').empty();
$('#painstrt7').empty();
$('#painstrt8').empty();
$('#painstrt9').empty();
$('#painstrt10').empty();
$('#painstrt11').empty();
$('#painstrt12').empty();
$('#painstrt13').empty();

var c=0;
for(a=0;a<activities_details_ag.length;a++){
 activities_de = activities_details_ag[a];
var activities_de_categoryid = activities_de.category_id;

}

/*$(".chatSendBut_qua").click(function(){
var element = $(this);
var img_id = element.attr("id");
alert(img_id+'img_id');
});*/
$(document).off('click', '#chatSendBut_qu').on('click', '#chatSendBut_qu', function() { 
//alert('chat chatSendBut_qu    asdf');

var chstpain = $('input:radio[name=cpaina]:checked').val();  //14
//alert(chstpain+'chstpain    1'); 



var painstrttt = $('input:radio[name=cpainb]:checked').val();  //2
//alert(painstrttt+'painstrttt   2');

var painstrtt3 = $('input:radio[name=cpainc]:checked').val();  //15
//alert(painstrtt3+'painstrtt3       3');

var painstrtt4 = $('input:radio[name=cpaind]:checked').val();		//16
//alert(painstrtt4+'painstrtt4     4');

   var cpaine = [];
   $.each($("input[name='cpaine']:checked"), function(){            
                cpaine.push($(this).val());
            });
   //alert("My favourite sports 1 1 1 are: " + favorite.join(", "));

var cpain= cpaine[0];
var cpain1= cpaine[1];
var cpain2= cpaine[2];
var cpain3= cpaine[3];
var cpain4= cpaine[4];
//alert(cpain4+'cpain4');

var cpainf = [];
   $.each($("input[name='cpainf']:checked"), function(){            
                cpainf.push($(this).val());
            });
   //alert("My favourite sports 18 18 18 are: " + favorite.join(", "));

var cpai= cpainf[0];
var cpai1= cpainf[1];
var cpai2= cpainf[2];
var cpai3= cpainf[3];
//alert(cpai3+'cpai3');


var painstrtt7 = $('input:radio[name=cpaing]:checked').val();	//19
//alert(painstrtt7+'painstrtt7');
var painstrtt8 = $('input:radio[name=cpainh]:checked').val(); 	//5
//alert(painstrtt8+'painstrtt8');

var painstrtt9 = $('input:radio[name=cpaini]:checked').val();    //20
//alert(painstrtt9+'painstrtt9');
var painstrtt10 = $('input:radio[name=cpainj]:checked').val();   //7
//alert(painstrtt10+'painstrtt10');

var painstrtt10111 = $('input:radio[name=cpaink]:checked').val();     //8
//alert(painstrtt10+'painstrtt10      11');
var painstrtt1011 = $('input:radio[name=cpainl]:checked').val();   //21
//alert(painstrtt10+'painstrtt10      12');

var painstrtt1012 = $('input:radio[name=cpainm]:checked').val();    //10
//alert(painstrtt10+'painstrtt10     13' );




   var favorite = [];
   $.each($("input[name='painstrtt11']:checked"), function(){            
                favorite.push($(this).val());
            });
   //alert("My favourite sports 11 11 11 are: " + favorite.join(", "));

var far= favorite[0];
var far1= favorite[1];
var far2= favorite[2];
var far3= favorite[3];
var far4= favorite[4];
//alert(far4+'far4');

   var favoritea = [];
   $.each($("input[name='painstrtt12']:checked"), function(){            
                favoritea.push($(this).val());
            });
//alert("My favourite sports 12 12 are: " + favoritea.join(", "));

var fara= favoritea[0];
var far1a= favoritea[1];
var far2a= favoritea[2];
var far3a= favoritea[3];
var far4a= favoritea[4];
var far5a= favoritea[5];

var painstrtt13 = document.getElementById('anyop').value;


//alert(painstrtt13+'painstrtt13');


$.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
  options.async = true;
});


var formData = $("#callAjaxFormradio").serialize();

$.ajax({
  type: "POST",
url: "http://staging.eimpressive.com/slim/slim-heart-mergedb-resg/inser_radio.php?chstpain="+chstpain+"&painstrttt="+painstrttt+"&painstrtt3="+painstrtt3+"&painstrtt4="+painstrtt4+"&cpain="+cpain+"&cpain1="+cpain1+"&cpain2="+cpain2+"&cpain3="+cpain3+"&cpain4="+cpain4+"&cpai="+cpai+"&cpai1="+cpai1+"&cpai2="+cpai2+"&cpai3="+cpai3+"&painstrtt7="+painstrtt7+"&painstrtt8="+painstrtt8+"&painstrtt9="+painstrtt9+"&painstrtt10="+painstrtt10+"&pat_id_lasts="+pat_id_lasts+"&far="+far+"&far1="+far1+"&far2="+far2+"&far3="+far3+"&far4="+far4+"&fara="+fara+"&far1a="+far1a+"&far2a="+far2a+"&far3a="+far3a+"&far4a="+far4a+"&far5a="+far5a+"&painstrtt13="+painstrtt13+"&painstrtt1011="+painstrtt1011+"&painstrtt1012="+painstrtt1012+"&painstrtt10111="+painstrtt10111,
  data: formData,
  success: onSuccessyu,
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  error: onErroruop
});

function onSuccessyu(data){
//	alert('Successfully Submitted');
	$("#myPopup1da").popup("open");
	//alert('oikjas');
	//$("#positionWindow").popup('open');
	document.getElementById('anyop').value = '';
	//$.mobile.changePage($('#sear_nearby_mapp'), { transition: "none", changeHash: true, reverse: false });
}
function onErroruop(data){
	alert('er');
}


});

});