let a=0;
let b=0;
let c=0;
let d=0;
function adddata(){
    let key1=document.getElementById("key1");
    let key2=document.getElementById("key2");
    let key3=document.getElementById("key3");
    let key4=document.getElementById("key4");

    const val1=document.getElementById("dist").value;
    const val2=document.getElementById("dur").value;
    const val3=document.getElementById("cal").value;
    
    a=a+Math.floor(val1);
    key1.innerHTML=a;

    b=b+Math.floor(val2);
    key2.innerHTML=b;

    c=c+Math.floor(val3);
    key3.innerHTML=c;

    d=d+1;
    key4.innerHTML=d;
}

$(document).ready(function(){
    $("#creator").click(function(){
        $("#target").slideToggle("slow");
    });       
});

function addgoal(){
    let t1=document.getElementById("id1");
    let t2=document.getElementById("id2");
    let t3=document.getElementById("id3");

    let table=document.getElementById("goals-table");

    let row = table.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    var x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");
    cell1.appendChild(x);
    cell2.innerHTML = t1.value;
    cell3.innerHTML = t2.value;
    cell4.innerHTML = t3.value;
}