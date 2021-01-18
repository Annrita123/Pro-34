
        class Bob{
            constructor(x,y,color){
                var options = {
                  restitution: 1,
                  friction: 0.3,
                  density:1
                
                }
                this.r=50;
                this.color=color;
                this.body=Bodies.circle(x,y,50,options)
                World.add(world,this.body)
            }
            display(){
                let pos = this.body.position;
                let angle = this.body.angle;
                push()
                translate(pos.x,pos.y)
                rotate(angle)
                noStroke()
                fill(this.color)
                ellipseMode(RADIUS)
                ellipse(0,0,this.r,this.r)
                pop()
            }
          }