function ButtonAction(PressButton) {
	let ActionButton;
  if(confirm("Tocmai ai apasat acest buton?")) {
  	ActionButton= "Felicitari!";
  } else {
  	ActionButton= "Ai pierdut!";
  }
  document.getElementById("result").innerHTML= ActionButton;
} 
