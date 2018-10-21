const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
canvas.height = 770;
canvas.width = 1000;


const randomcolor = ['#4465ea', '#4286f4', '#ff00ae', '#41d6f4', '#c641ff', '#fff659', '#ff5995', '#42ff4e', '#ff5b41'];

const randomindex = function(i){
	return Math.floor(Math.random()*i)
}


const objects = [

	{ 
		x: 150,
		y: 100,
		width: 50,
		height:15,	
		xdelta: 10,
		ydelta: 0,
		color: randomcolor[randomindex(randomcolor.length)],
		static: 150,
 		draw: function() {
 			context.fillStyle = this.color;
			context.fillRect(this.x, this.y, this.width, this.height);
 		},
 		update: function() {
 			this.x += this.xdelta;
 			if (this.x>=this.static+10*5 || this.x<=this.static) {
 				this.xdelta *= -1;
 			} 
 		}
	},
	{ 
		x: 188,
		y: 125,
		width: 15,
		height:50,
		xdelta: 0,
		ydelta: 16,
		static: 125,
		color: randomcolor[randomindex(randomcolor.length)],
 		draw: function() {
 			context.fillStyle = this.color;
			context.fillRect(this.x, this.y, this.width, this.height);
 		},
 		update: function() {
 			this.y += this.ydelta;
 			if (this.y>=this.static+10*10-this.height || this.y<=this.static) {
 				this.ydelta *= -1;
 			} 
 		}
	},
	{ 
		x: 150,
		y: 225,
		width: 50,
		height:15,
		xdelta: 10,
		ydelta: 0,
		color: randomcolor[randomindex(randomcolor.length)],
		static: 150,
 		draw: function() {
 			context.fillStyle = this.color;
			context.fillRect(this.x, this.y, this.width, this.height);
 		},
 		update: function() {
 			this.x += this.xdelta;
 			if (this.x>=this.static+10*5 || this.x<=this.static) {
 				this.xdelta *= -1;
 			} 
 		}
	},
	{ 
		x: 270,
		y: 110,
		width: 15,
		height:50,
		xdelta: 0,
		ydelta: 16,
		static:110,
		color: randomcolor[randomindex(randomcolor.length)],
 		draw: function() {
 			context.fillStyle = this.color;
			context.fillRect(this.x, this.y, this.width, this.height);
 		},
 		update: function() {
 			this.y += this.ydelta;
 			if (this.y>=this.static+10*10-this.height+30 || this.y<=this.static) {
 				this.ydelta *= -1;
 			} 
 		}
	},
	{ 
		x: 270,
		y: 225,
		width: 50,
		height:15,
		xdelta: 12,
		ydelta: 0,
		static: 270,
		color: randomcolor[randomindex(randomcolor.length)],
 		draw: function() {
 			context.fillStyle = this.color;
			context.fillRect(this.x, this.y, this.width, this.height);
 		},
 		update: function() {
 			this.x += this.xdelta;
 			if (this.x>=this.static+10*7 || this.x<=this.static) {
 				this.xdelta *= -1;
 			} 
 		}
	},
	{ 
		x: 410,
		y: 225,
		width: 50,
		height:15,
		xdelta: 10,
		ydelta: 0,
		static: 410,
		color: randomcolor[randomindex(randomcolor.length)],
 		draw: function() {
 			context.fillStyle = this.color;
			context.fillRect(this.x, this.y, this.width, this.height);
 		},
 		update: function() {
 			this.x += this.xdelta;
 			if (this.x>=this.static+10*5 || this.x<=this.static) {
 				this.xdelta *= -1;
 			} 
 		}
	},
	{ 
		x: 410,
		y: 110,
		width: 15,
		height:50,
		xdelta: 0,
		ydelta: 16,
		static: 110,
		color: randomcolor[randomindex(randomcolor.length)],
 		draw: function() {
 			context.fillStyle = this.color;
			context.fillRect(this.x, this.y, this.width, this.height);
 		},
 		update: function() {
 			this.y += this.ydelta;
 			if (this.y>=this.static+10*10-this.height+30 || this.y<=this.static) {
 				this.ydelta *= -1;
 			} 
 		}
	},
	{ 
		x: 410,
		y: 110,
		width: 50,
		height:15,
		xdelta: 10,
		ydelta: 0,
		static: 410,
		color: randomcolor[randomindex(randomcolor.length)],
 		draw: function() {
 			context.fillStyle = this.color;
			context.fillRect(this.x, this.y, this.width, this.height);
 		},
 		update: function() {
 			this.x += this.xdelta;
 			if (this.x>=this.static+10*5 || this.x<=this.static) {
 				this.xdelta *= -1;
 			} 
 		}
	},
	{ 
		x: 510,
		y: 110,
		width: 15,
		height:50,
		xdelta: 0,
		ydelta: 16,
		static: 110,
		color: randomcolor[randomindex(randomcolor.length)],
 		draw: function() {
 			context.fillStyle = this.color;
			context.fillRect(this.x, this.y, this.width, this.height);
 		},
 		update: function() {
 			this.y += this.ydelta;
 			if (this.y>=this.static+10*10-this.height+30 || this.y<=this.static) {
 				this.ydelta *= -1;
 			} 
 		}
	},
	{ 
		x: 545,
		y: 110,
		width: 25,
		height:20,
		xdelta: 9,
		ydelta: 22,
		static:110,
		color: randomcolor[randomindex(randomcolor.length)],
 		draw: function() {
 			context.fillStyle = this.color;
			context.fillRect(this.x, this.y, this.width, this.height);
 		},
 		update: function() {
 			this.x += this.xdelta;
 			this.y += this.ydelta;
 			if (this.y>=this.static+10*10-this.height+30 || this.y<=this.static) {
 				this.ydelta *= -1;
 				this.xdelta *= -1;
 			} 
 		}
	},
	{ 
		x: 655,
		y: 110,
		width: 25,
		height:20,
		xdelta: -9,
		ydelta: 22,
		static: 110,
		color: randomcolor[randomindex(randomcolor.length)],
 		draw: function() {
 			context.fillStyle = this.color;
			context.fillRect(this.x, this.y, this.width, this.height);
 		},
 		update: function() {
 			this.x += this.xdelta;
 			this.y += this.ydelta;
 			if (this.y>=this.static+10*10-this.height+30 || this.y<=this.static) {
 				this.ydelta *= -1;
 				this.xdelta *= -1;
 			} 
 		}
	},
	{ 
		x: 700,
		y: 110,
		width: 15,
		height:50,
		xdelta: 0,
		ydelta: 16,
		color: randomcolor[randomindex(randomcolor.length)],
		static: 110,
 		draw: function() {
 			context.fillStyle = this.color;
			context.fillRect(this.x, this.y, this.width, this.height);
 		},
 		update: function() {
 			this.y += this.ydelta;
 			if (this.y>=this.static+10*10-this.height+30 || this.y<=this.static) {
 				this.ydelta *= -1;
 			} 
 		}
	},
	{ 
		x: 700,
		y: 110,
		width: 55,
		height:15,
		xdelta: 10,
		ydelta: 0,
		color: randomcolor[randomindex(randomcolor.length)],
		static: 700,
 		draw: function() {
 			context.fillStyle = this.color;
			context.fillRect(this.x, this.y, this.width, this.height);
 		},
 		update: function() {
 			this.x += this.xdelta;
 			if (this.x>=this.static+10*5 || this.x<=this.static) {
 				this.xdelta *= -1;
 			} 
 		}
	},
	{ 
		x: 700,
		y: 167.5,
		width: 55,
		height:15,
		xdelta: 10,
		ydelta: 0,
		static: 700,
		color: randomcolor[randomindex(randomcolor.length)],
 		draw: function() {
 			context.fillStyle = this.color;
			context.fillRect(this.x, this.y, this.width, this.height);
 		},
 		update: function() {
 			this.x += this.xdelta;
 			if (this.x>=this.static+10*5 || this.x<=this.static) {
 				this.xdelta *= -1;
 			} 
 		}
	},
	{ 
		x: 700,
		y: 225,
		width: 55,
		height:15,
		xdelta: 10,
		ydelta: 0,
		static: 700,
		color: randomcolor[randomindex(randomcolor.length)],
 		draw: function() {
 			context.fillStyle = this.color;
			context.fillRect(this.x, this.y, this.width, this.height);
 		},
 		update: function() {
 			this.x += this.xdelta;
 			if (this.x>=this.static+10*5 || this.x<=this.static) {
 				this.xdelta *= -1;
 			} 
 		}
	},
	{ 
		x: 330,
		y: 300,
		width: 55,
		height:15,
		xdelta: 10,
		ydelta: 0,
		static: 330,
		color: randomcolor[randomindex(randomcolor.length)],
 		draw: function() {
 			context.fillStyle = this.color;
			context.fillRect(this.x, this.y, this.width, this.height);
 		},
 		update: function() {
 			this.x += this.xdelta;
 			if (this.x>=this.static+10*5 || this.x<=this.static) {
 				this.xdelta *= -1;
 			} 
 		}
	},
	{ 
		x: 330,
		y: 300,
		width: 15,
		height:50,
		xdelta: 0,
		ydelta: 16,
		static: 300,
		color: randomcolor[randomindex(randomcolor.length)],
 		draw: function() {
 			context.fillStyle = this.color;
			context.fillRect(this.x, this.y, this.width, this.height);
 		},
 		update: function() {
 			this.y += this.ydelta;
 			if (this.y>=this.static+10*10-this.height+30 || this.y<=this.static) {
 				this.ydelta *= -1;
 			} 
 		}
	},
	{ 
		x: 330,
		y: 415,
		width: 55,
		height:15,
		xdelta: 10,
		ydelta: 0,
		color: randomcolor[randomindex(randomcolor.length)],
		static: 330,
 		draw: function() {
 			context.fillStyle = this.color;
			context.fillRect(this.x, this.y, this.width, this.height);
 		},
 		update: function() {
 			this.x += this.xdelta;
 			if (this.x>=this.static+10*5 || this.x<=this.static) {
 				this.xdelta *= -1;
 			} 
 		}
	},
	{ 
		x: 495,
		y: 300,
		width: 55,
		height:15,
		xdelta: 10,
		ydelta: 0,
		static: 495,
		color: randomcolor[randomindex(randomcolor.length)],
 		draw: function() {
 			context.fillStyle = this.color;
			context.fillRect(this.x, this.y, this.width, this.height);
 		},
 		update: function() {
 			this.x += this.xdelta;
 			if (this.x>=this.static+10*5 || this.x<=this.static) {
 				this.xdelta *= -1;
 			} 
 		}
	},
	{ 
		x: 495,
		y: 300,
		width: 15,
		height:35,
		xdelta: 0,
		ydelta: 8,
		static: 300,
		color: randomcolor[randomindex(randomcolor.length)],
 		draw: function() {
 			context.fillStyle = this.color;
			context.fillRect(this.x, this.y, this.width, this.height);
 		},
 		update: function() {
 			this.y += this.ydelta;
 			if (this.y>=this.static+10*5-this.height+17 || this.y<=this.static) {
 				this.ydelta *= -1;
 			} 
 		}
	},
	{ 
		x: 495,
		y: 357.5,
		width: 55,
		height:15,
		xdelta: 10,
		ydelta: 0,
		static: 495,
		color: randomcolor[randomindex(randomcolor.length)],
 		draw: function() {
 			context.fillStyle = this.color;
			context.fillRect(this.x, this.y, this.width, this.height);
 		},
 		update: function() {
 			this.x += this.xdelta;
 			if (this.x>=this.static+10*5 || this.x<=this.static) {
 				this.xdelta *= -1;
 			} 
 		}
	},
	{ 
		x: 585,
		y: 357.5,
		width: 15,
		height:35,
		xdelta: 0,
		ydelta: 8,
		static:357.5,
		color: randomcolor[randomindex(randomcolor.length)],
 		draw: function() {
 			context.fillStyle = this.color;
			context.fillRect(this.x, this.y, this.width, this.height);
 		},
 		update: function() {
 			this.y += this.ydelta;
 			if (this.y>=this.static+10*5-this.height+17 || this.y<=this.static) {
 				this.ydelta *= -1;
 			} 
 		}
	},
	{ 
		x: 495,
		y: 415,
		width: 55,
		height:15,
		xdelta: 10,
		ydelta: 0,
		static: 495,
		color: randomcolor[randomindex(randomcolor.length)],
 		draw: function() {
 			context.fillStyle = this.color;
			context.fillRect(this.x, this.y, this.width, this.height);
 		},
 		update: function() {
 			this.x += this.xdelta;
 			if (this.x>=this.static+10*5 || this.x<=this.static) {
 				this.xdelta *= -1;
 			} 
 		}
	},




];

