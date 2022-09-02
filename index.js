
let reminders = ["افرد ضهرك", "ركز"]
const reminderDiv = document.getElementById("reminder")
const addReminderBtn = document.getElementById("addReminderBtn")
const resetReminderBtn = document.getElementById("resetReminderBtn")
const startReminderBtn = document.getElementById("startReminderBtn")
const stopReminderBtn = document.getElementById("stopReminderBtn")
const remindersList = document.getElementById("remindersList")
let timeLoop;


const startReminder = () => {
  timeLoop = setInterval(() => {
    let randomIndex = Math.floor(Math.random() * reminders.length)
    if (reminders[randomIndex] !== undefined) {
      reminderDiv.innerText = reminders[randomIndex]
    }


  }, 1000)
}

const showRemindersList = (reminders) => {
  remindersList.innerHTML = ''
  reminders.forEach(reminder => {
    let li = document.createElement('li')
    li.innerText = reminder
    remindersList.appendChild(li)
  })
}



resetReminderBtn.addEventListener('click', () => {
  let confirmation = confirm("are you sure you want to delete all the reminders?")
  if(confirmation){
    reminders = []
    if(timeLoop !== undefined){
      clearInterval(timeLoop)
    }
    showRemindersList(reminders)
    reminderDiv.innerText = "add a new reminder"
  }


})

stopReminderBtn.addEventListener('click', () => {
  if (timeLoop !== undefined) {
    clearInterval(timeLoop)
  }
  reminderDiv.innerText = "Reminder : stop"

})

startReminderBtn.addEventListener('click', () => {
  if (timeLoop !== undefined) {
    clearInterval(timeLoop)
  }
  startReminder()
  showRemindersList(reminders)
})


addReminderBtn.addEventListener('click', () => {
  let reminder = prompt("new reminder")
  reminders.push(reminder)
  startReminder()
})











// alert("fix you posture")



