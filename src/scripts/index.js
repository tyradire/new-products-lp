const moreBtn = document.querySelector('.review__more-btn');
const reviewContainer = document.querySelectorAll('.review');
const textContainer = document.querySelectorAll('.review__text');
const buttonContant = document.querySelector('.review__more-btn');

const buttonFeedback = document.querySelector('.feedback__button');
const formFeedback = document.querySelector('.feedback__form');
const closeFeedbackButton = document.querySelector('.feedback__close-btn');

const readMore = () => {
  reviewContainer[2].classList.toggle('review_open');
  textContainer[2].classList.toggle('review__text_open');
  if (buttonContant.textContent === 'Читать ещё...') {
    buttonContant.textContent = 'Скрыть'
  } else buttonContant.textContent = 'Читать ещё...'
}

const openFeedback = () => {
  formFeedback.classList.add('feedback_opened');
}

const closeFeedback = () => {
  formFeedback.classList.remove('feedback_opened');
}

moreBtn.addEventListener('click', readMore);
buttonFeedback.addEventListener('click', openFeedback);
closeFeedbackButton.addEventListener('click', closeFeedback);