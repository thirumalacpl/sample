$(document).on('pageshow', '#question_li', function(){ 

				assignValues();
		

				$(document).off('click', '#lpa_create_but').on('click', '#lpa_create_but', function() { 
					alert('lpa_create_but');
			 		//$.mobile.changePage("/five.html");
					//$.mobile.changePage("five.html", { transition: "slide", changeHash: false, reverse: false });
						//alert('testing ajax');
						var allvalues =  readvalues();
	                    $.ajax({url: 'http://staging.eimpressive.com/slim/slim-heart/createlpa_heart.php',
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
							//alert('Data submitted succesfully 123');
							//$('#basic').popup('open'); 
							alert('success reach db');
							//$.mobile.changePage("two.html", { transition: "slide", changeHash: false, reverse: false });
							return false;
                        },
                        error: function (request,error) {
                        	alert('error reahcde');
                            // This callback function will trigger on unsuccessful action     
							console.log(request);
							console.log(error);           
                            alert('Network error has occurred please try again!');
                        }
                    });
					
					return false;
			 
				});	

});
	
		function assignValues(){
			//userobject = 	JSON.parse(sessionStorage.getItem("user_data"));	
			
	
			
			//plant_array = 	JSON.parse(sessionStorage.getItem("plant_data"));	
			category_array = 	JSON.parse(sessionStorage.getItem("categories_details_array"));	
			activity_array = 	JSON.parse(sessionStorage.getItem("activities_details_arrayaa"));	
			//console.log('page3');

			var c=0;
			for(a=0;a<category_array.length;a++){
				//for(a=0;a<2;a++){
				category_obj = category_array[a];
				activity_arr = activity_array[a];
				var cat = '<p class="cen1" id="category'+c+'">'+category_obj.category+'</p>';
				$('#pagination').append(cat);
				for(b=0;b<activity_arr.length;b++){
					
					activityobj = activity_arr[b];
					/*var act = '<hr id="hr'+c+'"><p class="cen2" id="activity'+c+'">'+activityobj.activity+'</p>';
var div_val = '<div class="ui-grid-b ansgrid" id="checkbox'+c+'"><div class="ui-block-b "><label class="flo">Yes:</label><input type="checkbox" id="result_yes'+c+'" name="result_yes'+c+'"  value="yes" ></div><div class="ui-block-b"><label class="flo">No:</label><input type="checkbox" id="result_no'+c+'" name="result_no'+c+'" value="no"><br id="result_no_br'+c+'"></div><div class="ui-block-c "><label class="flo">N/A:</label ><input type="checkbox" id="result_na'+c+'" name="result_na'+c+'" value="na"><br id="result_na_br'+c+'"></div></div><label id="find'+c+'">Findings</label><input type="text"   id="findings'+c+'" name="findings'+c+'"/><br id="findings_br'+c+'"><label id="resp'+c+'" for="responsibility'+c+'" class="select">Responsibility</label><select name="responsibility'+c+'" id="responsibility'+c+'"><option value="supervisor">Supervisor</option><option value="Manager">Manager</option><option value="GM">GM</option></select><br id="resp_br'+c+'"><label id="lbldate'+c+'">Date</label><input type="date"   id="datepicker'+c+'" name="datepicker'+c+'"/>'; */
					var act = '<hr id="hr'+c+'"><p class="cen2" id="activity'+c+'">'+activityobj.activity+'</p> ';
var div_val = '<div class="ui-grid-c vgb" id="checkbox'+c+'"><div class="ui-block-a "><label class="flo">Yes:</label><input type="radio" id="result_yes'+c+'" name="result_yes'+c+'"  value="yes" ></div><div class="ui-block-b"><label class="flo">No:</label><input type="radio" id="result_yes'+c+'" name="result_yes'+c+'" value="no" class="marl"><br id="result_no_br'+c+'"></div><div class="ui-block-c "><label class="flo">N/A:</label ><input type="radio" id="result_yes'+c+'" name="result_yes'+c+'" value="na" checked></div><div class="ui-block-d"><a href="#" class="ui-btn pls ui-shadow ui-corner-all ui-icon-plus ui-btn-icon-notext"  id="add'+c+'" onclick="showfields('+c+');">Add</a><a href="#" id="minus'+c+'" class="ui-btn pls ui-shadow ui-corner-all ui-icon-minus ui-btn-icon-notext" style="display:none" onclick="hidefields('+c+');" >Minus</a><br id="result_na_br'+c+'" style="display:none;"></div></div><div class="paf"><input type="text"   id="findings'+c+'" name="findings'+c+'" placeholder="Findings" style="display:none;"><select name="responsibility'+c+'" id="responsibility'+c+'" onchange="enabledate('+c+');" ><option value="0">Choose Responsibility</option><option value="supervisor">Supervisor</option><option value="Manager">Manager</option><option value="GM">GM</option></select><input type="date" style="display:none;"  id="datepicker'+c+'" name="datepicker'+c+'"  disabled/></div>';
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
			
			
		
			activity_array = 	JSON.parse(sessionStorage.getItem("activities_details_arrayaa"));
			category_array = 	JSON.parse(sessionStorage.getItem("categories_details_array"));	
			var act_val="";
			for(a=0;a<category_array.length;a++){
				activity_arr = activity_array[a];
				for(b=0;b<activity_arr.length;b++){
					activityobj = activity_arr[b];
					act_val+=activityobj.activity_id+"#";
					//console.log(activityobj);
					//console.log("id = " + activityobj.activity_id);
				}
			}
			//userdata = JSON.parse(sessionStorage.getItem("user_data"));
			$("#activityval").val(act_val);
		/*	$("#plant_id").val(JSON.parse(sessionStorage.getItem("plant_name")));
			$("#part_id").val(JSON.parse(sessionStorage.getItem("partno")));
			$("#shift").val(JSON.parse(sessionStorage.getItem("shift")));*/
			$("#user_id").val(JSON.parse(userdata.user_id));
			
			
			
 		}
		
