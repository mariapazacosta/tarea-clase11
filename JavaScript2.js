let helado= 300;

let topping="oreo,kitkat,kinder";

let precio;

let preciofinal;

if (topping=="oreo"){
    precio=10;
}
else if(topping =="kitkat"){
    precio=15;
}
else if (topping=="kinder"){
    precio=25;
}
else{
   alert("no tenemos este topping") 
    
}

preciofinal= helado+precio;
alert("el precio es");
