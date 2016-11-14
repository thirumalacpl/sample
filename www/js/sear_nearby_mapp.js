$(document).on('pageshow', '#sear_nearby_mapp', function(){ 

//alert('0');

userobject_lastid =  JSON.parse(sessionStorage.getItem("pat_id_lasts"));

//alert(userobject_lastid+'userobject_lastid');
patient_detaias_array =  JSON.parse(sessionStorage.getItem("patient_detaias_array"));

$('.ajax-upload-dragdrop').empty();
$('.upload-statusbar').empty();
$('#status').empty();

$(document).off('click','#homebacfromupload').on('click','#homebacfromupload',function(){
	sessionStorage.clear();
$.mobile.changepage($('#pageone'),{transition:"none", changeHash: true, reverse: false});
return false;
});

/*$(document).off('click','#sear_addre-op').on('click','#sear_addre-op',function(){
//alert('as');
$.mobile.changepage($('#search_near_twokm'),{transition:"none", changeHash: true, reverse: false});
return false;
});*/

for(a=0;a<patient_detaias_array.length;a++){

  patient_detaias_arrayaa = patient_detaias_array[a];
pat_id = patient_detaias_arrayaa.patient_id;
//alert(pat_id+'pat_id');
}
//alert(pat_id+'pat_id');

if (userobject_lastid != "") {
ret_array =  JSON.parse(sessionStorage.getItem("ret_mage"));
$('#chatr').empty();
if(ret_array != null){
$('#chatr').empty();
for(a=0;a<ret_array.length;a++){

  activity_lok_obj = ret_array[a];

var imag=activity_lok_obj.document_name;
var imag_id=activity_lok_obj.patient_obs_id;
//alert(imag+'imag');
if(imag_id == pat_id ){
var chatr='<div class="ui-grid-solo"><div class="ui-block-a" style="background-color:#DADCE3"><a href="" class="imoud" id="'+activity_lok_obj.document_name+'"><img src="http://staging.eimpressive.com/cardio/uploads/'+activity_lok_obj.document_name+'" class="img_display_doc" alt="" ></a><a href="#"  class="delete_iop" id="'+activity_lok_obj.document_id+'"><img src="images/primary/delete_icon1.png"  class="img_delete_icon" alt="" ></a></div> </div> '

$('#chatr').append(chatr);
}
}
$(".imoud").click(function(){
	//alert('imoud');
  $('.imj').empty();
   $('#popupPhotoPortrait').popup('open');
var element = $(this);
var img_id = element.attr("id");
var imz='<a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right" style="background-color:#BC3217;width:50px;height: 50px;">Close</a><img src="http://staging.eimpressive.com/cardio/uploads/'+img_id+'" alt="Photo portrait" class="zoo_im">'

$('.imj').append(imz);
});
$(".delete_iop").click(function(){
var element = $(this);
var del_id = element.attr("id");
//alert(del_id+'del_id');
if(confirm("Are you sure you want to delete this?")){
$.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
  options.async = true;
});

var formData = $("#callAjaxForm").serialize();
//alert('drop button value insert 84 85');
$.ajax({
  type: "POST",
  url: "http://staging.eimpressive.com/slim/slim-heart-mergedb/delete_iop.php?del_id="+del_id,
  data: formData,
  success: onSuccesss,
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  error: onErrorrr
});
function onErrorrr(data, status)
{
alert("Network error ins ddddd");

}  
function onSuccesss(data, status)
{
	alert('Document deleted successfully');
		  sessionStorage.setItem("ret_mage",JSON.stringify(data));
	  ret_array =  JSON.parse(sessionStorage.getItem("ret_mage"));

if(ret_array != null){
$('#chatr').empty();
for(a=0;a<ret_array.length;a++){

  activity_lok_obj = ret_array[a];

var imag=activity_lok_obj.document_name;
//alert(imag+'imag');

var imag_id=activity_lok_obj.patient_obs_id;
//alert(imag+'imag');
if(imag_id == pat_id ){
//var chatr='<a class="imoud" id="'+activity_lok_obj.document_name+'"><img src="http://staging.eimpressive.com/cardio/uploads/'+activity_lok_obj.document_name+'" class="img_display_doc" alt="" ></a> '
//var chatr='<div class="ui-grid-solo"><div class="ui-block-a" style="background-color:#DADCE3"><a href="" class="imoud" id="'+activity_lok_obj.document_name+'"><img src="http://staging.eimpressive.com/cardio/uploads/'+activity_lok_obj.document_name+'" class="img_display_doc" alt="" ></a><a href="#"  class="delete_iop" id="'+activity_lok_obj.document_id+'"><img src="images/primary/delete_icon1.png"  class="img_delete_icon" alt="" ></a></div> </div> '
var chatr='<div class="ui-grid-solo"><div class="ui-block-a" style="background-color:#DADCE3"><a href="" class="imoud" id="'+activity_lok_obj.document_name+'"><img src="http://staging.eimpressive.com/cardio/uploads/'+activity_lok_obj.document_name+'" class="img_display_doc" alt="" ></a><a href="#"  class="delete_iop" id="'+activity_lok_obj.document_id+'"><img src="images/primary/delete_icon1.png"  class="img_delete_icon" alt="" ></a></div> </div> '

$('#chatr').append(chatr);
}
}
$(".imoud").click(function(){
	//alert('imoud');
  $('.imj').empty();
   $('#popupPhotoPortrait').popup('open');
var element = $(this);
var img_id = element.attr("id");
var imz='<a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right" style="background-color:#BC3217;width:50px;height: 50px;">Close</a><img src="http://staging.eimpressive.com/cardio/uploads/'+img_id+'" alt="Photo portrait" class="zoo_im">'

$('.imj').append(imz);
});
$(".delete_iop").click(function(){
var element = $(this);
var del_id = element.attr("id");
//alert(del_id+'del_id');
if(confirm("Are you sure you want to delete this?")){
$.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
  options.async = true;
});

var formData = $("#callAjaxForm").serialize();
//alert('drop button value insert 84 85');
$.ajax({
  type: "POST",
  url: "http://staging.eimpressive.com/slim/slim-heart-mergedb/delete_iop.php?del_id="+del_id,
  data: formData,
  success: onSuccesss,
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  error: onErrorrr
});

}

});
}
	}
}

});
}
var settings = {

  url: "http://staging.eimpressive.com/cardio/uploadas.php",
  method: "POST",
  allowedTypes:"jpg,png,gif",
  /*allowedTypes:"jpg,png,gif,doc,pdf,zip",*/
  fileName: "myfile",
  multiple: true,
  
  onSuccess:function(files,data,xhr)
  {
    //alert('success');
    sessionStorage.setItem("ret",JSON.stringify(data));
    ret =  JSON.parse(sessionStorage.getItem("ret"));
    //var res = ret.slice(12,100); //fourth
   var res_document_name = ret.slice(134,300); //stage
   // alert(res_document_name+'res_document_name');
   //alert(verification_user_id+'verification_user_id');
  //alert(coordinator_id+'coordinator_id');
  //alert(res+'res');
  // alert(qualification_id+'qualification_id');

$.ajaxPrefilter(function( options, originalOptions, jqXHR ) {

  options.async = true;
});

var formData = $("#callAjaxForm").serialize();

//alert(userobject_lastid+'userobject_lastid');
//alert(res_document_name+'res_document_name');

$.ajax({
  type: "POST",
url: "http://staging.eimpressive.com/slim/slim-heart-mergedb/cardiosdoc.php?userobject_lastid="+userobject_lastid+"&res_document_name="+res_document_name,

  data: formData,
  success: onSuccessad,
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  error: onErrorad
});

function onErrorad(data, status)
{
//alert("Network error ins ddddd");

}  
function onSuccessad(data, status)
{
	//alert("Successfully Submitted ins");
	  sessionStorage.setItem("ret_mage",JSON.stringify(data));
	  ret_array =  JSON.parse(sessionStorage.getItem("ret_mage"));

if(ret_array != null){
$('#chatr').empty();
for(a=0;a<ret_array.length;a++){

  activity_lok_obj = ret_array[a];

var imag=activity_lok_obj.document_name;
//alert(imag+'imag');

var imag_id=activity_lok_obj.patient_obs_id;
//alert(imag+'imag');
if(imag_id == pat_id ){
//var chatr='<a class="imoud" id="'+activity_lok_obj.document_name+'"><img src="http://staging.eimpressive.com/cardio/uploads/'+activity_lok_obj.document_name+'" class="img_display_doc" alt="" ></a> '
//var chatr='<div class="ui-grid-solo"><div class="ui-block-a"><a href="" class="imoud" id="'+activity_lok_obj.document_name+'"><img src="http://staging.eimpressive.com/cardio/uploads/'+activity_lok_obj.document_name+'" class="img_display_doc" alt="" ></a><a href="#"  class="delete_iop" id="'+activity_lok_obj.document_id+'"><img src="images/primary/delete_icon1.png"  class="img_delete_icon" alt="" ></a></div> </div> '
var chatr='<div class="ui-grid-solo"><div class="ui-block-a" style="background-color:#DADCE3"><a href="" class="imoud" id="'+activity_lok_obj.document_name+'"><img src="http://staging.eimpressive.com/cardio/uploads/'+activity_lok_obj.document_name+'" class="img_display_doc" alt="" ></a><a href="#"  class="delete_iop" id="'+activity_lok_obj.document_id+'"><img src="images/primary/delete_icon1.png"  class="img_delete_icon" alt="" ></a></div> </div> '

$('#chatr').append(chatr);
}
}
$(".imoud").click(function(){
	//alert('imoud');
  $('.imj').empty();
   $('#popupPhotoPortrait').popup('open');
var element = $(this);
var img_id = element.attr("id");
var imz='<a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right" style="background-color:#BC3217;width:50px;height: 50px;">Close</a><img src="http://staging.eimpressive.com/cardio/uploads/'+img_id+'" alt="Photo portrait" class="zoo_im">'

$('.imj').append(imz);
});
$(".delete_iop").click(function(){
var element = $(this);
var del_id = element.attr("id");
//alert(del_id+'del_id');
if(confirm("Are you sure you want to delete this?")){
$.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
  options.async = true;
});

var formData = $("#callAjaxForm").serialize();
//alert('drop button value insert 84 85');
$.ajax({
  type: "POST",
  url: "http://staging.eimpressive.com/slim/slim-heart-mergedb/delete_iop.php?del_id="+del_id,
  data: formData,
  success: onSuccesss,
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  error: onErrorrr
});
function onErrorrr(data, status)
{
alert("Network error ins ddddd");

}  
function onSuccesss(data, status)
{
	alert('Document deleted successfully');
		  sessionStorage.setItem("ret_mage",JSON.stringify(data));
	  ret_array =  JSON.parse(sessionStorage.getItem("ret_mage"));

if(ret_array != null){
$('#chatr').empty();
for(a=0;a<ret_array.length;a++){

  activity_lok_obj = ret_array[a];

var imag=activity_lok_obj.document_name;
//alert(imag+'imag');

var imag_id=activity_lok_obj.patient_obs_id;
//alert(imag+'imag');
if(imag_id == pat_id ){
//var chatr='<a class="imoud" id="'+activity_lok_obj.document_name+'"><img src="http://staging.eimpressive.com/cardio/uploads/'+activity_lok_obj.document_name+'" class="img_display_doc" alt="" ></a> '
var chatr='<div class="ui-grid-solo"><div class="ui-block-a" style="background-color:#DADCE3"><a href="" class="imoud" id="'+activity_lok_obj.document_name+'"><img src="http://staging.eimpressive.com/cardio/uploads/'+activity_lok_obj.document_name+'" class="img_display_doc" alt="" ></a><a href="#"  class="delete_iop" id="'+activity_lok_obj.document_id+'"><img src="images/primary/delete_icon1.png"  class="img_delete_icon" alt="" ></a></div> </div> '

$('#chatr').append(chatr);
}
}
$(".imoud").click(function(){
	//alert('imoud');
  $('.imj').empty();
   $('#popupPhotoPortrait').popup('open');
var element = $(this);
var img_id = element.attr("id");
var imz='<a href="#" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right" style="background-color:#BC3217;width:50px;height: 50px;">Close</a><img src="http://staging.eimpressive.com/cardio/uploads/'+img_id+'" alt="Photo portrait" class="zoo_im">'

$('.imj').append(imz);
});
$(".delete_iop").click(function(){
var element = $(this);
var del_id = element.attr("id");
//alert(del_id+'del_id');
if(confirm("Are you sure you want to delete this?")){
$.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
  options.async = true;
});

var formData = $("#callAjaxForm").serialize();
//alert('drop button value insert 84 85');
$.ajax({
  type: "POST",
  url: "http://staging.eimpressive.com/slim/slim-heart-mergedb/delete_iop.php?del_id="+del_id,
  data: formData,
  success: onSuccesss,
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  error: onErrorrr
});

}

});
}
	}
}

});
}
}
    $("#status").html("<font color='green'>Upload is success</font>");
    
  },
    afterUploadAll:function()
    {
       // alert("all images uploaded!!");
    },
  onError: function(files,status,errMsg)
  {   
    $("#status").html("<font color='red'>Upload is Failed</font>");
  }
}
$("#mulitplefileuploader").uploadFile(settings);

}

});