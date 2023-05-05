const nums = document.querySelectorAll('.num')
const form = document.querySelector('form')
const submit = document.getElementById('submitForm')

const api_link = "http://localhost:31475"

let code = []

nums.forEach((num, index) => {
    num.dataset.id = index
    
    num.addEventListener('keydown', function(event) {
        if (event.keyCode === 13) runPostJson()
        if (num.value.length == 1 && index+1 != nums.length) {
            nums[parseInt(num.dataset.id) + 1].removeAttribute("readonly")
            nums[parseInt(num.dataset.id) + 1].focus()
        }
        if (event.keyCode === 8 && index != 0) {
            if (nums[parseInt(num.dataset.id)].value.length === 0){
                nums[parseInt(num.dataset.id) -1].focus()
            }
            code.length = 0
            if (nums[parseInt(num.dataset.id)].value.length > 0){
                nums[parseInt(num.dataset.id)].focus()
            } 
        }
    })

    num.addEventListener('keyup', function(event) {
        if (num.value.length == 1 && event.keyCode != 8 && index+1 != nums.length) {
            nums[parseInt(num.dataset.id) + 1].focus()
        }
    })
})


submit.addEventListener("submit", (e) => {
    e.preventDefault()
    runPostJson()
})

function runPostJson(){
    nums.forEach((num, index) => {
        code.push(num.value)
    })
    
    PostJSON(code.join('').toString())
}

async function PostJSON(code){
    const response = await fetch(`${api_link}/post/unit/submit/validate`, {
        method: "POST",
        body: JSON.stringify(code.toString())
    })

    const result = await response.json()

    console.log(result)
}

function openModal(){
 // PUT MODAL CODE HERE ???

 text = document.getElementById('user_text')

 student_name = 'christian'
 course_code = 'MCV4U1'
 section = 1
 unit_number = 2

 inline_text = `<b>Name:</b> ${student_name}<br> <b>Course Code:</b> ${course_code}<br> <b>Section:</b> ${section}<br> <b>Unit Number:</b> ${unit_number}`

 text.innerHTML = inline_text

 
 // Make banner (green/red)
 // Buttons on modal should exit the modal 
 // Buttons should clear code
 // Enter button on keyboard should open modal
}