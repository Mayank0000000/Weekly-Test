const input = document.getElementById('itemInput');
        const addBtn = document.getElementById('addBtn');
        const listContainer = document.getElementsByClassName('list-container')[0];
        
        

        addBtn.addEventListener('click', () => {
          const list = document.createElement('li');
          list.setAttribute('class', 'list-li');
          const label = document.createElement('label');
          const deleteBtn = document.createElement('button');

          label.innerText = input.value;
          list.appendChild(label);

          deleteBtn.innerText = 'Delete';
          list.appendChild(deleteBtn);

          if(input.value){
            listContainer.appendChild(list);
          }
          
          input.value = "";

          deleteBtn.addEventListener('click', (event) => {
            event.target.parentElement.remove();
          })
        });