function showValue(n){
    frm.output.value =frm.output.value + n;
}


function showZero(){
    document.getElementById("result").value= "";
}


function bckspace(){
   frm.output.value = frm.output.value.slice(0,frm.output.value.length-1);
}



