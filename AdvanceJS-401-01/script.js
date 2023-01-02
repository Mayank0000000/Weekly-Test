let para = document.getElementsByClassName('wrote')[0];
let inpt = document.getElementsByTagName('input')[0];



inpt.addEventListener("keyup",() => {
    para.innerHTML = inpt.value;
})