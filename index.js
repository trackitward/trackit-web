let titles = document.getElementById('titles')
let table = document.getElementById('mainTable')

number = -1
for (var i=0;i<=18;i++){
    number = parseInt(number) + 1
    var header = document.createElement('th')
    if (i == 0){
        header.innerText = 'Course'
    } else {
        console.log(number.toString().length)
        if (number.toString().length == 1){
            console.log(number)
            number = ("0" + number).slice(-2)
        }
        header.innerText = number
    }
    titles.appendChild(header)
}

for (var i=0; i<8; i++){
    var row = document.createElement('tr')
    row.align = 'center'
    for (var j=0; j<=18; j++){
        var box = document.createElement('td')
        if (j == 0){
            box.innerText = 'MCV4U1-02'
        }
        row.appendChild(box)
    }
    table.appendChild(row)
}