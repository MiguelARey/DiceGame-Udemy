let randomNumber1 = Math.floor((Math.random()*6)+1);
let randomNumber2 = Math.floor((Math.random()*6)+1);
console.log(randomNumber1);
console.log(randomNumber2);

document.querySelector(".img1").setAttribute("src",`/img/dice${randomNumber1}.png`);
document.querySelector(".img2").setAttribute("src",`/img/dice${randomNumber2}.png`);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "👆 Player 1 WINS!"
}else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "🤘 Player 2 WINS!"
}else{
    document.querySelector("h1").innerHTML = "👌DRAW?!"
}