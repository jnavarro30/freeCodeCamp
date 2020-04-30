//Variables

const navVariables = (() => {
    const navBtnEl = document.querySelector(".nav__btn"),
          navBottomEl = document.querySelector(".nav__bottom");

    return {
        navBtnEl,
        navBottomEl
    }
})();

//Event Listeners 

const navEventListeners = (() => {
    navVariables.navBtnEl.addEventListener("click", () => {
        navVariables.navBottomEl.classList.toggle("hide");
        navVariables.navBtnEl.classList.toggle("white");
    })
})();


export default navVariables;
