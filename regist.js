$(document).ready(function(){ 

    $("#facebookbtn").click(function(){
        window.alert("אנו מצטערים , הגישה לחיבור לפייסבוק הוא לא זמין כעת.")

    });

    $("#twitterbtn").click(function(){
        window.alert("אנו מצטערים , הגישה לחיבור לטוויטר הוא לא זמין כעת.")

    });

    $("#googlebtn").click(function(){
        window.alert("אנו מצטערים , הגישה לחיבור לגוגל הוא לא זמין כעת.")

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