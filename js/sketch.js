var ball;
var wall = [];
var img;
var bg;
var win = true;

function setup()
{
    createCanvas(1000, 860);
    ball = new Ball();
    wall.push(new Wall());
    img = loadImage("img/bird.png");
    bg = loadImage("img/wood.jpeg");
}

function draw()
{
    image(bg, 0, 0);
    if (win)
    {
	if (frameCount % 40 == 0)
	{
	    wall.push(new Wall());
	    if (wall.length > 5)
	    {
		wall.shift();
	    }
	}
	for (var i = 0; i < wall.length; i++)
	{
	    if (wall[i].offScreen === true)
	    {
		wall[i].splice(i ,1);
	    }
	    if (wall[i].hit(ball))
	    {
		;
	    }
	    wall[i].show();
	    wall[i].update();	
	}
	ball.show();
	ball.update();
    }
    else
    {
	for (var y = 0; y < wall.length; y++)
	{
	    wall[y].show();
	}
	ball.show();
    }
}

function keyPressed()
{
    if (key === ' ')
    {
	ball.up();
    }
}
