
let active = 0;
function goRight() {
    active++;
    let slider = document.querySelector(".slider");
    slider.style.transform = `translateX(${-100 * active}vw)`;
}
function goLeft() {
    active--;
    let slider = document.querySelector(".slider");
    slider.style.transform = `translateX(${-100 * active}vw)`;
}
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

const totop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        totop.classList.add("active");
    } else {
        totop.classList.remove("active");
    }
})

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('touchstart', () => {
        card.classList.add('hover-effect');
    });
    card.addEventListener('touchend', () => {
        setTimeout(() => card.classList.remove('hover-effect'), 500);
    });
});
