// Enemies our player must avoid
function getRandomArbitrary(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}


var Enemy = function(x,y) {

this.x=x;
this.y=y;
// this.speed=200;
    this.width=50;
    this.height=50;

this.max=150;
this.min=100;
this.speed=getRandomArbitrary(this.min,this.max);
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, s method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x=this.x+this.speed*dt;

    if(this.x>550){
        this.speed= getRandomArbitrary(400,100);
        this.x= -50;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};









// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player=function(x,y){
    this.x=x;
    this.y=y;
    this.width=40;
    this.height=40;
this.sprite = 'images/char-boy.png';
};


Player.prototype.update=function(dt){



    if(this.y<65){
        this.y=400;
        alert("huraaaaah!!!!!");
    }



    this.checkCollisions(allEnemies);

};


Player.prototype.render=function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


Player.prototype.handleInput=function(direction){


if(direction=="up"&& this.y!=0){
    this.y=this.y-83;
}
if(direction=="down"&& this.y!=400){
    this.y=this.y+83;
}

if(direction=="right"&& this.x!=400){
    this.x=this.x+100;
}
if(direction=="left"&& this.x!=0){
    this.x=this.x-100;
}

    };




// Player.prototype.checkCollisions = function(allEnemies) {
//     var allEnemiesLength = allEnemies.length;
//     for (var i = 0; i < allEnemiesLength; i++) {
//         if ((allEnemies[i].x + 50 >= this.x) && (allEnemies[i].x <= this.x + 50) && (allEnemies[i].y + 50 >= this.y) && (allEnemies[i].y <= this.y + 50)) {
//             this.reset();
//         }
//     }
// };


Player.prototype.checkCollisions = function(allEnemies) {
    var allEnemiesLength = allEnemies.length;
    for (var i = 0; i < allEnemiesLength; i++) {
        if ((allEnemies[i].x + 50 >this.x) &&
         (allEnemies[i].x < this.x + 50) &&
         (allEnemies[i].y + 50 > this.y) &&
         (allEnemies[i].y < this.y + 50)) {
            // this.reset();
        this.x=0;
        this.y=400;
        alert("OOOOPSSSsssss!!!!");
        }
    }
};











// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [ new Enemy(100,55),new Enemy(220,140),new Enemy(0,225)];
var player=new Player(0,400);





// function checkCollisions(allEnemies, player) {
//     for (var i = 0; i < allEnemies.length; i++) {
//         if (allEnemies[i].x < player.x + player.width &&
//             allEnemies[i].x + allEnemies[i].width > player.x &&
//             allEnemies[i].y < player.y + player.height &&
//             allEnemies[i].height + allEnemies[i].y > player.y) {
//             player.reset(202, 415);
//         }
//     }
// };







// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
