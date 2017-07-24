#pragma strict

function Start () {
	
}

var speed : float = 1.0;
var health : float = 100.0;
var Player1IsKnockedBack : boolean = false;
var XVelocity : float = 0;
var Direction : float = 0;
var HealthBar: float = 0;

function Update () {
	Boundry();
	CheckButtonPressForVelocity();
	CheckForDirection();
	CheckForXVelocity();
    NoHealth();

    if(Player1IsKnockedBack === true){
        //XVelocity--;
        if(XVelocity < 0){
        	XVelocity++;
        } else if (XVelocity > 0){
        	XVelocity--;
        }
        //gameObject.Find("Player 1").GetComponent(Rigidbody2D).velocity = new Vector2(XVelocity, 0);
    }

}

function CheckForDirection(){
    if(Input.GetAxis("Horizontal") > 0){
        //0 is looking right
        Direction = 0;
    } else if (Input.GetAxis("Horizontal") < 0){
        //1 is looking left
        Direction = 1;
    } else if (Input.GetAxis("Vertical") > 0){
        //2 is looking up
        Direction = 2;
    } else if (Input.GetAxis("Vertical") < 0) {
        //3 is looking down
        Direction = 3;
    }
}

function OnCollisionEnter2D(coll : Collision2D) {
    if(coll.gameObject.name == "Player 1" && Input.GetButton("player2Push")){
         Player1KnockBack(coll);
        coll.gameObject.GetComponent(Player_1).health-=10;
    }
}

function NoHealth(){
    if(health <= 0){
        Destroy(gameObject);
    }
}

function Player1KnockBack(coll: Collision2D){
	var other = coll.gameObject;
    Player1IsKnockedBack = true;
    if(Direction == 1 || Direction == 2){
    	//Debug.Log(Direction, gameObject);
    	XVelocity = -10;
    	coll.gameObject.GetComponent(Rigidbody2D).velocity = new Vector2(XVelocity, 0);
    	//coll.gameObject.GetComponent(Rigidbody2D).AddForce(transform.right * -1);
    } else if (Direction == 0 || Direction == 3) {
    	XVelocity = 25;
    	coll.gameObject.GetComponent(Rigidbody2D).velocity = new Vector2(XVelocity, 0);
    }
}

function CheckForXVelocity(){
    if(XVelocity == 0){
    	Debug.Log("TESTING THE XCELOVODIY FALSE THING YAY");
        Player1IsKnockedBack = false;
    }
}


function CheckButtonPressForVelocity(){
	if(!(Input.GetAxis("Horizontal") || Input.GetAxis("Vertical"))){
		this.GetComponent(Rigidbody2D).velocity = new Vector2(0, 0);
	} 
}


function Move(){
    var move = Vector3(Input.GetAxis("Horizontal2"), Input.GetAxis("Vertical2"), 0);
    transform.position += move * speed * Time.deltaTime;

}

function Boundry(){
	var boundry = gameObject.GetComponent(Transform).position;
	var move = Vector3(Input.GetAxis("Horizontal2"), Input.GetAxis("Vertical2"), 0);

    if(boundry.y > -6.2&& Input.GetAxis("Vertical2") > 0){
    	gameObject.transform.position = Vector2(boundry.x,-6);
    		//Debug.Log("too far up");	
    }	else if (boundry.y < -6.95 && Input.GetAxis("Vertical2") < 0 ){
    	//gameObject.transform.position = Vector2(boundry.x,-6.9);
    		//Debug.Log("too far down");
    }	else if (boundry.x < -11.65 && Input.GetAxis("Horizontal2") < 0){
    		//gameObject.transform.position = Vector2(-12.35, boundry.y);
    		//Debug.Log("too far left");
    }	else if (boundry.x > 3 && Input.GetAxis("Horizontal2") > 0){
    		//Debug.Log("too far right");
    		//gameObject.transform.position = Vector2(3.8, boundry.y);
    } 	else {
    	Move();
    }

}