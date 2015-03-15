var TrafficLightController = function() {
    
    this.lights = {red: new Light('red'),
                   yellow: new Light('yellow'),
                   green: new Light('green')
                  };
    
    
}

var TrafficLight = function() {
    
    TrafficLightController.call(this);
    
    
}

TrafficLight.prototype = {
    
    
    constructor: TrafficLightController,
    
    /* stops traffic by turning on only the red light */
    stop: function () {
        
     this.lights.green.turnOff();
     this.lights.red.turnOn();
    },
    
    /* allows traffic by turning only the green light on */
    pass: function () {
        
      this.lights.red.turnOff();
      this.lights.green.turnOn();
    }
    
    
      
}

var CarsTrafficLight = function () {
  
     TrafficLightController.call(this);
    
}


CarsTrafficLight.prototype = TrafficLight;

/* stops traffic by turning on only the red light,
   adds a yellow light */
CarsTrafficLight.prototype.pass = function () {
    
    clearTimeout(this.timer);
    
    this.lights.yellow.turnOn();
    
    this.timer = setTimeout(function () {
        this.lights.yellow.turnOff();
        this.lights.red.turnOff();
    }.bind(this), 2000);
};

/* allows cars to pass by turning only the green light on,
   adds a yellow light */
CarsTrafficLight.prototype.stop = function () {
    
    clearTimeout(this.timer);
    
    this.lights.green.turnOff();
    this.lights.yellow.turnOn();
    
    this.timer = setTimeout(function () {
        
      this.lights.yellow.turnOff();
      this.lights.red.turnOn();
    }.bind(this), 2000);
        
    };

