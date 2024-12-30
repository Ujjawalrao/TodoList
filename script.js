let form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
});

const input = document.querySelector('input')
const add = document.getElementById('add')
const ul = document.querySelector('ul')

function addtodo(params) {
     
    if (input.value == '' || input.value == ' ') {
      alert('enter your task..')
    } else {
  
      let li = document.createElement('li');
      li.innerHTML = input.value.trim();
      ul.appendChild(li);
      // list remover btn ----------
      dlt =  document.createElement('span')
      dlt.innerHTML = '<i class="fa-solid fa-trash"></i>';
      li.appendChild(dlt)
      dlt.addEventListener('click', () =>{
          li.remove()
      });
      input.value = '';
    }
  
  }

add.addEventListener('click', () => {
    addtodo()
})



