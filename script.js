const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const resultOutput = document.querySelector('.result-output');
const reload = document.querySelector('.reload');

const correctAnswer = ['B', 'B', 'D', 'C', 'B', 'C', 'A', 'A', 'B', 'B'];

form.addEventListener('submit', (event) => {
   event.preventDefault();

   let score = 0;
   const userAnswers = [
      form.q1.value,
      form.q2.value,
      form.q3.value,
      form.q4.value,
      form.q5.value,
      form.q6.value,
      form.q7.value,
      form.q8.value,
      form.q9.value,
      form.q10.value
   ];

   userAnswers.forEach((answer, index) => {
      if (answer === correctAnswer[index]) {
         score += 1;
         form.children[index].classList.add('correct');
      } else form.children[index].classList.add('wrong');
   });

   scrollTo(0, 0);
   result.classList.remove('hide');
   resultOutput.innerHTML = `You scored ${score}/5`;
});

reload.addEventListener('click', () => location.reload());
