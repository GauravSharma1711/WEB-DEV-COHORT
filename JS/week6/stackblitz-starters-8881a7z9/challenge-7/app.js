const buttons = document.querySelectorAll('.accordion-button');
const arrows = document.querySelectorAll('.arrow');
const contents = document.querySelectorAll('.accordion-content');

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            document.querySelectorAll('.accordion-content').forEach((otherContent) => {
                otherContent.style.maxHeight = null;
            });

            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});


arrows.forEach((arrow) => {
    arrow.addEventListener('click', (e) => {
        e.stopPropagation();
        
        const parent = arrow.parentElement;
        const accordion = parent.parentElement;
        const content = parent.nextElementSibling;
       
        document.querySelectorAll('.accordion-content').forEach((otherContent) => {
            if (otherContent !== content) {
                otherContent.style.maxHeight = null;
            }
        });


        document.querySelectorAll('.accordion-item').forEach((otherItem) => {
            if (otherItem !== accordion) {
                otherItem.classList.remove('active');
            }
        }); 

        document.querySelectorAll('.arrow').forEach((otherArrow) => {
            if (otherArrow !== arrow) {
                otherArrow.style.transform = "rotate(0deg)"; // Reset all other arrows
            }
        });

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            accordion.classList.remove('active');
            arrow.style.transform = "rotate(0deg)"; // Reset arrow if closing
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            accordion.classList.add('active');
            arrow.style.transform = "rotate(180deg)"; // Rotate arrow if opening
        }
       
       
    });
});



