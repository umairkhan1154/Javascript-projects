const tubelight = () =>{

    let btext = document.getElementById('bulbdata');
    for(x=1; x<6; x++){
     let bid =document.getElementById('lightid'.concat(x));
     console.log(bid.src);
  
     if(bid.src.match('lighton')){
      bid.src="lightof.jpg";
      btext.innerHTML = "Light OFF";
      btext.style.color = "black";
     }else{
      bid.src="lighton.jpg";
      btext.innerHTML = "Light ON";
      btext.style.color = "red";
     }
    }
   }