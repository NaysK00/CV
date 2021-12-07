let typedElement = new Typed('.typed', {
    strings: ['front-end developer', 'logistician'],
    loop: true, typeSpeed: 50, backSpeed: 50


})
let arrowTop = document.querySelector('.backToTop');
window.addEventListener('scroll', () => {
    let windowoffset = window.pageYOffset
    if (windowoffset > 0) {
        arrowTop.classList.add('show')
    } else {
        arrowTop.classList.remove('show')
    }
})


// Button Hamburger
let hamburgerButton = document.querySelector('.hamburger');
let navigation = document.querySelector('.navigation');
hamburgerButton.addEventListener('click', () => {
    hamburgerButton.classList.toggle('active')
    navigation.classList.toggle('menuOpen')
})

let navigationLinks = document.querySelectorAll('.menu li a');
navigationLinks.forEach((item) => {
    item.addEventListener('click', () => {
        hamburgerButton.classList.remove('active')
        navigation.classList.remove('menuOpen')
    })
})


let switcher = document.querySelector('.switcher');
let body = document.body
switcher.addEventListener('click', (event) => {
    if (body.classList.contains('dark')) {
        body.classList.remove('dark')
        body.classList.add('light')
        localStorage.setItem('theme', 'light')
    }
    else {
        body.classList.add('dark')
        body.classList.remove('light')
        localStorage.setItem('theme', 'dark')

    }
    event.preventDefault()
})
let storedTheme = localStorage.getItem('theme');
if (storedTheme) {
    body.classList.remove('dark', 'light');
    body.classList.add(storedTheme)

}

let parallax = new Parallax(document.querySelector('.parallax'), {
    relativeInput: true
})
AOS.init();