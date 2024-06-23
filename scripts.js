const toggleOn = document.querySelector('.toggle-on')
const btnOff = document.querySelector('.btn-toggle-off')
const btnOn = document.querySelector('.btn-close')


function showToggle() {

    btnOff.style.display = 'none'
    toggleOn.style.display = 'flex'

}

function turnOffToggle() {

    btnOff.style.display = 'flex'
    toggleOn.style.display = 'none'

}