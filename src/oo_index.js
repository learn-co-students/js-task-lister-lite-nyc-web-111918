document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();

  const submitButton = document.querySelector("#click-button")
  const formInput = document.querySelector("#create-task-form")
  const listAppending = document.querySelector("#tasks")
  let inputValue = "";

  formInput.addEventListener("input", function (e) {
    inputValue = e.target.value

  })


  submitButton.addEventListener("click",function(e){
    e.preventDefault()
    listAppending.innerHTML += `<li> ${inputValue} </li>`

  })

});
