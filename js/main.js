let titles = document.getElementById('titles') // get titles from HTML
let table = document.getElementById('mainTable') // get table from HTML

let mainURL = 'http://localhost:31475'
let current_course = 0;
let number_of_courses = 5;

var user_data = {}
let fetched = false

window.onload = getAPI()

function getAPI() {
    student_num = "777777777"
    if (fetched){return}
    fetch(mainURL+"/get/user/"+student_num+"/all_data").then(response => response.json()).then(data => {
        console.log("this should be first", data)
        user_data = data
        if (data.data.course_data.length > 0){
            createPage()
        }
    })
    fetched = true
}

function fillCourseBox(box){
    getAPI()
    student_num = "777777777"
    if (current_course <= user_data.data.course_data.length) {
        //console.log(user_data.data.course_data[current_course])
        box.innerHTML = user_data.data.course_data[current_course].user_course.course_info.course_code
        current_course += 1
    }
    console.log(fetched)
}

function fillUnitBox(index, box, current_course){
    box.href = '#modal-opened'
    index -= 1
    current_course -= 1
    getAPI()
    student_num = "777777777"
    //console.log(current_course, index, user_data.data.course_data[current_course].user_course.user_info.units[index].unit_completed)
    if (user_data.data.course_data[current_course].user_course.user_info.units[index].unit_completed) {
        box.innerHTML = "✔️"
    } else {
        box.innerHTML = "❌"
    }
}

function openModal() {
     window.location.href += '#modal-opened'
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

//let number_of_courses = 8 // get the number of courses, will be from api soon

function createPage(){
    number = -1 // set a number at -1
    for (var i=0;i<=18;i++){ // run loop 18 times for each unit header
        number = parseInt(number) + 1 // convert back to number and add one for each unit header
        var header = document.createElement('th') // create a header
        if (i == 0){ // if it is the first iteration of the loop, make the header say 'Course'
            header.innerText = 'Course'
        } else { // else, the header is the unit number
            if (number.toString().length == 1){ // convert single digit numbers to double digit numbers (1-->01)
                number = ("0" + number).slice(-2)
            }
            header.innerText = number // make the header the number
        }
        titles.appendChild(header) // append the header to the title
    }

    for (var i=0; i<=number_of_courses; i++){ // run a loop for each course the user has
        var row = document.createElement('tr') // create a row for each course
        row.align = 'center' // align the row to the center
        for (var j=0; j<=18; j++){ // for each course, run a loop 18 times for 18 units
            var box = document.createElement('td') // create a box for each unit
            var boxbutton = document.createElement('a')
            boxbutton.className = 'link-1'
            box.appendChild(boxbutton)
            if (j == 0){
                fillCourseBox(boxbutton)
            } else {
                fillUnitBox(j, boxbutton, current_course)
            }
            row.appendChild(box) // append the box to the row
        }
        table.appendChild(row) // append the row to the table
    }
}