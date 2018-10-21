 const canvas2 = document.getElementById("canvas2");
const context2 = canvas2.getContext("2d");
canvas2.height = 770;
canvas2.width = 1000;



const random = function(cwh,owh){
	let position =  Math.floor(Math.random()*cwh);
	if (position>=cwh-owh) {
		position = position - owh;
		return position;
	} 
	else{
		return position;
	}
}

const leftKey = 37;
const upKey = 38;
const rightKey = 39;
const downKey = 40;

let lkey = false;
let ukey = false;
let rkey = false;
let dkey = false;

let defaultObjWidthHeight = 50;

document.addEventListener('keydown', function(event) {
    if(event.keyCode === upKey) {
        ukey = true;
    }
    if(event.keyCode === downKey) {
        dkey = true;
    }
    if(event.keyCode === rightKey) {
        rkey = true;
    }
    if(event.keyCode === leftKey) {
        lkey = true;
    }
    }, false);

document.addEventListener('keyup', function(event) {
    if(event.keyCode === upKey) {
        ukey = false;
    }
    if(event.keyCode === downKey) {
        dkey = false;
    }
    if(event.keyCode === rightKey) {
        rkey = false;
    }
    if(event.keyCode === leftKey) {
        lkey = false;
    }
    }, false);

        
window.addEventListener("keydown", function(e) {
    if([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);        

const gameData = {
	hero:{
        width: defaultObjWidthHeight,
        height: defaultObjWidthHeight,
        x: random(canvas2.width,defaultObjWidthHeight),
        y: random(canvas2.height, defaultObjWidthHeight),
        xDelta: 5, 
        yDelta: 5,
        color: randomcolor[randomindex(randomcolor.length)], 
        draw: function() {
        	context2.fillStyle = this.color;
			context2.fillRect(this.x, this.y, this.width, this.height);
        },
        update: function() {
				if(ukey && this.y>=5) {
        			this.y -= this.yDelta;
  				}
  				if(dkey && this.y<=canvas2.height-this.height-5) {
        			this.y += this.yDelta;
  				}
  				if(rkey && this.x<=canvas2.width-this.width-5) {
        			this.x += this.xDelta;
  				}
  				if(lkey && this.x>=5) {
        			this.x -= this.xDelta;
  				}
        }		

	},
	 badGuys: [], 
};


const createBadGuys = function(count, canvasWidth, canvasHeight) {
    for (var i = 0; i < count; i++) {
        let randomx = random(canvasWidth,defaultObjWidthHeight);
        let randomy = random(canvasWidth,defaultObjWidthHeight);
	    let newBadGuy = {   
            x: randomx,
            y: randomy,
            width: defaultObjWidthHeight,
            height: defaultObjWidthHeight,
            speed: 5,
            xdelta: 5, 
            ydelta: 5,
            helpx: randomx,
            helpy: randomy,
            color: randomcolor[randomindex(randomcolor.length)], 
            draw: function() {
        	    context2.fillStyle = this.color;
			    context2.fillRect(this.x, this.y, this.width, this.height);
            },
            update: function() {
 			    if (this.x>=this.helpx && this.x<=canvas2.width-this.width-this.helpx && this.y===this.helpy) {
 				   this.x += this.xdelta
 			    } 
 			    if (this.x>=this.helpx && this.x<=canvas2.width-this.width-this.helpx && this.y<=canvas2.height-this.height-this.helpy) {
                    this.x -= this.xdelta
                } 
                if (this.x>=canvas2.width-this.width-this.helpx && this.y >= this.helpy && this.y<=canvas2.height-this.height-this.helpy) {
                    this.y += this.ydelta
                }
                if (this.x<=this.helpx && this.y >= this.helpy && this.y<=canvas2.height-this.height-this.helpy) {
                    this.y -= this.ydelta
                } 
            }
        }
        gameData.badGuys[gameData.badGuys.length] = newBadGuy;
    }
};

createBadGuys(4, canvas2.width, canvas2.height);
console.log(gameData.badGuys);

const drawing = function() {
	context2.fillStyle = 'grey';
	context2.fillRect(0, 0, canvas2.width, canvas2.height);

	gameData.hero.draw();


for(let i = 0; i < gameData.badGuys.length; i++) {
const obj = gameData.badGuys[i];
obj.draw();
}
};

const updating = function() {

	gameData.hero.update();

for(let i = 0; i < gameData.badGuys.length; i++) {
const obj = gameData.badGuys[i];
obj.update();
}
};



const loop = function () {
	drawing();
	draw();
	updating();
 	update();
	requestAnimationFrame(loop);
}
loop();