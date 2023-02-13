$(document).ready(function(){ 

    $("#btn89").click(function(){

        $("#one").hide();

        $("#trailer").show();

    });

    $("#btnstat").click(function(){

        window.alert("אנו מתנצלים, הסרט הזה אינו זמין בקולנוע.");

    });

    $("#btnstat1").click(function(){

        window.alert("אנו מתנצלים, הסרט הזה אינו זמין בקולנוע.");

    });

    $("#btnstat2").click(function(){

        window.alert("אנו מתנצלים, הסרט הזה אינו זמין בקולנוע.");

    });
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
$(".back").click(function(){

  $("#trailer").hide();
  $("#one").show();

});


});