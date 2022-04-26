//Javascript Files of the mighty pirate //
const idCard = document.querySelector('.adventurer-idCard');
const idName = idCard.querySelector('.adventurer-idCard__text_name');
const idClass = idCard.querySelector('.adventurer-idCard__text_class');
const idPetName = idCard.querySelector('.adventurer-idCard__text_pet');
const idImage = idCard.querySelector('.adventurer-idCard__image');
const idShiftButton = idCard.querySelector('#changeImage');

const idForm = document.querySelector('.popup__form'); //popup__form_edit
const popupList = document.querySelectorAll('.popup');
const idCardPopup = document.querySelector('.popup_type_idCard');
const idImagePopup = document.querySelector('.popup_type_idImage');
const editButton = document.querySelector('.adventurer-idCard__button');
const closeButton = document.querySelector('.popup__close');
const editImage = idCard.querySelector('.adventurer-idCard__image');//popupIdImage change button
const closeImageButton = document.querySelector('.popup__close.popup__close_image');

const inputName = idCardPopup.querySelector('.popup__input_idCard_name');
const inputClass = idCardPopup.querySelector('.popup__input_idCard_class');
const inputPetName = idCardPopup.querySelector('.popup__input_idCard_pet');
const inputImage = idCardPopup.querySelector('.popup__input_idCard_image');
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

function openProfileImagePopup () {
  openPopup(idImagePopup);
}


function handleProfileIdImage(event) {
  event.preventDefault();
  ChangeImageByClick();
  closePopup(idImagePopup);
}

function IdImageChange(event) {
  const idShiftButton = event.target;
  const idImage = idShiftButton;
  //const change = idCard.querySelector(`${changeImage.id}`);
  //idImage.style.backgroundImage = "url('')";
  idImage.classList.add("adventurer-idCard__boxImages-obelix");
}
//const pickImage = idCard.querySelector('.adventurer-idCard__box')
idImage.addEventListener('click', IdImageChange);



// Event Handlers for idCard
editButton.addEventListener('click', openProfilePopup);
editImage.addEventListener('click', openProfileImagePopup);
idCardPopup.addEventListener('submit', handleProfileFormSubmit);
closeButton.addEventListener('click', () => closePopup(idCardPopup));
closeImageButton.addEventListener('click', () => closePopup(idImagePopup));

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

//Image Changer//
const IdImageAdventurer = [
  "https://namerm.github.io/adventurers_guild_1/images/idcharacters/asterix.gif",
  "https://namerm.github.io/adventurers_guild_1/images/idcharacters/obelix.gif",
  "https://namerm.github.io/adventurers_guild_1/images/idcharacters/getafix.gif",
  "https://namerm.github.io/adventurers_guild_1/images/idcharacters/vitalstatistix.gif",
  "https://namerm.github.io/adventurers_guild_1/images/idcharacters/idefix.gif",
  "https://namerm.github.io/adventurers_guild_1/images/idcharacters/julius-ceasar.gif",
  "https://namerm.github.io/adventurers_guild_1/images/idcharacters/cleopatra.gif",
  "https://namerm.github.io/adventurers_guild_1/images/idcharacters/cacofonix.png",
  "https://namerm.github.io/adventurers_guild_1/images/idcharacters/brutus.gif"
];

// function ChangeImageByClick (evt){
//   const imageClick = evt.target;
//   imageClick.style.backgroundImage = "url(`.${IdImageAdventurer}`)"
// }


