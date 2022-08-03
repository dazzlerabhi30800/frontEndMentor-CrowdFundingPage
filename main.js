// Constants and Variables
const menuBtn = document.querySelector('.menu--btn');
const menuImg = document.querySelector('.menu--btn img');
const navbar = document.querySelector('.nav--list');
const bookmark = document.querySelector('.bookmark');
const bookmarkText = document.querySelector('.bookmark span');
const pledgeCard = document.querySelectorAll('.pledge--card');
const rewardBtn = document.querySelectorAll('.reward--btn');




// Functions

const handleClick = () => {
   navbar.classList.toggle('active');
   if(navbar.classList.contains('active')) {
    menuImg.src = "./images/icon-close-menu.svg";
   }
   else {
    menuImg.src = "./images/icon-hamburger.svg";
   }
}

const handleBookmark = () => {
   bookmark.classList.toggle('bookmarked');
   if(bookmark.classList.contains('bookmarked')) {
      bookmarkText.textContent = "bookmarked";
   }
   else {
      bookmarkText.textContent = "bookmark";
   }
}

const handlePledgeButton = () => {
  for(var i = 0; i < 3; i++) {
   var currentCard = document.getElementsByClassName('fade')
   for(var j = 0; j < currentCard.length; j++) {
     let index = currentCard[j].dataset.index;
     rewardBtn[index].textContent = 'Out of Stock';
   }
  } 
}
handlePledgeButton();

// EventListeners 

menuBtn.addEventListener('click', handleClick)
bookmark.addEventListener('click', handleBookmark)
