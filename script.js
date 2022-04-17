//Javascript Files of the mighty pirate //
const idCard = document.querySelector('.adventurer-idCard');
const idName = idCard.querySelector('.adventurer-idCard__text_name');
const idClass = idCard.querySelector('.adventurer-idCard__text_class');
const idPetName = idCard.querySelector('.adventurer-idCard__text_pet');


const idForm = document.querySelector('.popup__form');
const popupList = document.querySelectorAll('.popup');
const idCardPopup = document.querySelector('.popup_type_idCard');
const editButton = document.querySelector('.adventurer-idCard ')
//const idNameButton = document.querySelector('.button_edit_name');
//const idClassButton = document.querySelector('.button_edit_class');
//const idPetButton = document.querySelector('.button_edit_pet');
const closeButton = document.querySelector('.popup__close');

const inputName = idCardPopup.querySelector('.popup__input_idCard_name');
const inputClass = idCardPopup.querySelector('.popup__input_idCard_class');
const inputPetName = idCardPopup.querySelector('.popup__input_idCard_pet');
const popupSelector = 'popup__open';

//functions of Id Card //
function openPopup (popup) {
  popup.classList.add(popupSelector);
  addKeyDownListener(); //
}

function closePopup (popup) {
  popup.classList.remove(popupSelector);
  removeKeyDownListener();
}

function openProfilePopup () {
  openPopup(idCardPopup);
  inputName.value = idName.textContent;
  inputClass.value = idClass.textContent;
  inputPetName.value = idPetName.textContent;
}

function handleProfileFormSubmit(event) {
  event.preventDefault();
  idName.textContent = inputName.value;
  idClass.textContent = inputClass.value;
  idPetName.textContent = inputPetName.value;
  closePopup (idCardPopup);
}

// Event Handlers for idCard
editButton.addEventListener('click', openProfilePopup);
idCardPopup.addEventListener('submit', handleProfileFormSubmit);
closeButton.addEventListener('click', () => closePopup(idCardPopup));

//Closing the popup windows escape button//
function handleKeyDown(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector(`.${popupSelector}`);
    closePopup(openedPopup);
  }
}

function addKeyDownListener() {
  document.addEventListener('keydown', handleKeyDown);
}

function removeKeyDownListener() {
  document.removeEventListener('keydown', handleKeyDown);
}

//Closing the popup windows by click - //const popupList = document.querySelector('.popup');
popupList.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if(evt.target.matches('.popup')) {
      const openedPopup = document.querySelector(`.${popupSelector}`);
      closePopup(openedPopup);
    }
  });
});
