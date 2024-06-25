document.addEventListener('DOMContentLoaded', function () {
    const wrapper = document.querySelector('.sections-wrapper');
    const sections = document.querySelectorAll('.section');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentSection = 0;

    function updateSection() {
        const section = sections[0];
        const style = window.getComputedStyle(section);
        const margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
        const sectionWidth = section.offsetWidth + margin;
        wrapper.style.transform = `translateX(-${currentSection * sectionWidth}px)`;
    }

    prevButton.addEventListener('click', function () {
        if (currentSection > 0) {
            currentSection--;
            updateSection();
        }
    });

    nextButton.addEventListener('click', function () {
        if (currentSection < sections.length - 1) {
            currentSection++;
            updateSection();
        }
    });

    window.addEventListener('resize', updateSection);
});
