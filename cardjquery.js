$(document).ready(function(){ 

    $("#purchase").click(function(){ 

        var inputdate = $("#date").val();
        var dateval = new Date(inputdate)
        



       if(dateval.getMonth() < 1)
       {
        window.alert("אנא בחר מועד הזמנה המתאימה לתאריך הנוכחי בבקשה:");
       }
       else
       {

        $("#one").hide();
        $("#two").show();
       }
        

    });

    $("#btn2").click(function(){

        $("#btnN").show();
        $("#three").show();

        
        $('#btn3').click(function(){
            
            $('#three').hide();
            $('#four').show();

        });


    });

    $("#btn3").click(function(){

        $("#btnN").show();
        $("#four").show();
        $('#btn2').click(function(){
            $('#four').hide();
            $('#three').show();

        });


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
    






});