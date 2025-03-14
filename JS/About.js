let bar = document.querySelector('.menuBar');
bar.addEventListener('click', () => {
    let link = document.querySelector('.UInav_links');
    link.style.display = "block";
    bar.classList.remove("dflex");
    bar.classList.add("dnone");

})

let services_list = document.querySelector('#services_list');
let active_list = document.querySelector(".Ui_services")
services_list.addEventListener('click', () => {
    if (window.getComputedStyle(active_list).display === "none") {
        active_list.style.display = "block";
    } else {
        active_list.style.display = "none";
    }
})
let bck_btn = document.querySelectorAll('.bck-bnt');
bck_btn.forEach(element => {
    element.addEventListener('click', () => {
        let link = document.querySelector('.UInav_links');
        link.style.display = "none";
        active_list.style.display = "none";
        bar.classList.remove("dnone");
        bar.classList.add("dflex");
    })
});
