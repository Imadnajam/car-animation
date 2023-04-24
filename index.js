document.getElementById("b2").onclick=function(){
    let bike=document.querySelector(".items00");
    if(bike.classList!="items0"){
        bike.classList.remove("items00")
        bike.classList.add("items0")
        

    }
    
}
document.getElementById("b1").onclick=function(){
    let car=document.querySelector(".items01");
    if(car.classList!="items0"){
        car.classList.remove("items01")
        car.classList.add("items0")
       

    }
    
}
document.getElementById("b3").onclick=function(){
    let hous=document.querySelector(".items03");
    if(hous.classList!="items3"){
        hous.classList.remove("items03")
        hous.classList.add("items3")
    }
    
    let hous1=document.querySelector(".items02");
    if(hous1.classList!="items2"){
        hous1.classList.remove("items02")
        hous1.classList.add("items2")
    }
}