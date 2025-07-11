const burger = document.getElementById('burger');
const nav = document.getElementById('nav-links');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('open');
});

document.getElementById('colorQuiz').addEventListener('submit', function (e) {
  e.preventDefault();

  const vein = document.querySelector('input[name="vein"]:checked')?.value;
  const hair = document.querySelector('input[name="hair"]:checked')?.value;
  const eye = document.querySelector('input[name="eye"]:checked')?.value;

  const code = vein + hair + eye;

  const winter = ['ABA','ABB','ABC','BAA','BAB','BAC'];
  const spring = ['BBA','BBB','BBC','BCA','BCB','BCC'];
  const autumn = ['CBA','CBB','CBC','CCA','CCB','CCC'];
  const summer = ['AAA','AAB','AAC','ACA','ACB','ACC','CAA','CAB','CAC'];

  let result = '';

  if (winter.includes(code)) result = 'You are a Winter!';
  else if (spring.includes(code)) result = 'You are a Spring!';
  else if (autumn.includes(code)) result = 'You are an Autumn!';
  else if (summer.includes(code)) result = 'You are a Summer!';
  else result = 'Unable to determine season. Please try again.';

  document.getElementById('quiz-result').textContent = result;
});

document.getElementById('resetQuiz').addEventListener('click', function () {
  document.getElementById('colorQuiz').reset();
  document.getElementById('quiz-result').textContent = '';
});
