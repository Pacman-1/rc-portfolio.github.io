const navButton = document.querySelector(".links");
const newlink = document.querySelector(".new-links");
const port = document.querySelector(".port");
const icon = document.querySelector(".fa-align-justify")

navButton.addEventListener("click",()=>{
    icon.remove();
    port.classList.add("visible")
    navButton.classList.add("expand")
})



