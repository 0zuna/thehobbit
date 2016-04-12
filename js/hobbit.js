window.onload = function() {
	var game = new Phaser.Game("100", "100", Phaser.AUTO, '', { preload: preload, create: create, update: update });
	var platforms;
	function preload() {
		game.load.image('thehobbit', 'assets/The-Hobbit-An-Unexpected-Journey-Wallpapers-1920x1080-10.jpg');
		//game.load.spritesheet('bolson', 'assets/bolson.png', 52, 121);
		game.load.image('plataforma','assets/The-Hobbit-An-Unexpected-Journey-Wallpapers-1920x1080-17.png')
        console.log('preload');
        

	}

	function create() {
		
		thehobbit=game.add.sprite(0, 0, 'thehobbit');
		thehobbit.height = game.height;
    	thehobbit.width = game.width;
    	thehobbit.smoothed = true;
		console.log('create')

    	
        platforms = game.add.group();
        
	ground = platforms.create(0, game.world.height - 345, 'plataforma');
	ground.enableBody = true;
    //ground.scale.setTo(2, 2);
   	//ground.body.immovable = true;
    //var ledge = platforms.create(400, 400, 'lluvia');
    //ledge.body.immovable = true;
    //ledge = platforms.create(-150, 250, 'lluvia');
    //ledge.body.immovable = true;
    	
       
	}

	function update() {
	}


};