let childrens = document.querySelectorAll('li');


for (let i = 0; i < 17; i++) {
    if(i % 2===0){
        childrens[i].style.backgroundColor = "green";
        childrens[i].style.color = "white";
        
    }
    
}


childrens[0].style.backgroundColor = "blue";
childrens[0].style.color = "white";

childrens[8].style.backgroundColor = "green";
childrens[8].style.color = "white";

childrens[16].style.backgroundColor = "palevioletred";
childrens[16].style.color = "white";