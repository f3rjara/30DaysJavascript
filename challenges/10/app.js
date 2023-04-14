import './styles.scss';

const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

function handleCheck(e) {
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}