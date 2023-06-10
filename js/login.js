let api_link = 'http://localhost:31475'
const popup = document.querySelector(".popup");
const popup_icon = document.getElementById("popup-icon")
const popup_text = document.getElementById("popup-text")
const state = localStorage.getItem('logged-in')

window.onload = function() {
    if (state == 'True'){
        popup.style.display = "flex"
        popup.style.left = "3vw"
        popup.style.backgroundColor = "#009933"
        popup_icon.src = "https://upload.wikimedia.org/wikipedia/commons/3/3b/Eo_circle_green_checkmark.svg"
        popup_text.innerHTML = 'Logging in...'
        setTimeout(() => {
            location.href = '/index.html'
        }, 1500)
    }
}

async function attepmtLogin(){
    let student_num_elem = document.getElementById('student-num')
    let password_elem = document.getElementById('password')

    let data = {
        'student_number': student_num_elem.value,
        'password': password_elem.value
    }

    const response = await fetch(`${api_link}/post/user/profile/auth`, {
        method: "POST",
        body: JSON.stringify(data)
    })

    if (response.status == 202) {
        localStorage.setItem('logged-in', 'True')
        localStorage.setItem('student-number', student_num_elem.value)
        location.href = '/index.html'
    } else {
        popup.style.display = "flex"
        popup.style.left = "0.5vw";
        setTimeout(() => {
          popup.style.left = "-100vw";
        }, 3000);
    }
}

let submit = document.getElementById('submit')

submit.addEventListener('click', (e) => {
    attepmtLogin()
    e.preventDefault()
})