// Add any interactive functionality here if needed

document.addEventListener('DOMContentLoaded', () => {
  console.log('Laundry SOP App Loaded!');
  
  // Example: Highlight sections on click
  const sections = document.querySelectorAll('section');
  
  sections.forEach(section => {
    section.addEventListener('click', () => {
      section.style.backgroundColor = '#e8f7e8';
      setTimeout(() => {
        section.style.backgroundColor = '#fff';
      }, 1000);
    });
  });
});
