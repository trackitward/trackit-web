let api_link = 'http://localhost:31475'
const popup = document.querySelector(".popup");

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
        location.href = '/index.html'
    } else {
        popup.style.display = "flex"
        popup.style.left = "2vw";
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