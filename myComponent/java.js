const submit_btn = document.querySelector('.submit');
const box_1 = document.querySelector('.box-1');
const box_2 = document.querySelector('.box-2');
const ratingBtn = document.querySelectorAll('.n-box');
const score = document.querySelector('.score');
let star_score = 3 //default

submit_btn.addEventListener('click', onSubmit);
ratingBtn.forEach( btn => {
  btn.addEventListener('click', handleRatingBtnClick);
});

function onSubmit(){
  box_1.classList.add('hide');
  score.textContent = star_score;
  box_2.classList.remove('hide');

  //console.log('submit click');
}

function handleRatingBtnClick(event){
  ratingBtn.forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');
  
  //console.log('ratig btn click');

  star_score = event.target.textContent;
  console.log(star_score);
}

//console.log(ratingBtn);