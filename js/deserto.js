class Deserto
{
	// define as variaveis
	
	fps ;
    canvas ;
    width ;
	height ;
    minVelocityY ;
    maxVelocityY ;
    qtdeareia ;
	graos;
    intervalId ;
	ctx;
	areia;

	
	  constructor(ctx) {
		  this.fps = 30;
	
	this.width = 0;
	this.height = 0;
	this.minVelocity = 100;
	this.maxVelocity = 200;
	this.qtdeareia = 1000;
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
			self.qtdeareia += 1000;
			self.start()
			console.table("qtdeareia = " + self.qtdeareia);
		}
		if (key == 82){
			self.qtdeareia -= 1000;
			self.start()
			console.table("qtdeareia = "+ self.qtdeareia);
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
	
	this.graos = [];
	for(var i=0; i<this.qtdeareia; i++) {
			var x = Math.random()*this.width;
			
			var y =  Math.random()*this.height;
			var size =  Math.random()*3+1;
			var vel = (Math.random()*(this.maxVelocity - this.minVelocity))+this.minVelocity;
			
			this.areia = new Areia(x,y, size,vel );
		this.graos[i] = this.areia;
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
		for(var i=0; i<this.graos.length;i++) {
			this.areia = this.graos[i];
			this.ctx.fillRect(this.areia.x, this.areia.y, this.areia.size, this.areia.size);
		}
	}


  update(){ 
	var dt = 3 / this.fps;

	for(var i=0; i<this.graos.length; i++) {
		var areia = this.graos[i];
		areia.x += dt * areia.velocity;
		if(areia.x > this.width) {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			var y = Math.random()*this.width;
			var size =  Math.random()*3+2;
			var vel = (Math.random()*(this.maxVelocity - this.minVelocity))+this.minVelocity;
			let s = new Areia(0, y,size, vel);	
		 	this.graos[i] = s;
		}
		
	}
}

stop()
{
	clearInterval(this.intervalId);
}
}