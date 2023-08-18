document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit',(e) => {
  e.preventDefault()
  buildToDo(e.target['new-task-description'].value)
  })
})

function buildToDo(todo){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', removeToDo)
  p.textContent = ` ${todo} `
  btn.textContent = 'delete me'
  p.appendChild(btn)
  document.querySelector('#list').appendChild(p)
}

function removeToDo(e){
  e.target.parentNode.remove()
}
