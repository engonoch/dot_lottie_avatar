$(document).ready(function () {
    console.log("Hello jquery from main.js");
});

let avatar =`{
    "skin_color_index" : "a",
    "hair" : "uno_cabello_5",
    "hair_color" : "#694830",
    "accessory" : "uno_accesorio_2",
    "beard" : "uno_barba_3",
    "facemask": "none"
}`;
var avatar_json = JSON.parse(avatar);

function getAvatar(){
    return avatar_json;
}
function setAvatar(avatar){
    avatar_json = avatar;
}
