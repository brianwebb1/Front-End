let pageLogo = document.querySelector('.pageLogo')
let itemSearch = document.querySelector('.itemSearch')
let pageMenu = document.querySelector('.pageMenu')

const pageImage ={
    headerImage:{
        pageIcon: './Images/Icon/705d325001a5234bc2c6e15de1b8ff39 copy.png',
        pageMenuIcon: './Images/Icon/hamburger.png',
    },
    filterIcon:{
        filterArrow: './Images/Icon/filterIcon/arrow-down-sign-to-navigate.png'
    },
    pageSliderImage: [
            './Images/SliderImage/11022839.jpg',
            './Images/SliderImage/dying-light-2-key-art.jpg',
            './Images/SliderImage/ElderRings.jpg',
            './Images/SliderImage/FarCry.jpg',
            './Images/SliderImage/GodOfWar.jpg',
            './Images/SliderImage/HorizonZero.jpg', 
    ],
    gameProductImage:[ 
        './Images/shoppingImage/battelfieldOne.jpg',
        './Images/shoppingImage/battlefieldTwo.webp',
        './Images/shoppingImage/cyberpunk.jpg',
        './Images/shoppingImage/dark Souls.jpg',
        './Images/shoppingImage/dyingLight.webp',
        './Images/shoppingImage/dyinglightTwo.webp',
        './Images/shoppingImage/elderRings.jpg',
        './Images/shoppingImage/forzaGorizonFive.jpg',
        './Images/shoppingImage/forzaHorizonFour.png',
        './Images/shoppingImage/horizonZeroDawn.jpg',
        './Images/shoppingImage/redDeadRedemtpioTwo.jpg',
        './Images/shoppingImage/WitcherThree.jpg',
        './Images/shoppingImage/ARK.jpg',
        './Images/shoppingImage/FarCry5.jpg',
        './Images/shoppingImage/FarCrySix.jpg',
        './Images/shoppingImage/odysey.jpg',
        './Images/shoppingImage/TheForest.webp',
        './Images/shoppingImage/valhala.jpg'
    ],
    generalContentImage :[
        './Images/gameCategoryImage/General/action.jpg',
        './Images/gameCategoryImage/General/adventure.jpg',
        './Images/gameCategoryImage/General/fighting.jpg',
        './Images/gameCategoryImage/General/fps.png',
        './Images/gameCategoryImage/General/Horror.webp',
        './Images/gameCategoryImage/General/OpenWorld.jpg',
        './Images/gameCategoryImage/General/Racing.avif',
        './Images/gameCategoryImage/General/RPG.jpg',
        './Images/gameCategoryImage/General/strategy.webp',
        './Images/gameCategoryImage/General/SUrvival.jpg',
    ],
    platformContentImage: [
        './Images/gameCategoryImage/Platform/bethesda.png',
        './Images/gameCategoryImage/Platform/EaGames.png',
        './Images/gameCategoryImage/Platform/EpicGames.png',
        './Images/gameCategoryImage/Platform/RocksStarGames.png',
        './Images/gameCategoryImage/Platform/Steam.png',
        './Images/gameCategoryImage/Platform/ubisoft.png'
    ]
}

let putItemStorage = JSON.stringify(pageImage)
localStorage.setItem('pageImage' , putItemStorage)
//NOTE Retrieve Date
// let dateRetrieve = localStorage.getItem('pageImage')
// let obj = JSON.stringify(dateRetrieve)

// TODO item Search


pageLogo.children[0].setAttribute('src' , pageImage.headerImage.pageIcon)
pageLogo.children[0].addEventListener('click' , (e) => {
    e.preventDefault()
    window.open('./index.html' , '_self')
})

itemSearch.children[0].setAttribute('src' , pageImage.headerImage.bootStrapSearchIcon)
pageMenu.children[0].setAttribute('src' , pageImage.headerImage.pageMenuIcon)



