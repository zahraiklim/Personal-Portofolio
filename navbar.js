const menuicon= document.getElementById("menu");
const menulist= document.getElementById("menulist");
menuicon.addEventListener("click", () => {
    menulist.classList.toggle("hidden");
})