var base = 4;
// var l = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "@", "#", "$", "%", "^", "&", "(", ")", "_", "{", "}", "[", "]", "\\", "|", ";", ":", "'", '"', ".", ",", ">", "<", "?", "+", "/", "*", "-", "~", "`"];
// var l2 = ["0", "1", "2", "3", "4", "5",  "6", "7", "8", '9']
codes = {1001 : 'A',1002 : 'B',1003 : 'C',1010 : 'D',1011 : 'E',1012 : 'F',1013 : 'G',1020 : 'H',1021 : 'I',1022 : 'J',1023 : 'K',1030 : 'L',1031 : 'M',1032 : 'N',1033 : 'O',1100 : 'P',1101 : 'Q',1102 : 'R',1103 : 'S',1110 : 'T',1111 : 'U',1112 : 'V',1113 : 'W',1120 : 'X',1121 : 'Y',1122 : 'Z',1201 : 'a',1202 : 'b',1203 : 'c',1210 : 'd',1211 : 'e',1212 : 'f',1213 : 'g',1220 : 'h',1221 : 'i',1222 : 'j',1223 : 'k',1230 : 'l',1231 : 'm',1232 : 'n',1233 : 'o',1300 : 'p',1301 : 'q',1302 : 'r',1303 : 's',1310 : 't',1311 : 'u',1312 : 'v',1313 : 'w',1320 : 'x',1321 : 'y',1322 : 'z',201 : '!',1000 : '@',203 : '#',210 : '$',211 : '%',1132 : '^',212 : '&',220 : '(',221 : ')',1133 : '_',1323 : '{',1331 : '}',1123 : '[',1131 : ']',1130 : '\\',1330 : '|',323 : ';',322 : ':',213 : "'",202 : '"',232 : '.',230 : ',',332 : '>',330 : '<',333 : '?',223 : '+',233 : '/',222 : '*',231 : '-',1332 : '~',1200 : '`', 200 : " ", 300 : '0',301 : '1',302 : '2',303 : '3',310 : '4',311 : '5',312 : '6',313 : '7',320 : '8',321 : '9'};

function reverseString(str){
    if (str === "")
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0);
}

function decimalToQuad(dec){
    let str = "";
    while (dec >= 1){
        str += (dec % base);
        dec = Math.floor(dec / base);
    };
    return reverseString(str);
};

function quadToText(q){
    q = q.trim();
    let str = "";
    var letters = q.split(" ");
    letters.forEach((i) => {
        str += codes[i];
    });
    return str;
};

var tabButtons = document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels = document.querySelectorAll(".tabContainer .tabPanel");

function showPanel(panelIndex, colorCode){
    tabButtons.forEach((node) => {node.style.backgroundColor = ""; node.style.color = ""});
    tabButtons[panelIndex].style.backgroundColor = colorCode;
    tabButtons[panelIndex].style.color = "white"; 
    tabPanels.forEach((node) => {node.style.display = "none";});
    tabPanels[panelIndex].style.display = "block";
    tabPanels[panelIndex].style.backgroundColor = colorCode;
};

showPanel(0, '#2196f3');

var quad1 = document.getElementById('quadnary1');
var text1 = document.getElementById('text1');

var reset1 = document.getElementById('reset1');
reset1.addEventListener('click', () => {
    quad1.value = "";
    text1.value = "";
});

var copy1 = document.getElementById("copy1");
copy1.addEventListener('click', () => {
    text1.select();
    text1.setSelectionRange(0, 99999);
    document.execCommand("copy");
});

var quad2 = document.getElementById('quadnary2');
var text2 = document.getElementById('text2');

var reset2 = document.getElementById('reset2');
reset2.addEventListener('click', () => {
    quad2.value = "";
    text2.value = "";
});

var copy2 = document.getElementById("copy2");
copy2.addEventListener('click', () => {
    quad2.select();
    quad2.setSelectionRange(0, 99999);
    document.execCommand("copy");
});

var get1 = document.getElementById('get1');
get1.addEventListener('click', () => {
    let value = quad1.value;
    let s = quadToText(value);
    // for(i = 0; i < value.length; i++){
        
    // }
    text1.value = s;
});

var get2 = document.getElementById('get2');
get2.addEventListener('click', () => {
    let s = "";
    let value = text2.value;
    for(i = 0; i < value.length; i++){
        let c = value.charCodeAt(i);
        let str = decimalToQuad(c);
        s += str;
        s += " ";
    }
    quad2.value = s;
});

// let s = "";
// l2.forEach((i) => {
//     // s += decimalToQuad(i.charCodeAt(0)) + ":" + i + ",";
//     s += `${decimalToQuad(i.charCodeAt(0))} : '${i}',`;
// });
// console.log(s);

// console.log(decimalToQuad(" ".charCodeAt(0)));