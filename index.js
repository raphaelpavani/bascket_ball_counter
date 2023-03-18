let home = 0;
let guest = 0;
let total = 0;
let a =document.getElementById("result_home");
let b =document.getElementById("result_guest");

function sum_home1(){
    home = home + 1;
    a.innerText=home;
}

function sum_home2(){
    home = home + 2;  
    a.innerText=home;
}

function sum_home3(){
    home = home + 3;
    a.innerText=home;
}


/*-------------------------*/

function sum_guest1(){
    guest = guest + 1;
    b.innerText= guest;
}

function sum_guest2(){
    guest = guest + 2;  
    b.innerText=guest;
}

function sum_guest3(){
    guest = guest + 3;
    b.innerText=guest;
}
