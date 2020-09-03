alert("The Content  Contain Spoilers Filters")
document.querySelectorAll(".fa-heart").forEach(function (element) {
    element.addEventListener('click', function () {
        if (element.classList.contains("far")) {
            element.classList.remove("far")
            element.classList.add("fas")
        }
        else {
            element.classList.remove("fas")
            element.classList.add("far")
        }
    })
})
let trash = document.querySelectorAll(".fa-trash-alt").forEach(function (trash) {
    trash.addEventListener("click", function () {
        if (trash.classList.contains("fas")) {
            trash.parentElement.parentElement.remove("fas")
        }
    })
})