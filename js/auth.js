const submit = document.getElementById('submit')

function testEmail(){
    text = document.getElementById('email').value

    let pattern = /.{0,10}@tcdsb.ca/gm

    return pattern.test(text)
}

function login(){
    if (testEmail()){
        console.log('permitted')
    } else {
        console.log('FAIL')
    }
}


submit.addEventListener("submit", (e) => {
    e.preventDefault()
})