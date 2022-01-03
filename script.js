  let secretNumb = Math.trunc(Math.random() * 10) + 1;

  let score = 10;
  let bestScore = 0;

  const btn = document.querySelector('.btn').addEventListener('click', function () {
    const inpNumber = +document.querySelector('.inp_numb').value;

    if (!inpNumber) {
      document.querySelector('.out_text').textContent = 'Введи число!';
      //Player won
    } else if (inpNumber === secretNumb) {
      document.getElementById('img_temp_one').hidden = false;
      document.querySelector('.out_text').textContent = 'Бингоооо!';
      document.querySelector('.secret_numb').textContent = "Секретное число : " + secretNumb;
      document.querySelector('body').style.backgroundColor = "Green";
      document.querySelector('.score_temp').textContent = 'Ваши попытки : ' + score

      if (score > bestScore) {
        bestScore = score;
        document.querySelector('.best_result').textContent = 'Лучший результать:' + bestScore;
      }
 //Number is hight
    } else if (inpNumber > secretNumb) {
      if (score > 1) {
        document.querySelector('.out_text').textContent = 'Мого!';
        score--;
        document.querySelector('.score_temp').textContent = 'Ваши попытки : ' + score
      } else {
        document.querySelector('.out_text').textContent = 'Game is Over!';
        document.querySelector('.score_temp').textContent = 'Осталось попыток : ' + 0;
      }
      //Number is low
    } else if (inpNumber < secretNumb) {
      if (score > 1) {
        document.querySelector('.out_text').textContent = 'Маловато!';
        score--;
        document.querySelector('.score_temp').textContent = 'Ваши попытки : ' + score;
      } else {
        document.getElementById('img_temp_two').hidden = false;
        document.querySelector('.out_text').textContent = 'Game is Over!';
        document.querySelector('body').style.backgroundColor = "Red";
        document.querySelector('.score_temp').textContent = 'Осталось попыток : ' + 0;
      }
    }
  });

  document.querySelector('.reset_game').addEventListener('click', function () {
    secretNumb = Math.trunc(Math.random() * 10) + 1;
    score = 10;

    document.getElementById('img_temp_two').hidden = true;

    document.querySelector('.out_text').textContent = '';

    document.querySelector('.secret_numb').textContent = 'Секретное число ???'

    document.querySelector('.best_result').textContent = 'Лучший результать:' + bestScore;

    document.querySelector('.inp_numb').value = '';

    document.querySelector('.score_temp').textContent = 'Ваши попытки : ' + score

    document.querySelector('body').style.backgroundColor = "White";

    document.getElementById('img_temp_one').hidden = true;

  });