//Variables

const playVariables = (() => {
    const mainItemTopEl = document.querySelectorAll(".main__item-top"),
          subItemTopEl = document.querySelectorAll(".sub__item-top");

          return {
              mainItemTopEl,
              subItemTopEl
          }
})();

//Event Listeners

const playEventListeners = (() => {
    playVariables.mainItemTopEl.forEach(mainItem => {
        mainItem.addEventListener("click", (event) => {
            mainItem.nextElementSibling.classList.toggle("hide");
            mainItem.firstElementChild.classList.toggle("rotate");
        })
    })

    playVariables.subItemTopEl.forEach(subItem => {
        subItem.addEventListener("click", (event) => {
            subItem.nextElementSibling.classList.toggle("hide");
            subItem.firstElementChild.children[0].classList.toggle("rotate");
        })
    })
    
})();


export default playVariables;