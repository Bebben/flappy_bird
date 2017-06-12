function Ball()
{
    this.x = width / 10;
    this.y = height / 2;
    this.diameter = 30;
    this.gravity = 0.2;
    this.speed = 1;
    this.size = 70;

    this.show = function()
    {
	image(img, this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
    };

    this.update = function()
    {
        this.speed += this.gravity;
        this.y += this.speed;
        if (this.y + this.diameter >= height)
	{
	    this.y = height - this.diameter - 1 / 2;
	    this.speed = 0;
	}
        if (this.y < 0)
	{
	    this.y = 0;
	    this.speed = 0;
	}
    };
    
    this.up = function()
    {
	this.speed -= this.gravity * 50;
    };
};

function Wall()
{
    this.x = width;
    this.y = random(0, height / 2);
    this.w = 20;
    this.h = random(0, height);
    this.color = false;
    
    this.show = function()
    {
	fill(10, 10, 10);
	if (this.color)
	{
	    fill(color("red"));
	}
	rect(this.x, this.y, this.w, this.h);
	this.color = false;
    };

    this.update = function()
    {
	this.x -= 5;
    };

    this.offScreen = function()
    {
	if (this.x < 0)
	{
	    return (true);
	}
	else
	{
	    return (false);
	}
    };

    this.hit = function(Ball)
    {
	if (Ball.x > this.x && Ball.x < this.x + this.w && Ball.y > this.y && Ball.y < this.y + this.h)
	{
	    this.color = true;
	    win = false;
	    return (true);
	}
	return (false);
    }
};
