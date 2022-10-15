let home = 0
let guest = 0
let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")

function home1() {
    home += 1 
    console.log(home)
    homeEl.textContent = home
}

function home2() {
    home += 2 
    console.log(home)
    homeEl.textContent = home
}

function home3() {
    home += 3
    console.log(home)
    homeEl.textContent = home
}

function add1() {
    guest += 1 
    console.log(guest)
    guestEl.textContent = guest
}

function add2() {
    guest += 2 
    console.log(guest)
    guestEl.textContent = guest
}

function add3() {
    guest += 3 
    console.log(guest)
    guestEl.textContent = guest
}