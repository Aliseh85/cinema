function func1(){
    var quantity1 = document.getElementById("one-popcorn").value;
    if(isNaN(quantity1)){
        inputValue = 0;
    }

    var quantity2 = document.getElementById("couplepopcorn").value;
    if(isNaN(quantity2)){
        inputValue = 0;
    }
    var quantity3 = document.getElementById("big-popcorn").value;
    if(isNaN(quantity3)){
        inputValue = 0;
    }
    var quantity4 = document.getElementById("big-nachos").value;
    if(isNaN(quantity4)){
        inputValue = 0;
    }
    var quantity5 =document.getElementById("couplenachos").value;
    if(isNaN(quantity5)){
        inputValue = 0;
    }
    var onepopcorn = quantity1*40;
    var couplepopcorn = quantity2*56;
    var bigpopcorn = quantity3*44; 
    var totalpopcorn = Number(onepopcorn+couplepopcorn+bigpopcorn);
    var bigNachos = quantity4*45;
    var coupleNachos = quantity5*58;
    var totalNachos =Number(bigNachos+coupleNachos);
   
    if(onepopcorn>0){
        alert(parseInt(document.getElementById("one-popcorn").value)+":  פופקורן אישי כמות" +"\n"+
        onepopcorn + ":  מחיר");
    }
    if(couplepopcorn>0){ 
        alert(parseInt(document.getElementById("couplepopcorn").value)+": פופקורן זוגי כמות" +"\n"+
        couplepopcorn + ":  מחיר");

    }
    if(bigpopcorn>0){
        alert(parseInt(document.getElementById("big-popcorn").value)+": פופקורן גדול כמות" +"\n"+
        bigpopcorn + ":  מחיר");

    } 
    if(bigNachos>0){
        alert(parseInt(document.getElementById("big-nachos").value)+": נאצוס גדול כמות" +"\n"+
        bigNachos + ":  מחיר");

    } 
    if(coupleNachos >0){
        alert(parseInt(document.getElementById("couplenachos").value)+": נאצוס זוגי כמות" +"\n"+
        coupleNachos + ":  מחיר");

    }
    totalPrice = totalpopcorn+totalNachos;

    if(totalNachos == 0 && totalpopcorn==0)
    {
        alert("נא לבחור כמות הרצוי של התפריט");
    }

   
    
    

    document.getElementById("pp12").textContent =" סך הכל מחיר הפופקורן" +"  : "+ totalpopcorn.toString() + ' ש"ח';
    document.getElementById("pp22").textContent =" סך הכל מחיר נאצוס"+ " : "+totalNachos.toString() + ' ש"ח';
    document.getElementById("pp32").textContent="סך הכל מחיר"+" : "+totalPrice.toString() + 'ש"ח';


    document.getElementById("pp12").style.display = "block";
    document.getElementById("pp12").style.textAlign ="right center";
    document.getElementById("pp22").style.display = "block";
    document.getElementById("pp22").style.textAlign ="right center";
    document.getElementById("pp32").style.display = "block";
    document.getElementById("pp32").style.textAlign ="right center";
    
   
    
}