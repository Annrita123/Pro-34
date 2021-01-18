class Roof{
    constructor(x,y,width,height){
      var Roof_options={
        isStatic:true
      
      }
      
      
       this.body=Bodies.rectangle(x,y,width,height,Roof_options);
       this.width=width;
       this.height=height;
       World.add(world,this.body)
    }
    display(){
    var Roofpos=this.body.position;
      rectMode(CENTER) ;
      fill("grey");
      rect(Roofpos.x,Roofpos.y,this.width,this.height);
    
    
    }
    }
    