class Starfield
{
	// define as variaveis
	
	fps ;
    canvas ;
    width ;
	height ;
    minVelocityY ;
    maxVelocityY ;
    qtdestars ;
	stars;
    intervalId ;
	ctx;
	star;

	
	  constructor(ctx) {
		  this.fps = 30;
	
	this.width = 0;
	this.height = 0;
	this.minVelocity = 100;
	this.maxVelocity = 200;
	this.qtdestars = 1000;
	this.intervalId = 0;

    this.ctx = ctx;
	this.width = window.innerWidth;
	console.table(window.innerWidth);
	this.height = window.innerHeight;
	console.table(window.innerHeight);
	this.ctx.canvas.width = this.width;
    this.ctx.canvas.height = this.height;
	    
  }
 
inicializa()
{
	
	var self = this;
	 
addEventListener('resize', function resize(event){
    
	self.width = window.innerWidth;
    self.height = window.innerHeight;
	self.ctx.canvas.width = self.width;
	self.ctx.canvas.height = self.height;
	console.table(self.ctx.width);
	console.table(self.ctx.height);
    self.desenha() 
	
	
}); 
addEventListener("keydown",
	function pressiona()
	{
		var key = event.keyCode;
		if (key == 81){
			self.qtdestars += 1000;
			self.start()
			console.table("qtdestars = " + self.qtdestars);
		}
		if (key == 82){
			self.qtdestars -= 1000;
			self.start()
			console.table("qtdestars = "+ self.qtdestars);
		}
		if (key == 87){
			self.minVelocity += 100;
			self.maxVelocity += 100;
			console.table("Velocidade máxima = " + self.minVelocity + ", Velocidade máxima = " + self.maxVelocity);
		}
		if (key == 69){
			self.minVelocity -= 100;
			self.maxVelocity -= 100;
			console.table("Velocidade máxima = " + self.minVelocity + ", Velocidade máxima = " + self.maxVelocity);
		}
		if (key == 84){
						ctx.clearRect(0, 0, canvas.width, canvas.height);
		}
	});
}
start()
{
	
	this.stars = [];
	for(var i=0; i<this.qtdestars; i++) {
			var x = Math.random()*this.width;
			
			var y =  Math.random()*this.height;
			var size =  Math.random()*3+1;
			var vel = (Math.random()*(this.maxVelocity - this.minVelocity))+this.minVelocity;
			
			this.star = new Star(x,y, size,vel );
		this.stars[i] = this.star;
	}
	
	var timeUpdate = 1000 / this.fps;
	var self = this;
	this.intervalId = setInterval(function() {
        self.update();
        self.desenha();	
    }, timeUpdate);
}

	desenha()
	{	
		this.ctx.fillStyle = 'transparent';
		this.ctx.fillRect(0, 0, this.width, this.height);
		this.ctx.fillStyle = '#8B4513';
		for(var i=0; i<this.stars.length;i++) {
			this.star = this.stars[i];
			this.ctx.fillRect(this.star.x, this.star.y, this.star.size, this.star.size);
		}
	}


  update(){ 
	var dt = 3 / this.fps;

	for(var i=0; i<this.stars.length; i++) {
		var star = this.stars[i];
		star.x += dt * star.velocity;
		if(star.x > this.width) {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			var y = Math.random()*this.width;
			var size =  Math.random()*3+2;
			var vel = (Math.random()*(this.maxVelocity - this.minVelocity))+this.minVelocity;
			let s = new Star(0, y,size, vel);	
		 	this.stars[i] = s;
		}
		
	}
}

stop()
{
	clearInterval(this.intervalId);
}
}