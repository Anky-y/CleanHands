const collapsibles = document.querySelectorAll('.collapsible');
collapsibles.forEach((item) =>
  item.addEventListener('click', function () {
    this.classList.toggle('collapsible--expanded');
  })
);

function scrollToSection() {
  console.log(`hello`);
  const section = document.getElementById('meeting-left__block'); // Replace "section-id" with the ID of the section you want to scroll to
  section.scrollIntoView({ behavior: 'smooth' });
}
