window.addEventListener('load', () => {
  body.className = localStorage.getItem('theme') == null ? 'light' : localStorage.getItem('theme');
})
const button = document.getElementById('btn');
const body = document.body;
button.addEventListener('click', () => {
  if (body.className === 'light'){
    body.className = 'dark';
    localStorage.setItem('theme', 'dark');
  } else{
    body.className = 'light';
    localStorage.setItem('theme', 'light');
  }
})
