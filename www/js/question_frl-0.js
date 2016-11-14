$(document).on('pageshow', '#question_li', function(){ 

 question_emergency_array = JSON.parse(sessionStorage.getItem("question_emergency_array"));
var c=0;
for(a=0;a<question_emergency_array.length;a++){

  question_li_li = question_emergency_array[a];

  ques = question_li_li.emergency_quest;



  var quest_li='<div>'+c+'</div><div class="row" style="background-color: #ebebeb; height: 70px;    margin-left: 5px;margin-right: 7px;"><div class="col-xs-8 padz "><div class="box">'+ques+'</div></div><div class="col-xs-4 padz"><div class="box"> <fieldset data-role="controlgroup" data-type="horizontal" data-mini="true" class="ui-controlgroup ui-controlgroup-horizontal ui-corner-all ui-mini"><div class="ui-controlgroup-controls "><div class="ui-radio ui-mini"><label for="radio-choice-a1" class="ui-btn ui-corner-all ui-btn-inherit ui-radio-on ui-btn-active ui-first-child">YES</label><input type="radio" name="radio-choice-a1'+c+'" id="radio-choice-a1'+c+'" value="choice-a1" checked="checked"></div><div class="ui-radio ui-mini"><label for="radio-choice-b1" class="ui-btn ui-corner-all ui-btn-inherit ui-radio-off ui-last-child">NO</label><input type="radio" name="radio-choice-a1'+c+'" id="radio-choice-a1'+c+'" value="choice-b1"></div></div></fieldset></div></div></div><br>'

//var quest_li = '<div class="ui-grid-c vgb" id="checkbox'+c+'"><div class="ui-block-a "><label class="flo">Yes:</label><input type="radio" id="result_yes'+c+'" name="result_yes'+c+'"  value="yes" ></div><div class="ui-block-b"><label class="flo">No:</label><input type="radio" id="result_yes'+c+'" name="result_yes'+c+'" value="no" class="marl"><br id="result_no_br'+c+'"></div><div class="ui-block-c "><label class="flo">N/A:</label ><input type="radio" id="result_yes'+c+'" name="result_yes'+c+'" value="na" checked></div><div class="ui-block-d"><a href="#" class="ui-btn pls ui-shadow ui-corner-all ui-icon-plus ui-btn-icon-notext"  id="add'+c+'" onclick="showfields('+c+');">Add</a><a href="#" id="minus'+c+'" class="ui-btn pls ui-shadow ui-corner-all ui-icon-minus ui-btn-icon-notext" style="display:none" onclick="hidefields('+c+');" >Minus</a><br id="result_na_br'+c+'" style="display:none;"></div></div><div class="paf"><input type="text"   id="findings'+c+'" name="findings'+c+'" placeholder="Findings" style="display:none;"><select name="responsibility'+c+'" id="responsibility'+c+'" onchange="enabledate('+c+');" ><option value="0">Choose Responsibility</option><option value="supervisor">Supervisor</option><option value="Manager">Manager</option><option value="GM">GM</option></select><input type="date" style="display:none;"  id="datepicker'+c+'" name="datepicker'+c+'"  disabled/></div>';
c++;
$('#quest_li').append(quest_li);
	
}


});