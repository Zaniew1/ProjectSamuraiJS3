
let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeColor = (e) => {
  console.log(e.keyCode, e.which);

  if(e.keyCode==39){
    window.body.style.backgroundColor = `rgb(${red--},${green--},${blue--})`
  }
  else if (e.keyCode==38){
    window.body.style.backgroundColor = `rgb(${red++},${green++},${blue++})`
  }


}

window.addEventListener('keydown', changeColor)