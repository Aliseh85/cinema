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
$("#paymentform").submit(function(event){

    event.preventDefault;
    var name = $('input[placeholder="דוגמא : דוד דוד"]').val();
    var email = $('input[placeholder="email@email.com: דוגמא"]').val();
    var address = $('input[placeholder="רחוב לואי פסטר 6"]').val();
    var city = $('input[placeholder="חיפה"]').val();
    var country = $('input[placeholder="ישראל"]').val();
    var zip = $('input[placeholder="2786423: דוגמא"]').val();
    var cardHolderName = $('input[placeholder="למשל : דוד דוד"]').val();
    var cardNumber = $('input[placeholder="1111-2222-3333-4444"]').val();
    var expiryMonth = $('input[placeholder="לדוגמא : אוקטובר"]').val();
    var expiryYear = $('input[placeholder="2023"]').val();
    var cvv = $('input[placeholder="דוגמא : 656"]').val();
    if (!name || !email || !address || !city || !country || !zip || !cardHolderName || !cardNumber || !expiryMonth || !expiryYear || !cvv) {
        window.alert("כל השדות הם חובה , נא למלא שוב!");
    }
    else{
        window.alert("תשלום בוצע בהצלחה!");
    }










});


});