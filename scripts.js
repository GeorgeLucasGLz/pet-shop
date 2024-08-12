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

function scrollToElement(elementSelector, instance = 0) {

    const elements = document.querySelectorAll(elementSelector)

    if (elements.length > instance) {

        elements[instance].scrollIntoView({ behavior: "smooth" })
    } else {
        return
    }


}

const navHome = document.getElementById('nav-home')
const navServices = document.getElementById('nav-services')
const navProducts = document.getElementById('nav-products')

const toggleHome = document.getElementById('toggle-home')
const toggleServices = document.getElementById('toggle-services')
const toggleProducts = document.getElementById('toggle-products')


const btnMore = document.getElementById('btn-more')

navHome.addEventListener('click', event => {
    event.preventDefault()
    scrollToElement('header')
})

toggleHome.addEventListener('click', event => {

    event.preventDefault()
    scrollToElement('header')
})

navServices.addEventListener('click', event => {

    event.preventDefault()
    scrollToElement('.services-section')
})

toggleServices.addEventListener('click', event => {

    event.preventDefault()
    scrollToElement('.services-section')
})

btnMore.addEventListener('click', event => {

    event.preventDefault()
    scrollToElement('.services-section')
})


navProducts.addEventListener('click', event => {

    event.preventDefault()
    scrollToElement('.section-products')
})

toggleProducts.addEventListener('click', event => {

    event.preventDefault()
    scrollToElement('.section-products')
})