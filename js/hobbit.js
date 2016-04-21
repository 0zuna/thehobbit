window.onload = function() {
	var game = new Phaser.Game("100", "100", Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });
	var platforms;
	function preload() {
		game.load.image('thehobbit', 'assets/View_from_connors_hill_panorama_01.jpg');
		game.load.spritesheet('bilbobolson', 'assets/test.png', 32, 42);
		game.load.image('plataforma','assets/The-Hobbit-An-Unexpected-Journey-Wallpapers-1920x1080-17.png')
        console.log('preload');
        

	}
var map;
var tileset;
var layer;
var player;
var facing = 'left';
var jumpTimer = 0;
var cursors;
var jumpButton;
var bg;
var platforms;
	function create() {
		game.world.setBounds(0, 0, 4289, game.height+100);
		thehobbit=game.add.sprite(0, 0, 'thehobbit');
		thehobbit.height = game.height+100;
    	//thehobbit.width = game.width;
    	thehobbit.smoothed = true;
    	player=game.add.sprite(50,50,'bilbobolson');
    	game.physics.enable(player, Phaser.Physics.ARCADE);
		console.log('create')

    	
        platforms = game.add.group();
        
	ground = platforms.create(0, game.world.height - 345, '');
	ground.enableBody = true;
    game.physics.enable(platforms, Phaser.Physics.ARCADE);
    game.physics.arcade.gravity.y = 500;
    
    game.physics.enable(player, Phaser.Physics.ARCADE);
    player.body.bounce.y = 0.2;
    player.body.collideWorldBounds = true;
    game.camera.follow(player);
    
    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    	
       
	}

	function update() {
	    game.physics.arcade.collide(player, platforms);
	    player.body.velocity.x = 0;

    if (cursors.left.isDown)
    {
        player.body.velocity.x = -300;

        if (facing != 'left')
        {
            player.animations.play('left');
            facing = 'left';
        }
    }
    else if (cursors.right.isDown)
    {
        player.body.velocity.x = 300;

        if (facing != 'right')
        {
            player.animations.play('right');
            facing = 'right';
        }
    }
    else
    {
        if (facing != 'idle')
        {
            player.animations.stop();

            if (facing == 'left')
            {
                player.frame = 0;
            }
            else
            {
                player.frame = 5;
            }

            facing = 'idle';
        }
    }
    
    if (jumpButton.isDown && player.body.onFloor() && game.time.now > jumpTimer)
    {
        player.body.velocity.y = -465;
        jumpTimer = game.time.now + 750;
    }
	}
	function render() {

    game.debug.cameraInfo(game.camera, 500, 32);
    game.debug.spriteCoords(player, 32, 32);

}


};