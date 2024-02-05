const menuButon = document.getElementById("menu_buton");
const navLinks = document.getElementById("nav_links");
const menuButtonIcon = menuButon.querySelector("i");

menuButon.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuButtonIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");

});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuButtonIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header_container .section_subheader", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header_container h1", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".room_card", {
    ...scrollRevealOption,
    interval: 500,
});

const submitButton = document.querySelector(".buton");

submitButton.addEventListener("click", (e) => {
    const arrivalDate = document.querySelector(".arrival-date");
    const departureDate = document.querySelector(".departure-date");
    const rooms = document.querySelector(".rooms");
    const numberOfGuests = document.querySelector(".number-of-guests");
  
    e.preventDefault();
    if (
      numberOfGuests.value === "" ||
      arrivalDate.value === "" ||
      departureDate.value === "" ||
      rooms.value === ""
    ) {
      alert("Please Fill In The Blanks!");
    }
    else{
        alert("Filled. Thank you!");
    }
  });

