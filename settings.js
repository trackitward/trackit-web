function switchMode(mode){
    let body_id = document.getElementById('body')

    if (mode == 'light'){
        document.body.style.background = 'white'
    } else {
        document.body.style.background = '#141d26'
    }
    
}