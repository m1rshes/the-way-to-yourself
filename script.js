const burger = document.getElementById('burger');
const menu = document.querySelector('.header-menu');
const menuLinks = menu.querySelectorAll('a');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    menu.classList.remove('active');
  });
});

const boxes = Array.from(document.querySelectorAll(".regular-questions-box"));
boxes.forEach((box) => {
    const label = box.querySelector(".regular-questions-box-label");
    label.addEventListener("click", boxHandler);
});

function boxHandler(e) {
    e.preventDefault();
    let currentBox = e.currentTarget.closest(".regular-questions-box");
    let currentContent = currentBox.querySelector(".regular-questions-box-content");
    
    currentBox.classList.toggle("active");
    
    if (currentBox.classList.contains("active")) {
        currentContent.style.height = currentContent.scrollHeight + "px";
    } else {
        currentContent.style.height = 0;
    }
}