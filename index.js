const arrows = document.querySelector(".arrows")
const john = document.querySelector(".john")
const tanya = document.querySelector(".tanya")

john.classList.add("display")

arrows.addEventListener("click", () => {
    tanya.classList.toggle("display")
    john.classList.toggle("display")
})