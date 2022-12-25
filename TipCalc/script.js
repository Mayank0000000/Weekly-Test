let calculate = document.querySelector('#calculate');

calculate.addEventListener('click', () => {
    let totalBill = document.querySelector('#totalBill').value;
    let tipPercent = document.querySelector('#tipPercent').value;
   

    
    if(totalBill === '' || tipPercent == 0 ){
        alert('Please enter values');
        return;
    }

    let total = (totalBill * tipPercent);
    total = total.toFixed(2);
    
    document.getElementById('tip').innerHTML = total;



})











