var timerA = document.querySelector('#timer');

var startQuiz = document.querySelector('#start');

var hide = document.querySelector('#hide');

var hide2 = document.querySelector('#hide2');

var counter = 61;

startQuiz.addEventListener('click', setCounterText);
startQuiz.addEventListener('click', addQ1)

timerA.innerHTML = "60";

function setCounterText() { 
  console.log(counter);
  counter--;
  timerA.innerHTML = counter;
  if(counter === 60){
    countdown = setInterval(setCounterText, 1000);
  } else if(counter <= -1){
      timerA.innerHTML = "0";
      clearInterval(countdown);
    }
  };


  var a1q1 = document.querySelector('#a1q1')
  var a2q1 = document.querySelector('#a2q1')
  var a3q1 = document.querySelector('#a3q1')
  var a4q1 = document.querySelector('#a4q1')

  a1q1.style.display = "none"
  a2q1.style.display = "none"
  a3q1.style.display = "none"
  a4q1.style.display = "none"
  document.querySelector('#a1q2').style.display = "none"
  document.querySelector('#a2q2').style.display = "none"
  document.querySelector('#a3q2').style.display = "none"
  document.querySelector('#a4q2').style.display = "none"
  document.querySelector('#a1q3').style.display = "none"
  document.querySelector('#a2q3').style.display = "none"
  document.querySelector('#a3q3').style.display = "none"
  document.querySelector('#a4q3').style.display = "none"
  document.querySelector('#alldone').style.display = "none"
  document.querySelector('#urScore').style.display = "none"
  document.querySelector('#initials').style.display = "none"
  document.querySelector('#urName').style.display = "none"



  function addQ1() {
    startQuiz.style.display = 'none';
    hide.style.display = 'none';
    hide2.style.display = 'none';
    var q1add = document.querySelector('#q1');
    var q1 = document.createElement("p");
    q1.textContent = "Commonly used datatypes do NOT include:";
    q1add.appendChild(q1);
    var q1a1 = document.querySelector('#a1q1');
    var q1ans1 = document.createElement("div");
    q1ans1.textContent = "1. strings";
    q1a1.appendChild(q1ans1);
    q1a1.style.display = 'inline';
    a1q1.addEventListener('click', wrongAns)
    var q1a2 = document.querySelector('#a2q1');
    var q1ans2 = document.createElement("div");
    q1ans2.textContent = "2. booleans";
    q1a2.appendChild(q1ans2);
    q1a2.style.display = 'inline';
    a2q1.addEventListener('click', wrongAns)
    var q1a3 = document.querySelector('#a3q1');
    var q1ans3 = document.createElement("div");
    q1ans3.textContent = "3. alerts";
    q1a3.appendChild(q1ans3);
    q1a3.style.display = 'inline';
    a3q1.addEventListener('click', correctAns)
    var q1a4 = document.querySelector('#a4q1');
    var q1ans4 = document.createElement("div");
    q1ans4.textContent = "4. numbers";
    q1a4.appendChild(q1ans4);
    q1a4.style.display = 'inline';
    a4q1.addEventListener('click', wrongAns)
    a1q1.addEventListener('click', addQ2)
    a2q1.addEventListener('click', addQ2)
    a3q1.addEventListener('click', addQ2)
    a4q1.addEventListener('click', addQ2)
  }

  function wrongAns() {
    var incorrect = document.querySelector('#wrong');
    wrong.textContent = 'Wrong!';
    incorrect.style.display ='inline'
    counter = counter - 10;
  }

  function correctAns() {
    var incorrect = document.querySelector('#wrong');
    wrong.textContent = 'Correct!';
    incorrect.style.display ='inline'
  }

  function addQ2() {
    a1q1.style.display = 'none'
    a2q1.style.display = 'none'
    a3q1.style.display = 'none'
    a4q1.style.display = 'none'
    q1.style.display = 'none'
    var q2add = document.querySelector('#q2');
    var q2 = document.createElement("p");
    q2.textContent = "The condition in an if / else statement is enclosed with _____.";
    q2add.appendChild(q2);
    var q2a1 = document.querySelector('#a1q2');
    var q2ans1 = document.createElement("div");
    q2ans1.textContent = "1. quotes";
    q2a1.appendChild(q2ans1);
    q2a1.style.display = 'inline';
    q2a1.addEventListener('click', wrongAns)
    var q2a2 = document.querySelector('#a2q2');
    var q2ans2 = document.createElement("div");
    q2ans2.textContent = "2. curly brackets";
    q2a2.appendChild(q2ans2);
    q2a2.style.display = 'inline';
    q2a2.addEventListener('click', wrongAns)
    var q2a3 = document.querySelector('#a3q2');
    var q2ans3 = document.createElement("div");
    q2ans3.textContent = "3. parenthesis";
    q2a3.appendChild(q2ans3);
    q2a3.style.display = 'inline';
    q2a3.addEventListener('click', correctAns)
    var q2a4 = document.querySelector('#a4q2');
    var q2ans4 = document.createElement("div");
    q2ans4.textContent = "4. square brackets";
    q2a4.appendChild(q2ans4);
    q2a4.style.display = 'inline';
    q2a4.addEventListener('click', wrongAns)
    q2a1.addEventListener('click', addQ3)
    q2a2.addEventListener('click', addQ3)
    q2a3.addEventListener('click', addQ3)
    q2a4.addEventListener('click', addQ3)
  }

  function addQ3() {
    a1q2.style.display = 'none'
    a2q2.style.display = 'none'
    a3q2.style.display = 'none'
    a4q2.style.display = 'none'
    q2.style.display = 'none'
    var q3add = document.querySelector('#q3');
    var q3 = document.createElement("p");
    q3.textContent = "Arrays in JavaScript can be used to store _____.";
    q3add.appendChild(q3);
    var q3a1 = document.querySelector('#a1q3');
    var q3ans1 = document.createElement("div");
    q3ans1.textContent = "1. numbers and strings";
    q3a1.appendChild(q3ans1);
    q3a1.style.display = 'inline';
    q3a1.addEventListener('click', wrongAns)
    var q3a2 = document.querySelector('#a2q3');
    var q3ans2 = document.createElement("div");
    q3ans2.textContent = "2. other arrays";
    q3a2.appendChild(q3ans2);
    q3a2.style.display = 'inline';
    q3a2.addEventListener('click', wrongAns)
    var q3a3 = document.querySelector('#a3q3');
    var q3ans3 = document.createElement("div");
    q3ans3.textContent = "3. booleans";
    q3a3.appendChild(q3ans3);
    q3a3.style.display = 'inline';
    q3a3.addEventListener('click', wrongAns)
    var q3a4 = document.querySelector('#a4q3');
    var q3ans4 = document.createElement("div");
    q3ans4.textContent = "4. all of the above";
    q3a4.appendChild(q3ans4);
    q3a4.style.display = 'inline';
    q3a4.addEventListener('click', correctAns)
    q3a1.addEventListener('click', addScore)
    q3a2.addEventListener('click', addScore)
    q3a3.addEventListener('click', addScore)
    q3a4.addEventListener('click', addScore)
  }

  function addScore()
  {
    a1q3.style.display = 'none'
    a2q3.style.display = 'none'
    a3q3.style.display = 'none'
    a4q3.style.display = 'none'
    q3.style.display = 'none'
    timerA.style.display='none'
    var allDoneAdd = document.querySelector('#alldone');
    var allDoneP = document.createElement("p");
    allDoneAdd.style.display = "inline";
    allDoneP.textContent = "All Done!";
    allDoneAdd.appendChild(allDoneP);
    var urScore = document.querySelector('#urScore')
    urScore.style.display = "inline"
    clearInterval(countdown)
    document.querySelector('#timerB').innerHTML = counter;
    document.querySelector('#timerC').innerHTML = counter;
    document.querySelector('#initials').style.display = "inline"
    document.querySelector('#urName').style.display = "inline"
    document.querySelector('#Submit').addEventListener('click', addUser)
  }

    function addUser() {
      var userInput = document.querySelector('#hiScoreAdd').value;
      var listInput = userInput
      document.querySelector('#scoreList').appendChild(listInput);
    }