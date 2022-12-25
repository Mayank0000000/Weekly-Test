let url = "https://dog.ceo/api/breeds/image/random";
        let btn = document.getElementById("load");
        let box = document.getElementById("box");
        btn.addEventListener("click",() => {
            fetch(url).then(data => data.json())
            .then((data) => {
                if(data.status == "success"){
                    box.insertAdjacentHTML("beforeend",
                    `<img src="${data.message}" >`);
                }else{
                    alert("Load again");
                }
            }).catch(err => console.log(err));
        })