var tablinks = document.querySelectorAll(".tab-links");
var tabcontents = document.querySelectorAll(".tab-contents");

function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0"; //It wii visible
}
function closemenu(){
    sidemenu.style.right="-200px"; //It wii hidden
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbzkCU5xl0f9-ZdXa3rcycJ7S4adUrZfsH1ff2Q627w0h9uyEjJ646L7I2Uxcvp1IpM/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message sent successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })



  function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name.trim() == '' || email.trim() == '' || message.trim() == '') {
        alert('Please fill in all fields.');
        return false; 
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false; 
    }

    if (message.length > 500) {
        alert('Message is too long. Please keep it under 500 characters.');
        return false; 
    }
    return true; 
}



