const buttons = document.querySelectorAll('.card-buttons button');
const sections = document.querySelectorAll('.card-section');
const card = document.querySelector('.card');
const workTogetherButton = document.querySelector('.contact-me');

const handleButtonClick = (e) => {
  const targetSection = e.target.getAttribute('data-section');
  const section = document.querySelector(targetSection);
  targetSection !== '#about'
    ? card.classList.add('is-active')
    : card.classList.remove('is-active');
  card.setAttribute('data-state', targetSection);
  sections.forEach((s) => s.classList.remove('is-active'));
  buttons.forEach((b) => b.classList.remove('is-active'));
  e.target.classList.add('is-active');
  section.classList.add('is-active');
};

buttons.forEach((btn) => {
  btn.addEventListener('click', handleButtonClick);
});

workTogetherButton.addEventListener('click', () => {
  const emailAddress = 'nivedidhakumar@yahoo.com';
  const subject = 'Work Together';
  const body = "Hello, let's work together on a project.";

  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
});
