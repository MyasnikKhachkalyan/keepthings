const canvas3 = document.getElementById("canvas3");
const context3 = canvas3.getContext("2d");
canvas3.height = 770;
canvas3.width = 1000;

let defaultObjWidthHeight = 50;

const boxes = [];

const boxcreator = function (count, canvasWidth, canvasHeight) {
	for (var i = 0; i < count; i++) {
		let randomx = random(canvasWidth,defaultObjWidthHeight);
        let randomy = random(canvasHeight,defaultObjWidthHeight);
	    let newBox = {   
            x: randomx,
            y: randomy,
            width: defaultObjWidthHeight,
            height: defaultObjWidthHeight,
            xdelta: 8, 
            ydelta: 8,
            color: randomcolor[randomindex(randomcolor.length)],
            draw: function() {
                context3.fillStyle = this.color;
				context3.fillRect(this.x, this.y, this.width, this.height);
            },
            update: function() {
                this.x += this.xdelta;
                this.y += this.ydelta;
 			    if (this.x>=canvas2.width-this.width || this.x<=0) {
 				   this.xdelta *= -1;
 				   this.color =  randomcolor[randomindex(randomcolor.length)];
 			    } 
                if (this.y>=canvas2.height-this.height || this.y<=0) {
                    this.ydelta *= -1;
                    this.color =  randomcolor[randomindex(randomcolor.length)];
                }
            }
        }
        boxes[boxes.length] = newBox;
    }
};
boxcreator(6, canvas3.width, canvas3.height);


const animloop = function () {
	context3.fillStyle = 'grey';
	context3.fillRect(0,0,canvas3.width,canvas3.height);
	for (var i = 0; i < boxes.length; i++) {
		boxes[i].draw();
		boxes[i].update();
	}
	requestAnimationFrame(animloop);
}
animloop();
