const X_CLASS
const CIRCLE_CLASS = 'circle'
const cellElements = document.querySelectorAll('[data-cell]')
let circleTurn

cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true})
    })

    function handleClick(e) {
        const cell = e.target
        const currentClass =  ? CIRCLE_CLASS : X_CLASS
        placeMark(cell, currentClass)
        // Check for win
        // Check for draw
        // Swittch turns
    }

    function placeMark(cell, currentClass) {
        cell.classList.add(currentClass)
    }