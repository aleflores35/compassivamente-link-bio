document.addEventListener('DOMContentLoaded', () => {
    const accordion = document.getElementById('acp-accordion');
    const header = accordion.querySelector('.accordion-header');
    const content = accordion.querySelector('.accordion-content');
    const caret = accordion.querySelector('.caret');

    header.addEventListener('click', () => {
        accordion.classList.toggle('active');
        
        if (accordion.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + "px";
            caret.style.transform = "rotate(180deg)";
        } else {
            content.style.maxHeight = "0px";
            caret.style.transform = "rotate(0deg)";
        }
    });
});
