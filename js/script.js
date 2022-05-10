let swipeBtn = document.querySelector("#swipeProfile");
let contactsBtn = document.querySelector("#contacts");
let profileSide = document.querySelector("#profile");
let profileHide = document.querySelector("#profile-hide");
let contentSide = document.querySelector("#content");
let hideFlag = false;
const profileLow_W = 1;
const profileBig_W = 31;
const contentLow_W = 69;
const contentBig_W = 99;
let uniNames = document.querySelectorAll("#section-name");

const showBtn = (e) => {
  swipeBtn.style.display = "block";
};
const hideBtn = (e) => {
  swipeBtn.style.display = "none";
};

const showHideProfile = (e) => {
  if (!hideFlag) {
    hideProfile();
  } else {
    showProfile();
  }
};

const hideProfile = () => {
  hideFlag = true;
  profileSide.style.width = profileLow_W + "%";
  profileHide.style.width = "1%";
  contentSide.style.width = contentBig_W + "%";
  swipeBtn.innerHTML = "&#8250;";
};

const showProfile = () => {
  hideFlag = false;
  profileSide.style.width = profileBig_W + "%";
  profileHide.style.width = "0";
  contentSide.style.width = contentLow_W + "%";
  swipeBtn.innerHTML = "&#8249;";
};

swipeBtn.addEventListener("click", showHideProfile);
profileHide.addEventListener("click", showHideProfile);
profileSide.addEventListener("mouseenter", showBtn);
profileSide.addEventListener("mouseleave", hideBtn);
profileHide.addEventListener("mouseenter", showBtn);
profileHide.addEventListener("mouseleave", hideBtn);
contactsBtn.addEventListener("click", showProfile);
/* setInterval(() => {
  uniNames.forEach((item) => {
    if (item.style.color == "white") {
      item.style.color = "black";
    } else {
      item.style.color = "white";
    }
  });
}, 500); */
