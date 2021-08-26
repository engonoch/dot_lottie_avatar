function renderLottie(lottie,avatar){
    let shadow = lottie.shadowRoot;
    let main = shadow.firstElementChild;
    let animation = main.firstElementChild;
    let svg = animation.firstElementChild;
    let svgLayers = svg.lastElementChild;
    let gLayers = svgLayers.childNodes;
    for (let i = 0; i < gLayers.length; i++) {
        $(gLayers[i]).hide();
    }
    renderHead(gLayers);
    renderFace(gLayers);
    renderHair(gLayers, avatar.hair);
    renderShirt(gLayers);
    renderAccesory(gLayers, avatar.accessory);
    renderBeard(gLayers, avatar.beard);
    if (avatar.facemask == 'yes') {
        renderFacemask(gLayers);
    }
    // lottie.snapshot(true);
}
// Render functions
function renderHead(gLayers){
    let layers = getHeadLayers();
    layers.forEach(function(item){
        $(gLayers[item]).show();
    });
}
function renderFace(gLayers){
    let layers = getFaceLayers();
    layers.forEach(function(item){
        $(gLayers[item]).show();
    });
}

function renderHair(gLayers,hairStyle){
    let layers = getHairLayers(hairStyle);
    layers.forEach(function(item){
        $(gLayers[item]).show();
    });
}
function renderShirt(gLayers){
    $(gLayers[17]).show();
}

function renderFacemask(gLayers){
    $(gLayers[65]).show();
    $(gLayers[23]).show();
    $(gLayers[24]).show();
}

function renderAccesory(gLayers, accesory) {
    let layer = getAccesoryLayers(accesory);
    $(gLayers[layer]).show();
}

function renderBeard(gLayers,beardStyle){
    let layers = getBeardLayers(beardStyle);
    layers.forEach(function(item){
        $(gLayers[item]).show();
    });
}
// Setter part functions
function setHairStyle(gLayers, hairStyle){
    let avatar = getAvatar();
    let currentHair = getHairLayers(avatar.hair);
    currentHair.forEach(function(item){
        $(gLayers[item]).hide();
    });
    let newHair = getHairLayers(hairStyle);
    newHair.forEach(function(item){
        $(gLayers[item]).show();
    });
    avatar.hair = hairStyle;
    setAvatar(avatar);
}

function setAccessory(gLayers, accessory){
    let avatar = getAvatar();
    let currentAccessory = getAccesoryLayers(avatar.accessory);
    $(gLayers[currentAccessory]).hide();
    let newAccessory = getAccesoryLayers(accessory);
    $(gLayers[newAccessory]).show();
    avatar.accessory = accessory;
    setAvatar(avatar);
}

function setBeard(gLayers, beardStyle){
    let avatar = getAvatar();
    let currentBeard = getBeardLayers(avatar.beard);
    currentBeard.forEach(function(item){
        $(gLayers[item]).hide();
    });
    let newBeard = getBeardLayers(beardStyle);
    newBeard.forEach(function(item){
        $(gLayers[item]).show();
    });
    avatar.beard = beardStyle;
    setAvatar(avatar);
}

// Setter color functions

function setHairColor(gLayers, color){
    avatar = getAvatar();
    let allHairLayers = getAllHairLayers();
    allHairLayers.forEach(function(item){
        $(gLayers[item].lastElementChild.firstElementChild).css('fill',color);
    });
    avatar.hair_color = color;
    setAvatar(avatar);
}
function setSkinColor(gLayers, index){
    avatar = getAvatar();
    let faceLayers = getHeadLayers();
    let color = getSkinColors(index);
    //13 y 14 Orejas --- 15Cuello ---16 Sombra--- 18 Cabeza  ---- 19 Nariz
    $(gLayers[faceLayers[0]].lastElementChild.firstElementChild).css('fill', color.ear);
    $(gLayers[faceLayers[1]].lastElementChild.firstElementChild).css('fill', color.ear);
    $(gLayers[faceLayers[2]].lastElementChild.firstElementChild).css('fill', color.face);
    $(gLayers[faceLayers[3]].lastElementChild.firstElementChild).css('fill', color.shadow);
    $(gLayers[faceLayers[4]].lastElementChild.firstElementChild).css('fill', color.face);
    $(gLayers[faceLayers[5]].lastElementChild.firstElementChild).css('stroke', color.line);

    avatar.skin_color_index = index;
    setAvatar(avatar);
}

