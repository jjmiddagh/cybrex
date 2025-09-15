/*
 * Cybrex JavaScript
 *
 * Provides interactive functionality across the website, including
 * navigation toggling for mobile devices and dynamic footer year updates.
 */

document.addEventListener('DOMContentLoaded', function () {
  // Mobile navigation toggle
  const navToggle = document.getElementById('navToggle');
  const navbar = document.getElementById('navbar');
  if (navToggle && navbar) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navbar.classList.toggle('open');
    });
  }

  // Update year in footer
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});