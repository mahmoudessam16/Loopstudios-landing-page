let hamburgerIcon = document.querySelector(".hamburger");
let closeIcon = document.querySelector(".close");
let mobileLinks = document.querySelector(".mobile-links");


console.log(hamburgerIcon);
console.log(closeIcon);
console.log(mobileLinks);

hamburgerIcon.addEventListener('click', function () {
    mobileLinks.style.left = "0%";
    closeIcon.addEventListener('click', function () {
        mobileLinks.style.left = "100%";
    });
});