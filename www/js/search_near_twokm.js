$(document).on('pageshow', '#search_near_twokm', function(){ 

alert('Doctors around 2km');
twokm =  JSON.parse(sessionStorage.getItem("twokm")); 

  $(document).off('click', '#doctaroundtopageone').on('click', '#doctaroundtopageone', function() {
    sessionStorage.clear();
 $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
 return false;
  });

$('#cadd').empty();

for(a=0;a<twokm.length;a++){
  var twokm_sear_add = twokm[a];
  var dfr = '<li><div class="nd2-card card-media-right card-media-small"><div class="card-title bgc"><span style="float: right;width: 150px;color: white;"><a href="tel:'+twokm_sear_add.contact_no+'"><i class="zmdi zmdi-phone " style="color: white;padding-right: 25px;font-size:30px;"></i></a><a href="geo:0,0?q='+twokm_sear_add.hospital_name+'+'+twokm_sear_add.address+';"><i class="zmdi zmdi-turning-sign" style="color: white;padding-right: 25px;font-size:30px;"></i></a><span class="doc_hos_id"><input type="hidden" value="'+twokm_sear_add.hospital_id+'"><a href="#" class="hos_doc_id"><i class="zmdi zmdi-assignment-account zmd-fw" style="color: white;font-size:30px;"></i></a></span></span><h4 style="color:white" class="card-subtitle">'+twokm_sear_add.hospital_name+'</h4><br><h5 style="color:white" class="card-subtitle">'+twokm_sear_add.address+'</h5></div></div></li>'
  
  //var dfr = '<li><div class="nd2-card card-media-right card-media-small"><div class="card-title bgc"><span style="float: right;width: 150px;color: white;"><a href="tel:'+twokm_sear_add.contact_no+'"><i class="zmdi zmdi-phone " style="color: white;padding-right: 25px;font-size:30px;"></i></a><a href="intent://send/'+twokm_sear_add.contact_no+'#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end"><i class="zmdi zmdi-whatsapp " style="color: white;padding-right: 25px; font-size:30px;"></i></a><a href="geo:0,0?q='+twokm_sear_add.hospital_name+'+'+twokm_sear_add.address+';"><i class="zmdi zmdi-turning-sign" style="color: white;font-size:30px;"></i></a></span><h3 style="color:white" class="card-primary-title">'+twokm_sear_add.doctor_name+'</h3><br><h4 style="color:white" class="card-subtitle">'+twokm_sear_add.hospital_name+'</h4><br><h5 style="color:white" class="card-subtitle">'+twokm_sear_add.address+'</h5></div></div></li>'

$('#cadd').append(dfr);

}

$(document).off('click', '.hos_doc_id').on('click', '.hos_doc_id', function() {
	var hosid = $(this).closest('span.doc_hos_id').find("input[type=hidden]").val();
	var formData = $("#callAjaxFormdoc").serialize();
	$.ajax({
		type: "POST",
		url: "http://staging.eimpressive.com/slim/slim-heart-mergedb-resg/get_doctor_detail.php?hosid="+hosid,
		data: formData,
		success: onSuccessyu,
		async: 'true',
		crossDomain: true,
		dataType: 'json',
		error: onErrorins
	});

	function onSuccessyu(data){
		// alert('Successfully Submitted');
		$("#myPopup2da").popup("open");
		$('#docdis').empty();

		for (b=0;b<data.length;b++)
		{
			var doc_detail = data[b];
			var docli = '<li><div style="width:100%;float: left;"><div style="width:123px;"><img style="width: 64%;border-radius: 50%;" alt="doctors/blank.jpg" src="doctors/'+doc_detail.doctor_photo+'"></div></div><div style="width:100%;float: left;padding-top: 10px;padding-bottom: 10px;"><div><i class="zmdi zmdi-account zmd-fw"></i>'+doc_detail.doctor_name+'</div><br><div><i class="zmdi zmdi-graduation-cap zmd-fw"></i>'+doc_detail.qualification+'</div></div></li>';
			$('#docdis').append(docli);
		}
		/*alert('oikjas');
		$("#positionWindow").popup('open');
		document.getElementById('anyop').value = '';
		$.mobile.changePage($('#sear_nearby_mapp'), { transition: "none", changeHash: true, reverse: false });*/
	}
	function onErrorins(data){
		alert('er');
	}
});

$(document).off('click', '#docvieok').on('click', '#docvieok', function() {

$.mobile.changePage($('#search_near_twokm'), { transition: "none", changeHash: true, reverse: false });

     return false;
});


});