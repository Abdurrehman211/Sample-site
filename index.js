// Select the button and the content to toggle
const expandButton = document.getElementById("expandButton");
const extraContent = document.getElementById("extraContent");
const plusSign = document.querySelector(".plus-sign");

// Add a click event listener to the button
expandButton.addEventListener("click", () => {
  // Toggle the visibility of the extra content
  extraContent.classList.toggle("hidden");

  // Rotate the + sign
  plusSign.classList.toggle("rotate");
});document.querySelectorAll('.custom-select').forEach((customSelect) => {
  const dropdown = customSelect.querySelector('.dropdown');
  const dropdownContent = customSelect.querySelector('.dropdown-content');
  const options = customSelect.querySelectorAll('.option');
  const select = customSelect.querySelector('select');

  // Toggle dropdown visibility
  dropdown.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent closing immediately after opening
    document.querySelectorAll('.custom-select .dropdown-content').forEach((content) => {
      if (content !== dropdownContent) {
        content.style.display = 'none'; // Close other dropdowns
      }
    });
    dropdownContent.style.display =
      dropdownContent.style.display === 'block' ? 'none' : 'block';
  });

  // Select option from dropdown
  options.forEach((option) => {
    option.addEventListener('click', () => {
      const value = option.getAttribute('data-value');
      if (select) select.value = value; // Update hidden select if present
      dropdown.textContent = option.querySelector('.option-title').textContent;
      dropdownContent.style.display = 'none'; // Close the dropdown
    });
  });


  // Close dropdown when clicking outside
  document.addEventListener('click', () => {
    dropdownContent.style.display = 'none';
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNavLinks = document.querySelector('.mobile-nav-links');

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    mobileNavLinks.classList.toggle('active');
  });
});
const a = document.getElementById('showthedropdown');
const b=document.getElementById('hidden');

a.addEventListener('click', () => {
  b.classList.toggle('hidden-display');
  b.removeAttribute('hidden');
});
