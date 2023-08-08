document.addEventListener('DOMContentLoaded', () => {
  const errorPopup = document.getElementById('errorPopup');
  const closePopupBtn = document.getElementById('closePopupBtn');

  errorPopup.style.display = 'block'; // Show the popup when the page loads

  closePopupBtn.addEventListener('click', () => {
    errorPopup.style.display = 'none';
  });
});
