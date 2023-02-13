$(document).ready(function(){ 

    $('#newsleter').submit(function(e){

e.preventDefault();
var data ={};
$(this).find('input').each(function(){
if($(this).attr('name')){

data[$(this).attr('name')] = $(this).val();


}

});
window.alert(data.email+": המייל שהתקבל" +
"\n"+ "ביצוע רישום לניזלטור עבר בהצלחה ");

});


});