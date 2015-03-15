
function trafficLightsHuman(nu, redLightHuman, greenLightHuman) {
 
    var args = trafficLightsHuman.arguments, cnt = args[0];
    if(trafficLightsHuman.lst) {
        trafficLightsHuman.lst.style.backgroundColor = 'black';
    }
    if (args[cnt]) {
    
        args[cnt].style.backgroundColor = 
            cnt==1?'red':'green';
        trafficLightsHuman.lst = args[cnt];
        cnt++;
        trafficLightsHuman.to = setTimeout(function() {
            trafficLightsHuman(cnt, redLightHuman, greenLightHuman); }, 2000);
    }
    
    
   
}

state = true;
