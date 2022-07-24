const modalDescriptionEl = document.querySelectorAll(".modal-description");
const modalInformation = document.querySelectorAll(".modal-information");

modalInformation.forEach((modalInfo, index) => {
  modalInfo.addEventListener("click", () => {
    if (modalDescriptionEl[index].classList.contains("modal-hidden")) {
      modalDescriptionEl[index].classList.remove("modal-hidden");
      document.querySelectorAll('.modal-icon')[index].classList.add('modal-icon-active')
      setTimeout(function () {
        modalDescriptionEl[index].classList.remove("modal-invisible");
        console.log("hello");
      }, 30);
    } else {
      document.querySelectorAll('.modal-icon')[index].classList.remove('modal-icon-active')
      modalDescriptionEl[index].classList.add("modal-invisible");
      modalDescriptionEl[index].addEventListener("transitionend", (e) => {
        modalDescriptionEl[index].classList.add("modal-hidden");
        
      }, {
        once: true
      });
    }
  });
});
