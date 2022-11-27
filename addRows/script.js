function addRow() {
    var add = document.getElementById('sampleTable').appendChild(document.createElement('tr'));
    add.appendChild(document.createElement('td')).appendChild(document.createTextNode('New Row'));
    add.appendChild(document.createElement('td')).appendChild(document.createTextNode('New Row'));



}