// const objects = [
// 	{
// 		x: 10,
// 		y: 10,
// 		width: 50,
// 		height:50,
// 		speed: 10,
// 		xdelta: this.speed,
// 		ydelta: this.speed,
// 		color: 'grey',
//  		draw: function() {
//  			context.fillStyle = this.color;
// 			context.fillRect(this.x, this.y, this.width, this.height);
//  		},
//  		update: function() {
//  			if (this.x>=canvas.width-this.width-10) {
//  				this.xdelta = 0;
//  				this.y += ydelta;
//  			} 
//  			if(this.y>=canvas.height-this.height-10){
//  				this.ydelta = 0;
//  				this.xdelta = this.speed;
//  				this.x -= xdelta;
//  			}
//  			if(this.x===10 && this.y !== 10){
//  				this.xdelta = 0;
//  				this.ydelta = this.speed;
//  				this.y -= this.ydelta; 
//  			}
//  			if(this.y===10){
//  				this.ydelta = 0;
//  				this.xdelta = this.speed;
//  				this.x += this.xdelta;
//  			}
//  		}

// 	},
// 	{	
// 		x: 60,
// 		y: 60,
// 		width: 50,
// 		height:50,
// 		speed: 10,
// 		xdelta: this.speed,
// 		ydelta: this.speed,
// 		color: 'purple',
//  		draw: function() {
//  			context.fillStyle = this.color;
// 			context.fillRect(this.x, this.y, this.width, this.height);
//  		},
//  		update: function() {
//  			if (this.x>=canvas.width-this.width-60) {
//  				this.xdelta = 0;
//  				this.y += ydelta;
//  			} 
//  			if(this.y>=canvas.height-this.height-60){
//  				this.ydelta = 0;
//  				this.xdelta = this.speed;
//  				this.x -= xdelta;
//  			}
//  			if(this.x===60 && this.y !== 60){
//  				this.xdelta = 0;
//  				this.ydelta = this.speed;
//  				this.y -= this.ydelta; 
//  			}
//  			if(this.y===60){
//  				this.ydelta = 0;
//  				this.xdelta = this.speed;
//  				this.x += this.xdelta;
//  			}
//  		}

