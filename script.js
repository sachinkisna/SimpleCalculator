let currentDisply='';
function onclick1(){
        currentDisply+='1';
        document.querySelector('#display').value=currentDisply;
}function onclick2(){
        currentDisply+='2';
        document.querySelector('#display').value=currentDisply;
}function onclick3(){
        currentDisply+='3';
        document.querySelector('#display').value=currentDisply;
}function onclick4(){
        currentDisply+='4';
        document.querySelector('#display').value=currentDisply;
}function onclick5(){
        currentDisply+='5';
        document.querySelector('#display').value=currentDisply;
}function onclick6(){
        currentDisply+='6';
        document.querySelector('#display').value=currentDisply;
}function onclick7(){
        currentDisply+='7';
        document.querySelector('#display').value=currentDisply;
}function onclick8(){
        currentDisply+='8';
        document.querySelector('#display').value=currentDisply;
}function onclick9(){
        currentDisply+='9';
        document.querySelector('#display').value=currentDisply;
}function onclick0(){
        currentDisply+='0';
        document.querySelector('#display').value=currentDisply;
}function onclickp(){
        currentDisply+='+';
        document.querySelector('#display').value=currentDisply;
}function onclickm(){
        currentDisply+='-';
        document.querySelector('#display').value=currentDisply;
}function onclickmulti(){
        currentDisply+='*';
        document.querySelector('#display').value=currentDisply;
}function onclickd(){
        currentDisply+='/';
        document.querySelector('#display').value=currentDisply;
}function onclickpoint(){
        currentDisply+='.';
        document.querySelector('#display').value=currentDisply;
}function onclickclear(){
        currentDisply='';
        document.querySelector('#display').value=currentDisply;
}function onclickequal(){
    let result=eval(currentDisply);
    currentDisply=result;
    document.querySelector('#display').value=currentDisply;
    
}