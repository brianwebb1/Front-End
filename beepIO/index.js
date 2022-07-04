// Detect Device Is Mobile or ot

const isMobile ={
    Android: function (){
        return navigator.userAgent.match(/Android/i)
    },
    BlackBerry:  function (){
        return navigator.userAgent.match(/BlackBerry/i)
    },
    ios: function (){
        return navigator.userAgent.match(/iPhone|iPad|iPod/i)
    },
    Windows: function (){  
    },
Opera: function (){
    return navigator.userAgent.match(/Opera Mini/i)
},  
    any: function(){
        return(
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.ios()||
            isMobile.Windows()||
            isMobile.Opera ()
        )
    }
}




let getStartedBUtton = document.querySelector('.getStartedBUtton')
let downloadButton = document.querySelector('.downloadButton')
let playIcon = document.querySelector('.playIcon')
let AppButton =document.querySelector('.AppButton')
getStartedBUtton.addEventListener('click' , (e) => {
    e.preventDefault()
        alert('unavailable')
})

downloadButton.addEventListener('click' , (e) => {
    e.preventDefault()
    alert('nothing to download: click on Play Icon')
})
playIcon.addEventListener('click' , (e) => {
    e.preventDefault()
    window.open('https://youtu.be/Fkk9DI-8el4?t=45')
})
AppButton.addEventListener('click' , (e) => {
    e.preventDefault()
    alert('nothing to download ')
})









let images = [
    './Images/144429.t.W600.png'
]
const imageBox = document.querySelector('.Image')
imageBox.children[0].setAttribute('src', images[0])



let header = document.querySelector('#__Header')
function headerBackgroundScrollChange (){
    if(scrollY >= 11){
        header.style.backgroundColor = '#161821'
        header.style.pointerEvents = 'All'
    }else{
        header.style.background = 'none'
    }
}
window.addEventListener('scroll' , headerBackgroundScrollChange)


const appImage = [
    './Images/144429.t.W600.png'
]
let containerImageForOurApp = document.querySelector('.containerImageForOurApp')
containerImageForOurApp.children[0].setAttribute('src' , appImage[0])
let userName = document.querySelector('.userName')
let userNameArr = [
    {
        name:'thomas',
        surname:'Mumladze',
        age: 22,
        fullName: function (){
            return this.name + ' ' + this.surname
        }
    },
    {
        name:'nick',
        surname: 'Mumladze',
        age: 21,
        fullName: function (){
            return this.name + ' ' + this.surname
        }
    },
    {
        name:'george',
        surname: 'Mumladze',
        age: 19,
        fullName: function (){
            return this.name + ' ' + this.surname
        }
    } ,
    
]
let businessImageContainer = document.querySelectorAll('.__image')
const businessImages = [
    'https://ecommercemanagers.com/en/wp-content/uploads/sites/3/2019/08/agenda-analysis-business-plan-990818.jpg',
    'https://industrytoday.com/wp-content/uploads/2018/12/business-3224643_1920.jpg',
    'https://businessandmarketingblog.com/wp-content/uploads/2022/05/Business1.jpg'
]
businessImageContainer.forEach(function (element , index) {
    if(index == 0){
    element.children[0].setAttribute('src', businessImages[0])
    userName.textContent = userNameArr.fullName
    } else if(index == 1){
        element.children[0].setAttribute('src', businessImages[1])
    } else if(index == 2){
        element.children[0].setAttribute('src', businessImages[2])
    }
})








let userImageContainer = document.querySelector('.image')
let imageSlider = 0 ;
const userImages = [
    'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHUvOd8Q-VihyupbJCdgjIR2FxnjGtAgMu3g&usqp=CAU',
    'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
]
userImageContainer.children[0].setAttribute('src' , userImages[imageSlider])


let sliderButton = document.querySelectorAll('.sliderButton')
sliderButton.forEach(function(element , index) {
                if(index === 0){
                    element.addEventListener('click' , function () {
                        if(imageSlider > 0)
                            imageSlider--
                        else
                            imageSlider = userImages.length - 1

                            userImageContainer.children[0].setAttribute('src' , userImages[imageSlider])
                    })
                }else{
                    if(index === 1){
                        element.addEventListener('click' , (e) => {
                        if(imageSlider < userImages.length - 1)
                            imageSlider++
                        else
                            imageSlider = 0
                            userImageContainer.children[0].setAttribute('src' , userImages[imageSlider])
                        })
                    }
                }

    })



    let  btnContainer = document.querySelectorAll('.btnContainer')

    const btnImages = [
        './Images/app-store-google-play-png-favpng-Sjx7Xm56DgkzSv8P7dmJ2SdK3 copy.png',
        './Images/png-transparent-google-play-logo-google-play-computer-icons-app-store-google-text-logo-sign.png'
    ]
    btnContainer.forEach(function(elements,index) {
        if(index === 0){
            elements.children[0].setAttribute('src' , btnImages[0])
        }else if(index === 1){
            elements.children[0].setAttribute('src' , btnImages[1])
        }


            switch(index){
                case 0:
                    elements.addEventListener('click' , (e) => {
                        e.preventDefault()
                        console.log('Apple Store Unavailable');
                    })
                break;
                case 1:
                    elements.addEventListener('click' , (e) => {
                        e.preventDefault()
                        console.log('google Play is Unavailable');
                    })
            }
    })



    let profileLink = document.querySelectorAll('.profileLink')
    profileLink.forEach(function (element, index) {
        switch(index){
            case 0: 
            element.addEventListener('click' , (e) => {
                e.preventDefault()
                window.open('https://www.facebook.com/ThomasMumladze/')
            })
            break;
            case 1:
                element.addEventListener('click' , (e) => {
                    e.preventDefault()
                    window.open('https://www.linkedin.com/in/thoma-mumladze-791a2a230/')
                })
            break;
            case 2:
                element.addEventListener('click' , (e) => {
                    e.preventDefault()
                    window.open('https://www.instagram.com/thomas_mumladze/')
                })
            break;
            case 3:
                element.addEventListener('click' , (e) => {
                    e.preventDefault()  
                    window.open('https://github.com/brianwebb1')
            })
        }
    })