// Index functions(getLayers)
function getHairLayers(hairStyle){
    switch (hairStyle) {
        case "uno_cabello_1":
            return [0,25,26];
        case "uno_cabello_2":
            return [1,27,28,29];
        case "uno_cabello_3":
            return [2,30,31];
        case "uno_cabello_4":
            return [3,32,33];
        case "uno_cabello_5":
            return [4,34,35];
        case "uno_cabello_6":
            return [5,36,37];
        case "uno_cabello_7":
            return [6,38,39];
        case "uno_cabello_8":
            return [7,40,41];
        case "uno_cabello_9":
            return [8,42,43,44];
        case "uno_cabello_10":
            return [9,45,46];
        case "uno_cabello_11":
            return [10,47,48,49];
        case "uno_cabello_12":
            return [12,52,53];
        case "uno_cabello_13":
            return [11,50,51];
        default:
            return [54,55];
    }
}
function getAllHairLayers() {
  return [
    0, 25, 26, 1, 27, 28, 29, 2, 39, 31, 3, 32, 33, 4, 34, 35, 5, 36, 37, 6, 38,
    39, 7, 40, 41, 8, 42, 43, 44, 9, 45, 46, 10, 47, 48, 49, 12, 52, 53, 11, 50,
    51, 54, 55, 61, 62, 59, 60, 57, 58, 56
  ];
}

function getFaceLayers(){
    return [20,21,22,66,67];
}

function getHeadLayers(){
    return [13,14,15,16,18,19];
}

function getAccesoryLayers(accessory){
    switch (accessory) {
        case 'uno_accesorio_1':
            return 63;
        case 'uno_accesorio_2':
            return 64;
        default:
            return 0
    }
}
function getBeardLayers(beard){
    switch (beard) {
        case 'uno_barba_1':
            return [61,62];
        case 'uno_barba_2':
            return [59,60];
        case 'uno_barba_3':
            return [57,58];
        case 'uno_barba_4':
            return [56];
        default:
            return [0];
    }
}
function getSkinColors(index){
    let colors = '';
    switch (index) {
        case 'a':
            colors = `{
                "face" : "#f0c0c6",
                "ear" : "#ffb7b9",
                "shadow" : "#eaacb8",
                "line" : "#ed9295"
            }`;
            break; 
        case 'b':
            colors = `{
                "face" : "#f2ceb4",
                "ear" : "#ffcaa3",
                "shadow" : "#e5c3aa",
                "line" : "#ffc396"
            }`;
            break; 
        case 'c':
            colors = `{
                "face" : "#f0c0ad",
                "ear" : "#f7cb97",
                "shadow" : "#dec09e",
                "line" : "#f7c58a"
            }`;
            break; 
        case 'd':
            colors = `{
                "face" : "#cc9e7c",
                "ear" : "#d99c6f",
                "shadow" : "#bf9475",
                "line" : "#d99664"
            }`;
            break; 
        case 'e':
            colors = `{
                "face" : "#e0ac96",
                "ear" : "#eda587",
                "shadow" : "#d4a28e",
                "line" : "#ed9d7b"
            }`;
            break; 
        case 'f':
            colors = `{
                "face" : "#a88266",
                "ear" : "#b5825c",
                "shadow" : "#9c795f",
                "line" : "#b57d53"
            }`;
            break;
        default:
            colors = `{
                "face" : "#f0c0c6",
                "ear" : "#ffb7b9",
                "shadow" : "#eaacb8",
                "line" : "#ed9295"
            }`;
            break;
    }
    return JSON.parse(colors);
}