// 	},
// 	{	
// 		x: 110,
// 		y: 110,
// 		width: 50,
// 		height:50,
// 		speed: 10,
// 		xdelta: this.speed,
// 		ydelta: this.speed,
// 		color: '#377def',
//  		draw: function() {
//  			context.fillStyle = this.color;
// 			context.fillRect(this.x, this.y, this.width, this.height);
//  		},
//  		update: function() {
//  			if (this.x>=canvas.width-this.width-110) {
//  				this.xdelta = 0;
//  				this.y += ydelta;
//  			} 
//  			if(this.y>=canvas.height-this.height-110){
//  				this.ydelta = 0;
//  				this.xdelta = this.speed;
//  				this.x -= xdelta;
//  			}
//  			if(this.x===110 && this.y !== 110){
//  				this.xdelta = 0;
//  				this.ydelta = this.speed;
//  				this.y -= this.ydelta; 
//  			}
//  			if(this.y===110){
//  				this.ydelta = 0;
//  				this.xdelta = this.speed;
//  				this.x += this.xdelta;
//  			}
//  		}

// 	},
// 	{	
// 		x: 160,
// 		y: 160,
// 		width: 50,
// 		height:50,
// 		speed: 10,
// 		xdelta: this.speed,
// 		ydelta: this.speed,
// 		color: '#f9e53a',
//  		draw: function() {
//  			context.fillStyle = this.color;
// 			context.fillRect(this.x, this.y, this.width, this.height);
//  		},
//  		update: function() {
//  			if (this.x>=canvas.width-this.width-160) {
//  				this.xdelta = 0;
//  				this.y += ydelta;
//  			} 
//  			if(this.y>=canvas.height-this.height-160){
//  				this.ydelta = 0;
//  				this.xdelta = this.speed;
//  				this.x -= xdelta;
//  			}
//  			if(this.x===160 && this.y !== 160){
//  				this.xdelta = 0;
//  				this.ydelta = this.speed;
//  				this.y -= this.ydelta; 
//  			}
//  			if(this.y===160){
//  				this.ydelta = 0;
//  				this.xdelta = this.speed;
//  				this.x += this.xdelta;
//  			}
//  		}