let navigationMenu = document.querySelectorAll('.navigationMenu')
let line = document.querySelectorAll('.line')
let subMenuBurger = document.querySelectorAll('.sub_menuBurger')
navigationMenu.forEach((click , index) => {
    switch(index){
        case 0:
            click.addEventListener('click' , (e) => {
                e.preventDefault()
                line[0].classList.toggle('first_menu_Line')
                line[1].classList.remove('second_menu_Line')
                line[2].classList.remove('third_menu_Line')

                //TODO sub Menu Burger ClassList Remove Add 
                subMenuBurger[0].classList.toggle('first_sub_menuBurger')
                subMenuBurger[1].classList.remove('second_sub_menuBurger')
                subMenuBurger[2].classList.remove('third_sub_menuBurger')
            })
        break;
        case 1:
            click.addEventListener('click' , (e) => {
                e.preventDefault()
                line[0].classList.remove('first_menu_Line')
                line[1].classList.toggle('second_menu_Line')
                line[2].classList.remove('third_menu_Line')

                //TODO sub Menu Burger ClassList Remove Add 
                subMenuBurger[0].classList.remove('first_sub_menuBurger')
                subMenuBurger[1].classList.toggle('second_sub_menuBurger')
                subMenuBurger[2].classList.remove('third_sub_menuBurger')
            })
        break;
        case 2:
            click.addEventListener('click' , (e) => {
                e.preventDefault()
                line[0].classList.remove('first_menu_Line')
                line[1].classList.remove('second_menu_Line')
                line[2].classList.toggle('third_menu_Line')

                //TODO sub Menu Burger ClassList Remove Add 
                subMenuBurger[0].classList.remove('first_sub_menuBurger')
                subMenuBurger[1].classList.remove('second_sub_menuBurger')
                subMenuBurger[2].classList.toggle('third_sub_menuBurger')
            })
        break;
    }
})

// TODO FILTER MENU  
const pageFilterTitle = [
    //TODO adding filter Menu Title
            {name: 'recommended'},
            {name: 'popular'},
            {name: 'news on Page'},
]

let filter_box = document.querySelectorAll('.filter_box') 
let filterBoxContent = document.querySelectorAll('.box')
let filter__P = document.querySelectorAll('.filter__P')
let filterImage= document.querySelectorAll('.filter_box img')


// NOTE Text For Filter Box
for(let i = 0  ; i < filter__P.length ; i++){
    if(pageFilterTitle[i]){
        filter__P[i].textContent = pageFilterTitle[i].name
    }else{
        filter__P[i].textContent = ''
    }
}
// NOTE Listener To FIlter Box
for(let i = 0 ; i < filter_box.length ; i++){
    filter_box[i].addEventListener('click' , (e) => {
        filterBoxContent[i].classList.toggle('box_Show')
        filterImage[i].classList.toggle('rotateImage')
    })
    filter_box[i].children[1].setAttribute('src' , pageImage.filterIcon.filterArrow)
}


// TODO PAGE SLIDER
let slider = document.querySelector('.slider')
let sliderCounter = 0
slider.children[0].setAttribute('src' , pageImage.pageSliderImage[0])
let sliderCircleList = document.querySelectorAll('.slider_circle_list')
setInterval(function(){
    if(sliderCounter < pageImage.pageSliderImage.length - 1)
        sliderCounter++
    else
        sliderCounter = 0
        slider.children[0].setAttribute('src' , pageImage.pageSliderImage[sliderCounter])
},1700)








const productGameName = [
    {id:new Date().toLocaleString() , name: 'battlefield V'},
    {id:new Date().toLocaleString() , name: 'battlefield 1'},
    {id:new Date().toLocaleString() , name: 'cyberpunk 2077'},
    {id:new Date().toLocaleString() , name: 'Dark Souls III'},
    {id:new Date().toLocaleString() , name: 'Dying Light'},
    {id:new Date().toLocaleString() , name: 'Dying Light 2'},
    {id:new Date().toLocaleString() , name: 'Elder Rings'},
    {id:new Date().toLocaleString() , name: 'Forza Horizon 5'},
    {id:new Date().toLocaleString() , name: 'Forza HOrizon 4'},
    {id:new Date().toLocaleString() , name: 'Horizon Zero Dawn'},
    {id:new Date().toLocaleString() , name: 'Red Dead Redemption 2'},
    {id:new Date().toLocaleString() , name: 'Witcher III'},
    {id:new Date().toLocaleString() , name: 'ARK Survival'},
    {id:new Date().toLocaleString() , name: 'Far Cry V'},
    {id:new Date().toLocaleString() , name: 'Far Cry 6'},
    {id:new Date().toLocaleString() , name: "assassin's creed odyssey"},
    {id:new Date().toLocaleString() , name: "The Forest"},
    {id:new Date().toLocaleString() , name: "assassin's creed valhalla"},
]

