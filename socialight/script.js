const itemsLink = document.querySelectorAll(".nav__block")
itemsLink.forEach(item => {
  item.addEventListener("click", () => {
    document.querySelector(".nav__block._active").classList.remove("_active");
    item.classList.add("_active")
  })  
})
    
const homeY = document.querySelector(".home").getBoundingClientRect().top + scrollY
const servicesY = document.querySelector(".services").getBoundingClientRect().top + scrollY
const aboutY = document.querySelector(".about").getBoundingClientRect().top + scrollY
const workY = document.querySelector(".work").getBoundingClientRect().top + scrollY
const clientsY = document.querySelector(".clients").getBoundingClientRect().top + scrollY
const teamY = document.querySelector(".team").getBoundingClientRect().top + scrollY
const factsY = document.querySelector(".facts").getBoundingClientRect().top + scrollY
const contactY = document.querySelector(".contact").getBoundingClientRect().top + scrollY

document.addEventListener("scroll", () => {
  if(scrollY >= homeY){
      document.querySelector(".nav__block._active").classList.remove("_active");
      document.querySelector(".nav__home").classList.add("_active")
    }
  if(scrollY >= servicesY){
    document.querySelector(".nav__block._active").classList.remove("_active");
    document.querySelector(".nav__services").classList.add("_active")
  }
  if(scrollY >= aboutY){
    document.querySelector(".nav__block._active").classList.remove("_active");
    document.querySelector(".nav__about").classList.add("_active")
  }
  if(scrollY >= workY){
    document.querySelector(".nav__block._active").classList.remove("_active");
    document.querySelector(".nav__work").classList.add("_active")
  }
  if(scrollY >= clientsY){
    document.querySelector(".nav__block._active").classList.remove("_active");
    document.querySelector(".nav__clients").classList.add("_active")
  }
  if(scrollY >= teamY){
    document.querySelector(".nav__block._active").classList.remove("_active");
    document.querySelector(".nav__team").classList.add("_active")
  }
  if(scrollY >= factsY){
    document.querySelector(".nav__block._active").classList.remove("_active");
    document.querySelector(".nav__facts").classList.add("_active")
  }
  if(scrollY >= contactY){
    document.querySelector(".nav__block._active").classList.remove("_active");
    document.querySelector(".nav__contact").classList.add("_active")
  }
})


