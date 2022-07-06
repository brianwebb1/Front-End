

let siteDate = new Date()
const months = [
    'January ','February' ,'March' ,'April' ,'May' ,'June' ,'July','August','September' ,'October' ,'November' ,'December' ,
]
let dateText = document.querySelector('.dateText')
dateText.textContent = months[siteDate.getMonth()] + ' / ' + siteDate.getDay() +  ' / ' + siteDate.getFullYear()



let imageContainer = document.querySelectorAll('.imageContainer')
const userImage = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png',
    'https://cdn-icons-png.flaticon.com/512/21/21104.png',
    'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png',
    'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
]
imageContainer.forEach(function (element , index) { 
        switch(index){
            case 0:
                element.children[0].setAttribute('src' , userImage[0])
            break;
            case 1:
                element.children[0].setAttribute('src' , userImage[1])
            break;
            case 2:
                element.children[0].setAttribute('src' , userImage[2])
            break;
            case 3:
                element.children[0].setAttribute('src' , userImage[3])
            break;
            case 4:
                element.children[0].setAttribute('src' , userImage[4])
            break;
        }
})



let pageBTN = document.querySelectorAll('.pageBTN')
console.log(pageBTN);
pageBTN.forEach((element , index) => {
    switch(index) {
        case 0:
            element.addEventListener('click' , (e) => {
                e.preventDefault()
                console.log("can't Register or Log in");
            })
        break;
        case 1:
            element.addEventListener('click' , (e) => {
                e.preventDefault()
                console.log("can't visit site");
                
            })
        break;
        case 2:
            element.addEventListener('click' , (e) => {
                e.preventDefault()
                console.log("can't visit site");
            })
        break;
        case 3:
            element.addEventListener('click' , (e) => {
                e.preventDefault()
                console.log("can't jury");
            })
        break;

    }
})


let darkTheme = document.querySelector('.darkTheme')
darkTheme.addEventListener('click' , (e) => {
    e.preventDefault()
    document.body.classList.toggle('DarkTheme')
    darkTheme.classList.toggle('darThemeButtonStyle')

})
