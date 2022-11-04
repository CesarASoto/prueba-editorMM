const $ = (selector) => document.querySelector(selector);

//variables

let body = document.body;
let header = $('header');
let firstContainer =$('.firstContainer')
let imgSection = $('#imgSection');
let txtSection = $('#txtSection');
let contMeme = $('.container');

let topTxt = $('#topTxt');
let bottomText = $('.bottomText');
let imgContainer= $('.imgContainer');

//Button
let imgPanelBtn = $('#imgBtn');
let txtPanelBtn = $('#txtBtn');
let lightModeBtn = $('#lightMode');
let downloadBtn = $('.downloadBtn');
let resetFiltersBtn = $('#resetBtn');
let noOutlineBtn = $('#noOutlineBtn');
let outlineWhiteBtn = $('#outlineWhiteBtn');
let outlineDarkBtn = $('#outlineDarkBtn');

//modal

let closeModal = $('.closeModal');

let controlPanel = $('#controlPanel');

//Checkbox
let ckbTopTxt = $('#ckbTopTxt');
let ckbbottomTxt = $('#ckbbottomTxt');
let ckbTransparenBG = $('#transparenBG');

//Input
let inpUrl = $('#url');
let imgUrl = $('#imgUrl');
let inpImgColor = $('#imgColorBg');
let colorRefImg = $('#colorRef');
let inpBrightness = $('#brightness');
let inpOpacity = $('#opacity') ;
let inpContrast = $('#contrast');
let inpBlur = $('#blur');
let inpGrayScale = $('#grayscale');
let inpSepia = $('#sepia');
let inpHueRotate = $('#hue-rotate');
let inpSaturate = $('#saturate');
let inpInvert = $('#invert');
let inpFontSize = $('#fontSize');
let inpTextColor = $('#textColor');
let refTextColor = $('#refTextColor');
let inpBGFontFamily = $('#bGFontFamily');
let refBGFontFamily =$('#refBGFontFamily');
let inpSpaced = $('#spaced');

//select
let selectBlendMode = $('#selectBlendMode');
let selectFontFamily = $('#selectFontFamily');
let selectLineHeight = $('#lineHeightSelect');

//Text
let topTxtArea = $('#topTxtArea');
let bottomTextArea = $('#bottomTextArea');

let alingTxtLeftBtn = $('#aTxtLeft');
let alingTxtCenterBtn = $('#aTxtCenter');
let alingTxtRightBtn = $('#aTxtRight');

//functions

//Header Buttons

let changeIPanel = ()=>{
    
    body.classList.contains('closeIModal')
    if(body.classList.contains('closeIModal')){
        body.classList.remove('closeIModal')
        body.classList.remove('closeTModal')
        body.classList.remove('closeAside')
    } else{
        body.classList.remove('closeIModal')
        body.classList.remove('closeAside')
        
    }
};

closeModal.addEventListener('click', ()=>{
    body.classList.contains('closeAside')
    body.classList.toggle('closeAside')
  
})

let changeTPanel = ()=>{
    
    body.classList.contains('closeTModal')
    if(body.classList.contains('closeTModal')){
        body.classList.remove('closeAside')
        body.classList.add('closeTModal')
    } else{
        body.classList.add('closeIModal')
        body.classList.add('closeTModal')
        body.classList.remove('closeAside')
    }
};

let changeTheme = ()=>{
    body.classList.toggle('lightMode');
    body.classList.contains('lightMode');
    if(body.classList.contains('lightMode')){
        lightModeBtn.innerText = '🌙 Modo Oscuro' 
    } else {
        lightModeBtn.innerText = '☀️ Modo Claro' 
    }
};

//DownLoad Meme
const downloadMeme = ()=>{
    domtoimage.toBlob(contMeme).then(function (blob) {
        saveAs(blob, 'Mi_Meme.jpg');
    })
};

//Aside Image Panel

let changeImage = (event)=>{
    imgContainer.style.backgroundImage = `url(${event.target.value})`
};

let changeColorBgImg= () => {
    imgContainer.style.backgroundColor = inpImgColor.value;
    colorRefImg.innerText = inpImgColor.value;
};

let changeSelectBlend= ()=>{
    if(selectBlendMode.value == 'unset'){
        imgContainer.style.backgroundBlendMode = 'unset'
    }
    if(selectBlendMode.value == 'lighten'){
        imgContainer.style.backgroundBlendMode = 'lighten'
    }
    if(selectBlendMode.value == 'darken'){
        imgContainer.style.backgroundBlendMode = 'darken'
    }
    if(selectBlendMode.value == 'difference'){
        imgContainer.style.backgroundBlendMode = 'difference'
    }
    if(selectBlendMode.value == 'luminosity'){
        imgContainer.style.backgroundBlendMode = 'luminosity'
    }
    if(selectBlendMode.value == 'multiply'){
        imgContainer.style.backgroundBlendMode = 'multiply'
    }
};

