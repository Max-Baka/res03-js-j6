function exercice6()
{

}

function exercice5()
{

}

function exercice4()
{

}

function exercice3()
{
let  canvasDom  =  document.querySelector('#ex3');
let  ctx  =  canvasDom.getContext('2d');
ctx.font = 'bold 68px Montserrat';
ctx.fillStyle ='#000000';
ctx.fillText('Geometry.io', 50, 200);
}

function exercice2()
{
let circle = {
    color: "blue",
    radius:100,         // L'objet du DOM Canvas
    x:220,
    y:140,
};


 let canvasDom = document.querySelector('#ex2');  // Le context utilisé avec Canvas qui donne accès aux librairies de manipulation 2D

let ctx = canvasDom.getContext('2d');   // On dit au contexte que la couleur de remplissage est gris

ctx.fillStyle = '#DDDDDD';  // On rempli le Canvas de gris en fond 

ctx.fillRect(0, 0, canvasDom.width, canvasDom.height);  // On dit au contexte que la couleur de remplissage est rouge 

ctx.fillStyle = circle.color;   // on commence le tracé 

ctx.beginPath();    // on trace un arc fermé (un cercle) 

ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);     // ctx.arc(x, y, rayon, angleDépart, angleFin) attention angle en radians


ctx.fill(); // on dessine sur le canvas en remplissant le tracé


/*// ctx.stroke();   // On aurait pu dessiner sur le Canvas seulement le contour ! */
}

function exercice1()
{
let  canvasDom  =  document.querySelector('#ex1');
let  ctx  =  canvasDom.getContext('2d');
ctx.fillStyle  =  "#FF0000";  // On trace le contour (stroke) d'un carré
ctx.fillRect(150, 150, 150, 150);   // ctx.strokeRect(x, y, largeur, hauteur);
}

function initCanvasSize()
{
    // setting the size of the canvas
    let canvasList = document.querySelectorAll("canvas");

    for(canvas of canvasList)
    {
        let section = canvas.parentNode;

        canvas.width = section.clientWidth;
        canvas.height = section.clientHeight;
    }
}

window.addEventListener("DOMContentLoaded", function(){
   initCanvasSize();
   exercice1();
   exercice2();
   exercice3();
   exercice4();
   exercice5();
   exercice6();
});