// 	},
// 	{	staticstr: 210,
// 		x: this.staticstr,
// 		y: this.staticstr,
// 		width: 50,
// 		height:50,
// 		speed: 10,
// 		xdelta: this.speed,
// 		ydelta: this.speed,
// 		color: '#3bf991',
//  		draw: function() {
//  			context.fillStyle = this.color;
// 			context.fillRect(this.x, this.y, this.width, this.height);
//  		},
//  		update: function() {
//  			if (this.x>=canvas.width-this.width-this.staticstr) {
//  				this.xdelta = 0;
//  				this.y += ydelta;
//  			} 
//  			if(this.y>=canvas.height-this.height-this.staticstr){
//  				this.ydelta = 0;
//  				this.xdelta = this.speed;
//  				this.x -= xdelta;
//  			}
//  			if(this.x===this.staticstr && this.y !== this.staticstr){
//  				this.xdelta = 0;
//  				this.ydelta = this.speed;
//  				this.y -= this.ydelta; 
//  			}
//  			if(this.y===this.staticstr){
//  				this.ydelta = 0;
//  				this.xdelta = this.speed;
//  				this.x += this.xdelta;
//  			}
//  		}

// 	},


// ]


 const draw = function() {
context.fillStyle = 'black';
context.fillRect(0, 0, canvas.width, canvas.height);


for(let i = 0; i < objects.length; i++) {
const obj = objects[i];
obj.draw();
}
};

const update = function() {
for(let i = 0; i < objects.length; i++) {
const obj = objects[i];
obj.update();
}
};



// const anim = function () {
// 	draw();
// 	update();
// 	requestAnimationFrame(anim);
// }
// anim();

