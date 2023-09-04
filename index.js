let homeResult = document.getElementById("home-result");
let guestResult = document.getElementById("guest-result");

const incrementHome = (number) => {
    homeResult.innerText = parseInt(homeResult.innerText) + number;
};

const incrementGuest = (number) => {
    guestResult.innerText = parseInt(guestResult.innerText) + number;
};
