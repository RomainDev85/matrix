const canvas = document.getElementById("canvas");
canvas.setAttribute('width', window.innerWidth - 10);
canvas.setAttribute('height', window.innerHeight - 10);
let ctx = canvas.getContext("2d");
const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9"];
const cgreen = "rgba(0, 255, 165, 1)";
const cblack = "rgba(0, 0, 0, 1)";
const cwhite = "rgba(255, 255, 255, 1)";
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
let fontSize = 15;
let lettersInScreen = [];

// retourne un nombre aléatoire compris en minimum (inclus) et maximum (inclus)
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}


function draw () {
    let number = 0;
    let numberChars = lettersInScreen.length; 

    // Efface le canvas
    ctx.clearRect(0,0,canvas.width, canvas.height);

    // fond d'écran
    ctx.fillStyle = cblack;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // Replace les lettres deja presente sur l'écran
    for( var l = 0; l < lettersInScreen.length; l++) {

        if(lettersInScreen.length < 1000){
            addColumn();
        }

        // Replace les lettres 2px plus bas
        lettersInScreen[l].y = lettersInScreen[l].y + 2;
        // Si les lettres est toujours visible a l'ecran
        if(lettersInScreen[l].y < canvas.height){
            ctx.font = `${fontSize}px serif;`
            ctx.fillStyle = cgreen;
            ctx.fillText(lettersInScreen[l].chars , lettersInScreen[l].x, lettersInScreen[l].y);      
        }

        // Si la lettre n'est plus visible a l'écran, on la supprime de l'array
        if ( lettersInScreen[l].y > canvas.height) { 
            lettersInScreen.splice(l, 1); 
            l--; 
        }
    };

    if(lettersInScreen.length > 0){
        window.requestAnimationFrame(draw);
    }
}

function addColumn () {
    let number = 0;
    // fond d'écran
    ctx.fillStyle = cblack;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    // diviser l'écran en colonne
    for( var i = 0; i < canvasWidth; i = i + fontSize + 3 ) {
        number++;
        if( getRandomIntInclusive(0, 3) === 1 ){
            // Si le chiffre est egale a 1 alors un nombre aléatoire de lettre seront mis en colonne
            for( var h = - getRandomIntInclusive(0, 500); h <  - getRandomIntInclusive(0, 100); h = h + fontSize ){
                lettersInScreen.push({
                    chars: letters[getRandomIntInclusive(0, 34)],
                    x: i,
                    y: h,
                    color: cgreen,
                    column: number
                });
                ctx.font = `${fontSize}px serif;`;
                ctx.fillStyle = cgreen;
                ctx.fillText(letters[getRandomIntInclusive(0, 34)] , i, h);
            }
        }
    }

    window.requestAnimationFrame(draw);
}

function init () {
    let number = 0;
    // fond d'écran
    ctx.fillStyle = cblack;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    // diviser l'écran en colonne
    for( var i = 0; i < canvasWidth; i = i + fontSize + 3 ) {
        number++;
        if( getRandomIntInclusive(0, 3) === 1 ){
            // Si le chiffre est egale a 1 alors un nombre aléatoire de lettre seront mis en colonne
            for( var h = - getRandomIntInclusive(0, 1000); h < getRandomIntInclusive(0, 2000); h = h + fontSize ){
                lettersInScreen.push({
                    chars: letters[getRandomIntInclusive(0, 34)],
                    x: i,
                    y: h,
                    color: cgreen,
                    column: number
                });
                ctx.font = `${fontSize}px serif;`;
                ctx.fillStyle = cgreen;
                ctx.fillText(letters[getRandomIntInclusive(0, 34)] , i, h);
            }
        }
    }

    window.requestAnimationFrame(draw);
}

init();



