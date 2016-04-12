window.onload = function() {
	var game = new Phaser.Game("100", "100", Phaser.AUTO, '', { preload: preload, create: create, update: update });
	var platforms;
	function preload() {
		game.load.image('thehobbit', 'assets/The-Hobbit-An-Unexpected-Journey-Wallpapers-1920x1080-10.jpg');
		game.load.spritesheet('bilbobolson', 'assets/bilbo.png', 385, 412);
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
		
		thehobbit=game.add.sprite(0, 0, 'thehobbit');
		thehobbit.height = game.height;
    	thehobbit.width = game.width;
    	thehobbit.smoothed = true;
    	player=game.add.sprite(50,50,'bilbobolson');
    	game.physics.enable(player, Phaser.Physics.ARCADE);
		console.log('create')

    	
        platforms = game.add.group();
        game.physics.enable(platforms, Phaser.Physics.ARCADE);
        
	ground = platforms.create(0, game.world.height - 345, 'plataforma');
	ground.enableBody = true;
    //ground.scale.setTo(2, 2);
   	//ground.body.immovable = true;
    //var ledge = platforms.create(400, 400, 'lluvia');
    //ledge.body.immovable = true;
    //ledge = platforms.create(-150, 250, 'lluvia');
    //ledge.body.immovable = true;
    game.physics.arcade.gravity.y = 250;

    
    game.physics.enable(player, Phaser.Physics.ARCADE);

    player.body.bounce.y = 0.2;
    player.body.collideWorldBounds = true;
    
    //player.body.setSize(20, 32, 5, 16);

    //player.animations.add('left', [0, 1, 2, 3], 10, true);
    //player.animations.add('turn', [4], 20, true);
    //player.animations.add('right', [5, 6, 7, 8], 10, true);

    game.camera.follow(player);

    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    	
       
	}

	function update() {
	    game.physics.arcade.collide(player, platforms);
	    player.body.velocity.x = 0;

    if (cursors.left.isDown)
    {
        player.body.velocity.x = -150;

        if (facing != 'left')
        {
            player.animations.play('left');
            facing = 'left';
        }
    }
    else if (cursors.right.isDown)
    {
        player.body.velocity.x = 150;

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
        player.body.velocity.y = -250;
        jumpTimer = game.time.now + 750;
    }
	}


};