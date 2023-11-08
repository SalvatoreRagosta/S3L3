const handleSubmit = function (e) {
    e.preventDefault()
    aggiungiTask()
    taskCompleta()
    taskEliminata()
  }
  
  const aggiungiTask = function () {
    let tasks = document.querySelector('#daFare')
    let input = document.querySelector('#nuovaTask input')
    let newTask = `
        <div class="task">
            <span id="taskname">
                ${input.value}
            </span>
            <button class="delete">
                <i class="far fa-trash-alt"></i>
            </button>
        </div>
    `
    tasks.innerHTML += newTask
    input.value = ''
  }
  
  const taskCompleta = function () {
    let allTask = document.querySelectorAll('.task')
    for (let i = 0; i < allTask.length; i++) {
      allTask[i].addEventListener('click', function () {
        this.classList.toggle('completa')
      })
    }
  }
  
  const taskEliminata = function () {
    let allDeleteButtons = document.querySelectorAll('.delete')
    for (let i = 0; i < allDeleteButtons.length; i++) {
      allDeleteButtons[i].addEventListener('click', function () {
        this.parentNode.remove()
      })
    }
  }
  
  window.onload = function () {
    let form = document.querySelector('form')
    form.addEventListener('submit', handleSubmit)
  }
  