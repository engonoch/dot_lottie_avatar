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
    if (avatar.facemask == 'mask') {
        renderFacemask(gLayers);
    }
}
function getGLayers(lottie) {
    let shadow = lottie.shadowRoot;
    let main = shadow.firstElementChild;
    let animation = main.firstElementChild;
    let svg = animation.firstElementChild;
    let svgLayers = svg.lastElementChild;
    let gLayers = svgLayers.childNodes;
    return gLayers;
}
// Render functions
function renderHead(gLayers){
    let avatar = getAvatar();
    let layers = getHeadLayers();
    layers.forEach(function(item){
        $(gLayers[item]).show();
    });
    setSkinColor(gLayers, avatar.skin_color_index);
}
function renderFace(gLayers){
    let layers = getFaceLayers();
    layers.forEach(function(item){
        $(gLayers[item]).show();
    });
}

function renderHair(gLayers,hairStyle){
    let avatar = getAvatar();
    let layers = getHairLayers(hairStyle);
    layers.forEach(function(item){
        $(gLayers[item]).show();
    });
    setHairColor(gLayers, avatar.hair_color);
}
function renderShirt(gLayers){
    $(gLayers[17]).show();
}

function renderFacemask(gLayers){
    $(gLayers[67]).show();
    $(gLayers[25]).show();
    $(gLayers[26]).show();
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
    let avatar = getAvatar();
    let allHairLayers = getAllHairLayers();
    allHairLayers.forEach(function(item){
        $(gLayers[item].lastElementChild.firstElementChild).css('fill',color);
        $(gLayers[item].firstElementChild.firstElementChild).css('fill',color);
    });
    // $(gLayers[20].lastElementChild.firstElementChild).css('stroke',color);
    // $(gLayers[21].lastElementChild.firstElementChild).css('stroke',color);
    avatar.hair_color = color;
    setAvatar(avatar);
}
function setSkinColor(gLayers, index){
    avatar = getAvatar();
    let faceLayers = getHeadLayers();
    let color = getSkinColors(index);
    //13 y 14 Orejas --- 15Cuello ---16 Sombra--- 18 Cabeza  ---- 19 Nariz --- 24 Boca
    $(gLayers[faceLayers[0]].lastElementChild.firstElementChild).css('fill', color.ear);
    $(gLayers[faceLayers[1]].lastElementChild.firstElementChild).css('fill', color.ear);
    $(gLayers[faceLayers[2]].lastElementChild.firstElementChild).css('fill', color.face);
    $(gLayers[faceLayers[3]].lastElementChild.firstElementChild).css('fill', color.shadow);
    $(gLayers[faceLayers[4]].lastElementChild.firstElementChild).css('fill', color.face);
    $(gLayers[faceLayers[5]].lastElementChild.firstElementChild).css('stroke', color.line);
    $(gLayers[faceLayers[6]].lastElementChild.firstElementChild).css('stroke', color.line);

    avatar.skin_color_index = index;
    setAvatar(avatar);
}

//Hide/Show shirt

function manShirt(gLayers, action){
    if(action == 'hide'){
        $(gLayers[17]).hide();
    }
    else{
        $(gLayers[17]).show();
    }

}

// Index functions(getLayers)
function getHairLayers(hairStyle){
    switch (hairStyle) {
        case "uno_cabello_1":
            return [0,27,28];
        case "uno_cabello_2":
            return [1,29,30,31];
        case "uno_cabello_3":
            return [2,32,33];
        case "uno_cabello_4":
            return [3,34,35];
        case "uno_cabello_5":
            return [4,36,37];
        case "uno_cabello_6":
            return [5,38,39];
        case "uno_cabello_7":
            return [6,40,41];
        case "uno_cabello_8":
            return [7,42,43];
        case "uno_cabello_9":
            return [8,44,45,46];
        case "uno_cabello_10":
            return [9,47,48];
        case "uno_cabello_11":
            return [10,49,50,51];
        case "uno_cabello_12":
            return [12,54,55];
        case "uno_cabello_13":
            return [11,52,53];
        default:
            return [56,57];
    }
}
function getAllHairLayers() {
  return [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 27, 28, 29, 30, 31, 32, 33, 34, 35,
    36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
    55, 56, 57, 58, 59, 60, 61, 62, 63, 64
  ];
}

function getFaceLayers(){
    return [20,21,22,23,24];
}

function getHeadLayers(){
    return [13,14,15,16,18,19,24];
}

function getAccesoryLayers(accessory){
    switch (accessory) {
        case 'uno_accesorio_1':
            return 65;
        case 'uno_accesorio_2':
            return 66;
        default:
            return 0
    }
}
function getBeardLayers(beard){
    switch (beard) {
        case 'uno_barba_1':
            return [63,64];
        case 'uno_barba_2':
            return [61,62];
        case 'uno_barba_3':
            return [59,60];
        case 'uno_barba_4':
            return [58];
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
                "ear" : "#f0b49c",
                "shadow" : "#e5b8a5",
                "line" : "#e8a489"
            }`;
            break; 
        case 'd':
            colors = `{
                "face" : "#cc9e7c",
                "ear" : "#cc8f62",
                "shadow" : "#c29676",
                "line" : "#bd8359"
            }`;
            break; 
        case 'e':
            colors = `{
                "face" : "#e0ac96",
                "ear" : "#e09e82",
                "shadow" : "#d4a28e",
                "line" : "#d4957b"
            }`;
            break; 
        case 'f':
            colors = `{
                "face" : "#a88266",
                "ear" : "#a8754f",
                "shadow" : "#a17c62",
                "line" : "#996c4b"
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
