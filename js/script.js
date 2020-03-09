function Jerry(){
    this.x = 200;
    this.y = 300;
    this.speedX = 10;
    this.speedY = 10;
    this.width = 25;
    this.height = 25;
    this.pointCounter = 0;

    this.move = function(edit){
        if(edit === 'left'){
            this.x -= this.speedX;
        } else if(edit === 'right'){
            this.x += this.speedX;
        } else if(edit === 'top'){
            this.y -= this.speedY;
        } else if(edit === 'Bottom'){
            this.y += this.speedY;
        };
    };

};

function Thomas(){
    this.x = 50;
    this.y = 50;
    this.width = 50;
    this.height = 50;
    this.speedX = 10;
    this.speedY = 5;
    count = 1;
    this.countThomas = function(){

        setInterval(function(){ 
            count++;
            console.log(count);
        }, 8000);

    };
};

var cat = new Thomas();
cat.countThomas();

