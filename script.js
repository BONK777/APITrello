const desks = document.querySelector('#desks')
const adder = document.querySelector('#adder')
const task = document.querySelector('#task')
const accept = document.querySelector("#accept")
const cancel = document.querySelector("#cancel")
const input = document.querySelector("#inp")
const desk = document.querySelector("#added")


const addTask = () => {
    adder.addEventListener('click', (e) => {
        desk.style.display = "flex";
        task.style.display = "flex";
        console.log('hi');
    })
    cancel.addEventListener('click', (e) => {
        task.style.display = "none";
        adder.style.display = "block";
    })
    accept.addEventListener('click', (e) => {
        cancel.style.display = "none";
        accept.style.display = "none";
    })
    
}
addTask()
