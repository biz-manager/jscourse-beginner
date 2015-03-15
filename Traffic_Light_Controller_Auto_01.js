function trafficLightsAuto(nu,redLight,amberLight,greenLight) {
 var args=trafficLightsAuto.arguments,cnt=args[0];
       
    if (trafficLightsAuto.lst){
  trafficLightsAuto.lst.style.backgroundColor = 'black';
 }
 if (args[cnt]){
  args[cnt].style.backgroundColor = cnt==1?'red':cnt==2?'orange':'green';
  trafficLightsAuto.lst=args[cnt];
  cnt++;
  trafficLightsAuto.to=setTimeout(function(){  trafficLightsAuto(cnt,redLight,amberLight,greenLight); },2000);
 }
 
}




