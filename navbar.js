let toggle=false;
function show(){
    let x=document.getElementsByClassName("item");
    if(toggle===false)
    {
    for(var i=0;i<x.length;i++)
    {
        x[i].className+=" responsive"
        toggle=true;
    }
    }
    else{
        for(var i=0;i<x.length;i++)
        {
            x[i].className="item";
            toggle=false;
        }
    }
}