//filters
let changeBrightness = ()=>{
    imgContainer.style.filter = `brightness(${inpBrightness.value})`
};
let changeOpacity = ()=>{
    imgContainer.style.filter = `opacity(${inpOpacity.value})`
};
let changeContrast = ()=>{
    imgContainer.style.filter = `contrast(${inpContrast.value}%)`
};
let changeBlur = ()=>{
    imgContainer.style.filter = `blur(${inpBlur.value}px)`
};
let changeGrayScale = ()=>{
    imgContainer.style.filter = `grayscale(${inpGrayScale.value}%)`
};
let changeSepia = ()=>{
    imgContainer.style.filter = `sepia(${inpSepia.value}%)`
};
let changeHueRotate = ()=>{
    imgContainer.style.filter = `hue-rotate(${inpHueRotate.value}deg)`
};
let changeFSaturate = ()=>{
    imgContainer.style.filter = `saturate(${inpSaturate.value}%)`
};
let changeFInvert = ()=>{
    imgContainer.style.filter = `invert(${inpInvert.value})`
};

//Reset Filters
function resetFilters() {
    inpBrightness.value = 1;
    imgContainer.style.filter = `brightness(1)`;
    inpOpacity.value = 1;
    imgContainer.style.filter = `opacity(1)`;
    inpContrast.value = 100;
    imgContainer.style.filter = `contrast(100%)`;
    inpBlur.value = 0;
    imgContainer.style.filter = `blur(0px)`;
    inpGrayScale.value = 0;
    imgContainer.style.filter = `grayscale(0%)`;
    inpSepia.value = 0;
    imgContainer.style.filter = `sepia(0%)`;
    inpHueRotate.value = 0;
    imgContainer.style.filter = `hue-rotate(0deg)`;
    inpSaturate.value = 0;
    imgContainer.style.filter = `saturate(0%)`;
    inpInvert.value = 0;
    imgContainer.style.filter = `invert(0)`;
};

//Aside Text Panel

let changeTText = ()=>{
    topTxt.innerText = topTxtArea.value
};
let changeBText = ()=>{
    bottomText.innerText = bottomTextArea.value
};
let hidenTText =()=>{
    body.classList.toggle('TextOculto')
    body.classList.contains('TextOculto')
};

let hidenBText =()=>{
    body.classList.toggle('bottomTextOculto')
    body.classList.contains('bottomTextOculto')
};

let selectFontFamilys = ()=> {
    if (selectFontFamily.value=='Arial') {
        topTxt.style.fontFamily = 'Arial',
        bottomText.style.fontFamily = 'Arial'
    } if(selectFontFamily.value=='fantasy'){
        topTxt.style.fontFamily = 'fantasy',
        bottomText.style.fontFamily = 'fantasy'
    } if(selectFontFamily.value == 'Fasthand'){
        topTxt.style.fontFamily = 'Fasthand',
        bottomText.style.fontFamily = 'Fasthand'
    } if(selectFontFamily.value == 'Island Moments'){
        topTxt.style.fontFamily = 'Island Moments',
        bottomText.style.fontFamily = 'Island Moments'
    } if(selectFontFamily.value == 'Helvetica'){
        topTxt.style.fontFamily = 'Helvetica',
        bottomText.style.fontFamily = 'Helvetica'
    } if(selectFontFamily.value == 'Nanum Pen Script'){
        topTxt.style.fontFamily = 'Nanum Pen Script',
        bottomText.style.fontFamily = 'Nanum Pen Script'
    }if(selectFontFamily.value == 'Verdana'){
        topTxt.style.fontFamily = 'Verdana',
        bottomText.style.fontFamily = 'Verdana'
    } if(selectFontFamily.value == 'Poor Story'){
        topTxt.style.fontFamily = 'Poor Story',
        bottomText.style.fontFamily = 'Poor Story'
    }
};

let fFamilySize = ()=>{
    topTxt.style.fontSize = `${inpFontSize.value}px`,
    bottomText.style.fontSize = `${inpFontSize.value}px`
};

let alingTextL = ()=>{
    body.classList.contains('alingTextLeft')
    body.classList.add('alingTextLeft')
    body.classList.remove('alingTextRight')
    body.classList.remove('alingTextCenter') 
};
let alingTextR = ()=>{
    body.classList.contains('alingTextRight')
    body.classList.add('alingTextRight')
    body.classList.remove('alingTextLeft')
    body.classList.remove('alingTextCenter')
};
let alingTextC = ()=>{
    body.classList.contains('alingTextCenter')
    body.classList.add('alingTextCenter')
    body.classList.remove('alingTextRight')
    body.classList.remove('alingTextLeft')
};

