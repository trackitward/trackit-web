async function attepmtLogin(){
    let student_num_elem = document.getElementById('student-elem')
    let password_elem = document.getElementById('password')

    let data = {
        'student_number': student_num_elem.innerText,
        'password': password_elem.innerText
    }

    const response = await fetch(`${api_link}/post/user/profile/auth`, {
        method: "POST",
        body: JSON.stringify(data.toString())
    })

    if (response.status == 202) {
        location.href = '/index.html'
    }
}