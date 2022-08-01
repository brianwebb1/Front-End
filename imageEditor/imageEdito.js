const fileInput = document.querySelector('.file-input'),
filterOption = document.querySelectorAll('.filter button'),
filterName = document.querySelector('.slider-info .name'),
filterValue = document.querySelector('.slider-info .value'),
filterSlider = document.querySelector('.slider input'),
chooseImage = document.querySelector('.choose-image'),
previewText = document.querySelector('.preview-img p'),
previewImg = document.querySelector('.preview-img img'),
saveImageBtn = document.querySelector('.save-image'),
resetFilter = document.querySelector('.reset-filter'),
rotateImage = document.querySelectorAll('.rotate button');

let brightness = 100 , blurF = 0, contrast = 100 ,grayscale = 0 , invert = 0 ,saturation = 100 , sepia = 0;
let rotate = 0, horizontalFLip = 1 , verticalFlip;

const loadImage = () => {
    let file = fileInput.files[0];
    if(!file)return;
        previewImg.src = URL.createObjectURL(file)
        previewImg.addEventListener('load' , ()  => {
            previewText.classList.add('preview_text_hide')
            previewImg.classList.add('preview_image_size')
        })
}

const imageFilter = () => {
    previewImg.style.transform = `rotate(${rotate}deg) scale(${verticalFlip} , ${horizontalFLip})`
    previewImg.style.filter = `brightness(${brightness}%) contrast(${contrast}%) grayscale(${grayscale}%) invert(${invert}%) saturate(${saturation}%) sepia(${sepia}%)`
}
filterOption.forEach(option => {
    option.addEventListener('click' , () => {
        document.querySelector('.filter .active').classList.remove('active')
        option.classList.add('active')
        filterName.textContent = option.textContent
        if(option.id == "Brightness"){
            filterSlider.max = '150'
            filterSlider.value = brightness;
            filterValue.textContent = `${brightness}%`
        }else if(option.id == "BlurFilter"){
            filterSlider.max = '100'
            filterSlider.value = blurF
            filterValue.textContent = `${blurF}%`
        }else if(option.id == 'Contrast'){
            filterSlider.max = '500'
            filterSlider.value = contrast
            filterValue.textContent = `${contrast}%`
        }else if(option.id == 'Grayscale'){
            filterSlider.max = '100'
            filterSlider.value = grayscale
            filterValue.textContent = `${grayscale}%`
        }else if(option.id == 'Invert'){
            filterSlider.max = '100'
            filterSlider.value = invert
            filterValue.textContent = `${invert}%`
        }else if(option.id == 'Saturate'){
            filterSlider.max = '250'
            filterSlider.value = saturation
            filterValue.textContent = `${saturation}%`
        }else {
            filterSlider.max = '100'
            filterSlider.value  = sepia
            filterValue.textContent = `${sepia}%`
        }
    })
})
const updateFilter = () => {
    filterValue.innerText = `${filterSlider.value}%`
    const selectedFilter = document.querySelector('.filter .active')
    if(selectedFilter.id == 'Brightness'){
        brightness = filterSlider.value
    }else if(selectedFilter.id == 'BlurFilter'){
        blurF = filterSlider.value
    }else if(selectedFilter.id == 'Contrast'){
        contrast = filterSlider.value
    }else if(selectedFilter.id == "Grayscale"){
        grayscale = filterSlider.value
    }else if(selectedFilter.id == 'Invert'){
        invert = filterSlider.value
    }else if(selectedFilter.id == 'Saturate'){
        saturation = filterSlider.value
    }else{
        sepia = filterSlider.value
    }
    imageFilter()
}

rotateImage.forEach(option => {
    option.addEventListener('click' , () => {
        if(option.id == 'left'){
            rotate -= 90
            console.log('left click');
        }else if(option.id == 'right'){
            console.log('right click');
            rotate += 90
        }else if(option.id === "vertical"){
            verticalFlip = verticalFlip === 1 ? - 1 : 1
        }else if(option.id === "horizontal"){
            horizontalFLip = horizontalFLip === 1 ? - 1 : 1
        }
        imageFilter()
    })
})

const resetBtn = () => {
    brightness = 100 , blurF = 0, contrast = 100 ,grayscale = 0 , invert = 0 ,saturation = 100 , sepia = 0;
    rotate = 0 , horizontalFLip = 1 , verticalFlip;
    imageFilter()
}


const saveImageToDevice = () => {
    let canvas = document.createElement('canvas')
    let ctx = canvas.getContext('2d')
    canvas.width = previewImg.naturalWidth
    canvas.height = previewImg.naturalHeight
    ctx.filter = `brightness(${brightness}%) contrast(${contrast}%) grayscale(${grayscale}%) invert(${invert}%) saturate(${saturation}%) sepia(${sepia}%)`
    ctx.translate(canvas.width / 2 , canvas.height / 2)

    ctx.drawImage(previewImg , -canvas.width / 2 , -canvas.height / 2 , canvas.width , canvas.height)
    const link = document.createElement('a')
    link.download = 'image.jpg'
    link.href = canvas.toDataURL()
    link.click()
}
fileInput.addEventListener('change' , loadImage)
filterSlider.addEventListener('input' , updateFilter)
saveImageBtn.addEventListener('click' , saveImageToDevice)
resetFilter.addEventListener('click' , resetBtn)
chooseImage.addEventListener('click' ,(e) => fileInput.click())




