const toggleBtn = document.querySelector("#toggle-btn");
const sideBar = document.querySelector(".sidebar");
const searchIcon = document.querySelector("#search-icon");
const toggleIcon = document.querySelector("#toggle-icon");

//toggles between the closed and open layout of sidebar.
toggleBtn.addEventListener("click", function() {
    if(!toggleIcon.classList.contains("bxs-chevron-right")) {
        toggleIcon.classList.remove("bxs-chevron-left");
        toggleIcon.classList.add("bxs-chevron-right");
    }else {
        toggleIcon.classList.remove("bxs-chevron-right");
        toggleIcon.classList.add("bxs-chevron-left");
    }
    sideBar.classList.toggle("closed");
})

//open the sidebar when user wants to search.
searchIcon.addEventListener("click", function() {
    if(sideBar.classList.contains("closed")) {
        sideBar.classList.toggle("closed");
        toggleIcon.classList.remove("bxs-chevron-right");
        toggleIcon.classList.add("bxs-chevron-left");
    }
})
