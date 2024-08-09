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

    document.getElementById('downloadPrepList').addEventListener('click', downloadPrepList);

    function downloadPrepList() {
      const link = document.createElement('a');
      link.href = '../static/files/Kitten Prep List.pdf'; // Path to your PDF file
      link.download = '../static/files/Kitten Prep List.pdf'; // Name of the file to be downloaded
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    window.addEventListener('resize', updateSection);
});
