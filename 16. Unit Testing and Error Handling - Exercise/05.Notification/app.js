function notify(message) {
  let notificElement = document.getElementById("notification");
  notificElement.textContent = message;
  notificElement.style.display = "block"

  notificElement.addEventListener('click', function (e) {
    notificElement.style.display = "none"
  })
}