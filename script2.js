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

const backgraundImg = new Image();
backgraundImg.src = "https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/N13e7awhgiljgescq/bouncing-balls-and-beach-background-summer-vacation-by-the-sea_hcmxcpk9wx_thumbnail-full09.png";
const heroImg = new Image();
heroImg.src = "https://ubisafe.org/images/astronaut-vector-female.png";
const badGuysImg = new Image();
let help = 1;
if (help === 1) {
    badGuysImg.src = "http://purepng.com/public/uploads/large/purepng.com-ninjashinobininjacovert-agentassassinationguerrilla-warfaresamuraiclip-art-1421526960616u3iia.png";
}
else if(help === -1){
     badGuysImg.src = "https://scontent.fevn1-2.fna.fbcdn.net/v/t1.15752-9/44680877_183729249210756_3155598831278620672_n.png?_nc_cat=102&_nc_ht=scontent.fevn1-2.fna&oh=3137c9967a3218e4a7f69093ba4e448e&oe=5C45AEDB";
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
        xdelta: 5, 
        ydelta: 5,
        image: heroImg, 
        draw: function() {
        	context2.drawImage(this.image, this.x, this.y, this.width, this.height);
        },
        update: function() {
				if(ukey && this.y>=5) {
        			this.y -= this.ydelta;
  				}
  				if(dkey && this.y<=canvas2.height-this.height-5) {
        			this.y += this.ydelta;
  				}
  				if(rkey && this.x<=canvas2.width-this.width-5) {
        			this.x += this.xdelta;
  				}
  				if(lkey && this.x>=5) {
        			this.x -= this.xdelta;
  				}
        }		

	},
	 badGuys: [], 
};


const createBadGuys = function(count, canvasWidth, canvasHeight) {
    for (var i = 0; i < count; i++) {
        const badGuysImg = new Image();
        badGuysImg.src = "http://purepng.com/public/uploads/large/purepng.com-ninjashinobininjacovert-agentassassinationguerrilla-warfaresamuraiclip-art-1421526960616u3iia.png";

        let randomx = random(canvasWidth,defaultObjWidthHeight);
        let randomy = random(canvasHeight,defaultObjWidthHeight);
	    let newBadGuy = {   
            x: randomx,
            y: randomy,
            width: defaultObjWidthHeight,
            height: defaultObjWidthHeight,
            speed: 5,
            xdelta: 5, 
            ydelta: 5,
            image: badGuysImg,
            draw: function() {
                context2.drawImage(this.image, this.x, this.y, this.width, this.height);
            },
            update: function() {
                this.x += this.xdelta;
                this.y += this.ydelta;
 			    if (this.x>=canvas2.width-this.width) {
 				   this.xdelta *= -1;
                    badGuysImg.src = "https://scontent.fevn1-2.fna.fbcdn.net/v/t1.15752-9/44680877_183729249210756_3155598831278620672_n.png?_nc_cat=102&_nc_ht=scontent.fevn1-2.fna&oh=3137c9967a3218e4a7f69093ba4e448e&oe=5C45AEDB";
 			    } 
                if (this.x<=0){
                    this.xdelta *= -1;
                    badGuysImg.src = "http://purepng.com/public/uploads/large/purepng.com-ninjashinobininjacovert-agentassassinationguerrilla-warfaresamuraiclip-art-1421526960616u3iia.png";
                }
                if (this.y>=canvas2.height-this.height || this.y<=0) {
                    this.ydelta *= -1;
                }
            }
        }
        gameData.badGuys[gameData.badGuys.length] = newBadGuy;
    }
};

createBadGuys(6, canvas2.width, canvas2.height);
console.log(gameData.badGuys);

const drawing = function() {
    context2.drawImage(backgraundImg, 0, 0, canvas2.width, canvas2.height);

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

let paddingHerorightbottom = 17;
let paddingHerorightbottom = 22;

const collisionCheker = function(){
    for (var i = 0; i < gameData.badGuys.length; i++) {
            if ((gameData.hero.x+gameData.hero.width-paddingHerorightbottom>=gameData.badGuys[i].x && gameData.hero.x<gameData.badGuys[i].x+gameData.badGuys[i].width-paddingHerorightbottom) && (gameData.hero.y+gameData.hero.height-paddingHerorightbottom>=gameData.badGuys[i].y && gameData.hero.y<gameData.badGuys[i].y+gameData.badGuys[i].height-paddingHerorightbottom)) {
                console.log("yey" + i);
                throw new Error("You Loose!");
                alert("Unfotunatelly, YOU LOOSE!!!");
            }
    }

}


const anim = function () {
	drawing();
	draw();
	updating();
 	update();
    collisionCheker();
	requestAnimationFrame(anim);
}
anim();
