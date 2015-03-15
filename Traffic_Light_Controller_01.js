function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}



var state = Boolean;
state = false;

function trafficState(param)
{
     if(param == true)
         return true;
      else 
         return false;
        
}



function trafficLightsController() {
	if (!document.getElementById) return false;
	    
        if(state == true)
        {
        var redLight  = document.getElementById("red-light");
        var greenLight  = document.getElementById("green-light");
       	var amberLight = document.getElementById("amber-light");
            
        var greenControlOn = document.getElementById("green");
	    var amberControlOn = document.getElementById("amber");
	    var redControlOn = document.getElementById("red");

	    greenLight.style.height = "20px";
	    greenLight.style.width = "20px";
	    greenLight.style.margin = "1px 0";
	    greenLight.style.backgroundColor = "black";    
            
        amberLight.style.height = "20px";
	    amberLight.style.width = "20px";
	    amberLight.style.margin = "1px 0";
	    amberLight.style.backgroundColor = "black";  
            
        redLight.style.height = "20px";
	    redLight.style.width = "20px";
	    redLight.style.margin = "1px 0";
	    redLight.style.backgroundColor = "black";
            
        greenControlOn.onclick = function() {
        
        clearTimeout(trafficLightsAuto.to);        
		greenLight.style.backgroundColor = "green";
		amberLight.style.backgroundColor = "black";
       	redLight.style.backgroundColor = "black";
	   }

	amberControlOn.onclick = function() {
       
        clearTimeout(trafficLightsAuto.to);        
		greenLight.style.backgroundColor = "black";		
        amberLight.style.backgroundColor = "orange";        
		redLight.style.backgroundColor = "black";
	}

	redControlOn.onclick = function() {
        
        clearTimeout(trafficLightsAuto.to);        
		greenLight.style.backgroundColor = "black";
        amberLight.style.backgroundColor = "black";
        redLight.style.backgroundColor = "red";
	}
            
        trafficLightsAuto(1, redLight, amberLight, greenLight);
        state=false;
 }
       else
       {
        
        var greenLight  = document.getElementById("green-light-human");
       	var redLight  = document.getElementById("red-light-human");
           
        
    
	var greenControlOn = document.getElementById("green-human");
	var redControlOn = document.getElementById("red-human");

	greenLight.style.height = "20px";
	greenLight.style.width = "20px";
	greenLight.style.margin = "1px 0";
	greenLight.style.backgroundColor = "black";

	
	redLight.style.height = "20px";
	redLight.style.width = "20px";
	redLight.style.margin = "1px 0";
	redLight.style.backgroundColor = "black";
    
    greenControlOn.onclick = function() {
       clearTimeout(trafficLightsHuman.to);    
        greenLight.style.backgroundColor = "green";
		redLight.style.backgroundColor = "black";
	}

	redControlOn.onclick = function() {
        
        clearTimeout(trafficLightsHuman.to);    
        greenLight.style.backgroundColor = "black";
		redLight.style.backgroundColor = "red";
	}   
         
    trafficLightsHuman(1, redLight, greenLight); 
    
       
    }
   
}
