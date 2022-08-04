// Constants and Variables
const menuBtn = document.querySelector(".menu--btn");
const menuImg = document.querySelector(".menu--btn img");
const navbar = document.querySelector(".nav--list");
const bookmark = document.querySelector(".bookmark");
const bookmarkText = document.querySelector(".bookmark span");
const pledgeCard = document.querySelectorAll(".pledge--card");
const rewardBtn = document.querySelectorAll(".reward--btn");
const supportWrapper = document.querySelector(".support--wrapper");
const projectBtn = document.querySelector(".btn");
const gotBtn = document.querySelector('.support--container button');
const pledgeContainer = document.querySelector('.pledge--choose--wrapper');
const hideNavbar = document.querySelector('.navbar');
const pledgeCards = document.querySelectorAll('.pledge--choose--card');
const circleBtns = document.querySelectorAll('.one');
const closeBtn = document.querySelector('.pledge--choose--container img');
const selectBtn = document.querySelectorAll('.active--btn');
let isClick = false;

// Functions

const handleClick = () => {
  navbar.classList.toggle("active");
  if (navbar.classList.contains("active")) {
    menuImg.src = "./images/icon-close-menu.svg";
  } else {
    menuImg.src = "./images/icon-hamburger.svg";
  }
};

const handleBookmark = () => {
  bookmark.classList.toggle("bookmarked");
  if (bookmark.classList.contains("bookmarked")) {
    bookmarkText.textContent = "bookmarked";
  } else {
    bookmarkText.textContent = "bookmark";
  }
};

const handlePledgeButton = () => {
  for (var i = 0; i < 3; i++) {
    var currentCard = document.getElementsByClassName("fade");
    for (var j = 0; j < currentCard.length; j++) {
      let index = currentCard[j].dataset.index;
      rewardBtn[index].textContent = "Out of Stock";
    }
  }
};
handlePledgeButton();

const handleSupport = () => {
  if (!supportWrapper.classList.contains("show")) {
    supportWrapper.classList.add("show");
    document.body.classList.add("active");
    isClick = true;
    window.scrollTo(0,0);
  } else {
    supportWrapper.classList.remove("show");
    document.body.classList.remove("active");
    isClick = false;
  }
};

const gotHandle = () => {
   if(!isClick) return; // prevent the function from running
   supportWrapper.classList.remove('show');
   pledgeContainer.classList.add('started');
   if(pledgeContainer.classList.contains('started')) {
      hideNavbar.style.zIndex = "1";
   }
   else {
      hideNavbar.style.zIndex = "30"
   }
}

function handleSelect(e) {
   circleBtns.forEach(btn => btn.classList.remove('selected'));
   pledgeCards.forEach(card => card.classList.remove('select'));
   let index = this.dataset.select;
   circleBtns[index].classList.add('selected');
   if(pledgeCards[index].classList.contains('fade--out') || pledgeCards[index].classList.contains('notActive')) return; 
   pledgeCards[index].classList.add('select');
}

const closePledge = () => {
   pledgeContainer.classList.remove('started');
   isClick = false;
   hideNavbar.style.zIndex = "30";
   document.body.classList.remove('active');
}

function handleReward(index,event) {
  circleBtns.forEach(btn => btn.classList.remove('selected'));
  pledgeCards.forEach(card => card.classList.remove('select'));
  pledgeContainer.classList.add('started'); 
  pledgeCards[index+1].classList.add('select');
  circleBtns[index+1].classList.add('selected');
  hideNavbar.style.zIndex = "1";
  document.body.classList.add('active');
  window.scrollTo(0,0);
}

// EventListeners

menuBtn.addEventListener("click", handleClick);
bookmark.addEventListener("click", handleBookmark);
projectBtn.addEventListener("click", handleSupport);
gotBtn.addEventListener('click', gotHandle)
circleBtns.forEach(btn => btn.addEventListener('click', handleSelect));
closeBtn.addEventListener('click', closePledge);
selectBtn.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    handleReward(i);
  })
})
