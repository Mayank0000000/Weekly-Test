const btn = document.getElementsByTagName('button')[0];
const container = document.getElementsByClassName('container')[0];

btn.addEventListener('click', () => {
    const para = document.createElement('h3');
    para.innerHTML = 'Image Element Added';

    const img = document.createElement('bgeek');
    img.setAttribute('src', 'bgeek.png');
    container.append(para);
    container.append(img);
})