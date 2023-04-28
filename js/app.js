
const nums = document.querySelectorAll('.num')
const form = document.querySelector('form')

nums.forEach((num, index) => {
    num.dataset.id = index
    
    num.addEventListener('keyup', function(event) {
        if (event.keyCode === 13) form.submit()
        if (num.value.length == 1) {
            nums[parseInt(num.dataset.id) + 1].removeAttribute("readonly")
            nums[parseInt(num.dataset.id) + 1].focus()
        }
        if (event.keyCode === 8) {
            nums[parseInt(num.dataset.id) - 1].focus()
        }
    })
})