let productTitle = document.querySelectorAll('.__Title')
for(let i = 0 ; i < productTitle.length ; i++){
        productTitle[i].textContent = productGameName[i].name
}

let price =document.querySelectorAll('.__price')
let  money = document.querySelectorAll('.money')
for(let i = 0; i <price.length ; i++){
    money[i].textContent = Math.floor(Math.random() * (50 - 1) + 1) + '$'
}

let imageCard = document.querySelectorAll('.image')
imageCard.forEach((item , index) => {
    switch(index){
        case 0:
            item.children[0].setAttribute('src', pageImage.gameProductImage[0])
        break;
        case 1:
            item.children[0].setAttribute('src', pageImage.gameProductImage[1])
        break;
        case 2:
            item.children[0].setAttribute('src', pageImage.gameProductImage[2])
        break;
        case 3:
            item.children[0].setAttribute('src', pageImage.gameProductImage[3])
        break;
        case 4:
            item.children[0].setAttribute('src', pageImage.gameProductImage[4])
        break;
        case 5:
            item.children[0].setAttribute('src', pageImage.gameProductImage[5])
        break;
        case 6:
            item.children[0].setAttribute('src', pageImage.gameProductImage[6])
        break;
        case 7:
            item.children[0].setAttribute('src', pageImage.gameProductImage[7])
        break;
        case 8:
            item.children[0].setAttribute('src', pageImage.gameProductImage[8])
        break;
        case 9:
            item.children[0].setAttribute('src', pageImage.gameProductImage[9])
        break;
        case 10:
            item.children[0].setAttribute('src', pageImage.gameProductImage[10])
        break;
        case 11:
            item.children[0].setAttribute('src', pageImage.gameProductImage[11])
        break;
        case 12:
            item.children[0].setAttribute('src', pageImage.gameProductImage[12])
        break;
        case 13:
            item.children[0].setAttribute('src', pageImage.gameProductImage[13])
        break;
        case 14:
            item.children[0].setAttribute('src', pageImage.gameProductImage[14])
        break;
        case 15:
            item.children[0].setAttribute('src', pageImage.gameProductImage[15])
        break;
        case 16:
            item.children[0].setAttribute('src', pageImage.gameProductImage[16])
        break;
        case 17:
            item.children[0].setAttribute('src', pageImage.gameProductImage[17])
        break;
    }
})



let containerGeneralImage = document.querySelectorAll('.generalContainer')
for(let i = 0 ; i <containerGeneralImage.length ; i++){
    containerGeneralImage[i].children[0].setAttribute('src' , pageImage.generalContentImage[i])
}

let containerPlatformImage = document.querySelectorAll('.platformContainer')
for(let i = 0 ; i < containerPlatformImage.length ; i++){
    containerPlatformImage[i].children[0].setAttribute('src' , pageImage.platformContentImage[i])
}

// TODO accountTypeBtn click
let accountTypeBtn = document.querySelectorAll('.accountTypeBtn')
let platform_content = document.querySelector('.platform_content')
let general_content = document.querySelector('.general_content')
accountTypeBtn.forEach((item , index) => {
    switch(index){
        case 0:
            item.addEventListener('click' , (e) => {
                e.preventDefault()
                accountTypeBtn[0].classList.add('general_border')
                accountTypeBtn[1].classList.remove('platform_border')
                platform_content.classList.remove('display_show')
                general_content.classList.remove('general_display_hide')
                platform_content.classList.remove('platform_display_show')
        })
        break;
        case 1:
            item.addEventListener('click' , (e) => {
                e.preventDefault()
                console.log('pl click');
                accountTypeBtn[0].classList.remove('generalBtn_border_bottom')
                accountTypeBtn[0].classList.remove('general_border')
                accountTypeBtn[1].classList.add('platform_border')
                platform_content.classList.add('platform_display_show')
                general_content.classList.add('general_display_hide')
        })
        break;
    }
})





















