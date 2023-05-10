let titles = document.getElementById('titles') // get titles from HTML
let table = document.getElementById('mainTable') // get table from HTML

let mainURL = 'https://5late-improved-space-happiness-4ww59xqx9v9hjj7g-31475.preview.app.github.dev'

function getInfo(){
    let courses = []
    student_num = 554974039

    fetch(mainURL+"/get/user/"+student_num+"/all_data").then(response => response.json()).then(data => {
        console.log(data)
        //let courses = data.data.course_data
        courses.push(data.data.course_data)

        console.log(courses[0].user_course.course_info.course_code)
    })
    return courses
}
//getInfo()

let number_of_courses = 8 // get the number of courses, will be from api soon

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

async function buildCourses(){
    for (var i=0; i<number_of_courses; i++){ // run a loop for each course the user has
        var row = document.createElement('tr') // create a row for each course
        row.align = 'center' // align the row to the center
        for (var j=0; j<=18; j++){ // for each course, run a loop 18 times for 18 units
            var box = document.createElement('td') // create a box for each unit
            if (j == 0){
                let courses = getInfo()
                console.log(courses)
                box.innerText = courses[0].user_course.course_info.course_code // if the box is the first in each row, make it the course code + section
            }
            row.appendChild(box) // append the box to the row
        }
        table.appendChild(row) // append the row to the table
    }
}

buildCourses()