let changeColorFontFamily = () => {
    topTxt.style.color = inpTextColor.value;
    bottomText.style.color = inpTextColor.value;
    refTextColor.innerText = inpTextColor.value;
}

let changeBGFontFamily = () => {
    topTxt.style.backgroundColor = inpBGFontFamily.value;
    bottomText.style.backgroundColor = inpBGFontFamily.value;
    refBGFontFamily.innerText = inpBGFontFamily.value;
};

//Transparent BackGround
let tranparentBG = ()=>{
    body.classList.contains('trasparentTxtBG')
    body.classList.toggle('trasparentTxtBG')
}

//End Transparent BackGround

let outlineDark = ()=>{
    body.classList.contains('outlineDark')
    body.classList.add('outlineDark')
    body.classList.remove('outlineWhite')
    body.classList.remove('outlineNone')
};
let outlineWhite = () =>{
    body.classList.contains('outlineWhite')
    body.classList.add('outlineWhite')
    body.classList.remove('outlineDark')
    body.classList.remove('outlineNone')
};
let outlineNone = () =>{
    body.classList.contains('outlineNone')
    body.classList.add('outlineNone')
    body.classList.remove('outlineDark')
    body.classList.remove('outlineWhite')
};

let spaced = ()=>{
    topTxt.style.height = `${inpSpaced.value}%`,
    bottomText.style.height = `${inpSpaced.value}%`
};

let lineHeight = ()=>{
    console.log(selectLineHeight.value)
    if(selectLineHeight.value == '0.8'){
        topTxt.style.lineHeight = '0.8', 
        bottomText.style.lineHeight = '0.8'
    } if(selectLineHeight.value == '1'){
        topTxt.style.lineHeight = '1', 
        bottomText.style.lineHeight = '1'
    } if(selectLineHeight.value == '1.2'){
        topTxt.style.lineHeight = '1.2', 
        bottomText.style.lineHeight = '1.2'
    } if(selectLineHeight.value == '1.5'){
        topTxt.style.lineHeight = '1.5', 
        bottomText.style.lineHeight = '1.5'
    } if(selectLineHeight.value == '2'){
        topTxt.style.lineHeight = '2', 
        bottomText.style.lineHeight = '2'
    } if(selectLineHeight.value == '2.5'){
        topTxt.style.lineHeight = '2.5', 
        bottomText.style.lineHeight = '2.5'
    } 
};


//eventos

//Header Buttons event

imgPanelBtn.addEventListener('click', changeIPanel);
txtPanelBtn.addEventListener('click', changeTPanel);
lightModeBtn.addEventListener('click', changeTheme);

//DownLoad Meme
downloadBtn.addEventListener('click', downloadMeme);

//Aside Image Panel event

inpUrl.addEventListener('input', changeImage);

inpImgColor.addEventListener('input', changeColorBgImg);

//filters
inpBrightness.addEventListener('change', changeBrightness);
inpOpacity.addEventListener('change', changeOpacity);
inpContrast.addEventListener('change', changeContrast);
inpBlur.addEventListener('change', changeBlur);
inpGrayScale.addEventListener('change', changeGrayScale);
inpSepia.addEventListener('change', changeSepia);
inpHueRotate.addEventListener('change', changeHueRotate);
inpSaturate.addEventListener('change', changeFSaturate);
inpInvert.addEventListener('change', changeFInvert);

//select event

selectBlendMode.addEventListener('change', changeSelectBlend);

selectFontFamily.addEventListener('change', selectFontFamilys);

selectLineHeight.addEventListener('change', lineHeight);


//Reset Filters
resetFiltersBtn.addEventListener('click', resetFilters);


//Aside Text Panel event

topTxtArea.addEventListener('input', changeTText);
bottomTextArea.addEventListener('input', changeBText);

ckbTopTxt.addEventListener('click', hidenTText);
ckbbottomTxt.addEventListener('click', hidenBText);

inpFontSize.addEventListener('input', fFamilySize);

alingTxtLeftBtn.addEventListener('click', alingTextL);
alingTxtRightBtn.addEventListener('click', alingTextR);
alingTxtCenterBtn.addEventListener('click', alingTextC);

inpTextColor.addEventListener('input', changeColorFontFamily);

inpBGFontFamily.addEventListener('input', changeBGFontFamily);

//Transparent BackGround
ckbTransparenBG.addEventListener('click', tranparentBG);
//End Transparent BackGround

outlineDarkBtn.addEventListener('click', outlineDark);
outlineWhiteBtn.addEventListener('click', outlineWhite);
noOutlineBtn.addEventListener('click', outlineNone);

inpSpaced.addEventListener('input', spaced);

