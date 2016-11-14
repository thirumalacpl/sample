// JavaScript Document

	//$(document).one('pagecreate', '#page_five', function(){  
		$(document).one('pagecreate', '#question_li', function(){ 

			userobject = JSON.parse(sessionStorage.getItem("patient_detaias_array"));	
	
/*	userobject_lastid =  JSON.parse(sessionStorage.getItem("userobject_lastid"));
			
if (userobject_lastid !== null){

	if (userobject_lastid != ""){
		alert(userobject_lastid +'userobject_lastid');
		$.mobile.changePage($('#sear_nearby_mapp'), { transition: "none", changeHash: true, reverse: false });
		return false;		
	
	}
}*/
			//alert('five 5555555555');
           // $("#page_five").live('pageinit', function() {
				assignValues();
		

				$(document).off('click', '#lpa_create').on('click', '#lpa_create', function() { 
					//alert('lpa_create five db 5555555555');
			 		//$.mobile.changePage("/five.html");
					//$.mobile.changePage("five.html", { transition: "slide", changeHash: false, reverse: false });
						//alert('testing ajax');
						var allvalues =  readvalues();
	                    $.ajax({url: 'http://staging.eimpressive.com/slim/slim-heart-mergedb/create_lpa_dbheart.php',
                        data:$('#lpaform').serialize(),
                        type: 'post',                   
                        async: 'true',
						crossDomain: true,
                        beforeSend: function() {
                            // This callback function will trigger before data is sent
                           // $.mobile.showPageLoadingMsg(true); // This will show ajax spinner
                        },
                        complete: function() {
                            // This callback function will trigger on data sent/received complete
                           // $.mobile.hidePageLoadingMsg(); // This will hide ajax spinner
                        },
                        success: function (result) {
							console.log(result);
							//alert('Report Submitted Succesfully ');
							$('#positionWindow').popup('open'); 
							//$.mobile.changePage($('#sear_nearby_mapp'), { transition: "none", changeHash: true, reverse: false });
							//$.mobile.changePage("two.html", { transition: "slide", changeHash: false, reverse: false });
							return false;
                        },
                        error: function (request,error) {
                        		alert('eeeeerrporr     succesfully 123');
                            // This callback function will trigger on unsuccessful action     
							console.log(request);
							console.log(error);           
                            alert('Network error has occurred please try again!');
                        }
                    });
					
					return false;
			 
				});	
				
				$(document).off('click', '#sear_nearby_mappp').on('click', '#sear_nearby_mappp', function() { 
	$.mobile.changePage($('#sear_nearby_mapp'), { transition: "none", changeHash: true, reverse: false });
				return false;		
				});

     });
	 
			
		function assignValues(){
			//alert('assignValues');
			userobject = JSON.parse(sessionStorage.getItem("patient_detaias_array"));	
			//alert(userobject);						
		for(a=0;a<userobject.length;a++){

  				employimg_obj = userobject[a];
				 ff = employimg_obj.patient_id;
					
					}

		//alert(ff+'patient_idxgcdrfs');

			
	$('#pagination').empty();
			
			//plant_array = 	JSON.parse(sessionStorage.getItem("plant_data"));	
	category_array = 	JSON.parse(sessionStorage.getItem("categories_details_array"));	
			activity_array = 	JSON.parse(sessionStorage.getItem("activities_details_arrayaa"));	
			//console.log('page3');
//alert('categories_details_array');

	

			var c=0;
			for(a=0;a<category_array.length;a++){
				//for(a=0;a<2;a++){
				category_obj = category_array[a];
				//alert(category_obj.category_desc);
				activity_arr = activity_array[a];
				//var cat = '<p class="cen1" id="category'+c+'" style="text-align:center">'+category_obj.category+'</p>';
				
				var cat = '<h3 class="ui-bar ui-bar-a texsb"  id="category_desc'+c+'" style="text-align:center">'+category_obj.category_desc+'</h3>';

				$('#pagination').append(cat);
				for(b=0;b<activity_arr.length;b++){
					
					activityobj = activity_arr[b];
					/*var act = '<hr id="hr'+c+'"><p class="cen2" id="activity'+c+'">'+activityobj.activity+'</p>';
var div_val = '<div class="ui-grid-b ansgrid" id="checkbox'+c+'"><div class="ui-block-b "><label class="flo">Yes:</label><input type="checkbox" id="result_yes'+c+'" name="result_yes'+c+'"  value="yes" ></div><div class="ui-block-b"><label class="flo">No:</label><input type="checkbox" id="result_no'+c+'" name="result_no'+c+'" value="no"><br id="result_no_br'+c+'"></div><div class="ui-block-c "><label class="flo">N/A:</label ><input type="checkbox" id="result_na'+c+'" name="result_na'+c+'" value="na"><br id="result_na_br'+c+'"></div></div><label id="find'+c+'">Findings</label><input type="text"   id="findings'+c+'" name="findings'+c+'"/><br id="findings_br'+c+'"><label id="resp'+c+'" for="responsibility'+c+'" class="select">Responsibility</label><select name="responsibility'+c+'" id="responsibility'+c+'"><option value="supervisor">Supervisor</option><option value="Manager">Manager</option><option value="GM">GM</option></select><br id="resp_br'+c+'"><label id="lbldate'+c+'">Date</label><input type="date"   id="datepicker'+c+'" name="datepicker'+c+'"/>'; */
					var act = '<hr id="hr'+c+'"><p class="cen2" id="observation_name'+c+'"></p> ';

//var div_val='<div class="ui-grid-c vgb" id="checkbox'+c+'" style="margin-left:50px"><div class="ui-block-a "><label class="flo">Yes:</label><input type="radio" id="result_yes'+c+'" name="result_yes'+c+'"  value="yes" ></div><div class="ui-block-b"><label class="flo">No:</label><input type="radio" id="result_yes'+c+'" name="result_yes'+c+'" value="no" class="marl" checked><br id="result_no_br'+c+'"></div></div>'
//var div_val='<div class="ui-grid-c vgb" id="checkbox'+c+'" ><div class="row" style="background-color: #ebebeb; height: 70px;    margin-left: 5px;margin-right: 7px;"><div class="col-xs-8 padz "><div class="box">'+activityobj.activity+'</div></div><div class="col-xs-4 padz"><div class="box"><label class="flo">Yes:</label><input type="radio" id="result_yes'+c+'" name="result_yes'+c+'"  value="yes" ></div><div class="ui-block-b" style="margin-left:40px;margin-top:-24px"><label class="flo">No:</label><input type="radio" id="result_yes'+c+'" name="result_yes'+c+'" value="no" class="marl" checked><br id="result_no_br'+c+'"></div></div></div></div>'
var div_val='<div class="row" style="background-color: #ebebeb; height: 70px;    margin-left: 5px;margin-right: 7px;"><div class="col-xs-8 padz "><div class="box">'+activityobj.observation_name+'</div></div><div class="col-xs-4 padz"> <div class="box"><fieldset data-role="controlgroup" data-type="horizontal" data-mini="true" class="ui-controlgroup ui-controlgroup-horizontal ui-corner-all ui-mini"><div class="ui-controlgroup-controls "><div class="ui-radio ui-mini"><label for="result_yes'+c+'" class="ui-btn ui-corner-all ui-btn-inherit ui-first-child ui-btn-active ui-radio-on">YES</label><input type="radio" id="result_yes'+c+'" name="result_yes'+c+'"  value="yes" ></div><div class="ui-radio ui-mini"><label for="result_yes'+c+''+c+'" class="ui-btn ui-corner-all ui-btn-inherit ui-last-child ui-radio-off">NO</label><input type="radio" id="result_yes'+c+''+c+'" name="result_yes'+c+'" value="no" class="marl" checked></div></div></fieldset></div></div></div>'
// newvar div_val='<div class="row" style="background-color: #ebebeb; height: 70px;    margin-left: 5px;margin-right: 7px;"><div class="col-xs-8 padz "><div class="box">Crushing - Like tighteneing with a rope</div></div><div class="col-xs-4 padz"><div class="box"><fieldset data-role="controlgroup" data-type="horizontal"><input type="radio" name="radio-choice-h-2" id="radio-choice-h-2a" value="on" checked="checked"><label for="radio-choice-h-2a">One</label><input type="radio" name="radio-choice-h-2" id="radio-choice-h-2b" value="off"><label for="radio-choice-h-2b">Two</label></fieldset></div></div></div>'

					c++;
   					$('#pagination').append(act+div_val);
					$('#pagination').enhanceWithin();
					//$('#result_yes'+c).val('na').attr("checked",true).checkboxradio("refresh");

				}
				
			}

			total = c;
		

			
		}
		
		

	
		
		

		function readvalues(){
			//var allvaluearray = new Array();
			//alert('readvalues');
			
				userobject = JSON.parse(sessionStorage.getItem("patient_detaias_array"));	
			//alert(userobject);						
		for(a=0;a<userobject.length;a++){

  				employimg_obj = userobject[a];
				 ff = employimg_obj.patient_id;
					
					}
	category_array = 	JSON.parse(sessionStorage.getItem("categories_details_array"));	
			activity_array = 	JSON.parse(sessionStorage.getItem("activities_details_arrayaa"));		
			var act_val="";
			for(a=0;a<category_array.length;a++){
				activity_arr = activity_array[a];
				for(b=0;b<activity_arr.length;b++){
					activityobj = activity_arr[b];
					act_val+=activityobj.observation_id+"#";
					//console.log(activityobj);
					//console.log("id = " + activityobj.activity_id);
				}
			}
			//userdata = JSON.parse(sessionStorage.getItem("user_data"));
			$("#activityval").val(act_val);
		/*	$("#plant_id").val(JSON.parse(sessionStorage.getItem("plant_name")));
			$("#part_id").val(JSON.parse(sessionStorage.getItem("partno")));
			$("#shift").val(JSON.parse(sessionStorage.getItem("shift")));*/
			
			$("#user_id").val(ff);
			sessionStorage.setItem("userobject_lastid",JSON.stringify($("#user_id").val()));
			//alert(ff+'ff');
			//alert('readvalues success')
			
 		}
		
		

		

		
		

		

		
