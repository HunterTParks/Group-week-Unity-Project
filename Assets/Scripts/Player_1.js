#pragma strict

function Start () {
 
}

var speed : float = 1.0;
var health : float = 100.0;
var Player3IsKnockedBack : boolean = false;
var XVelocity : float = 0;
var Direction : float = 0;

function Update () {
    CheckForDirection();
    CheckButtonPressForVelocity();
    Boundry();

    //var move = Vector3(Input.GetAxis("Horizontal"), Input.GetAxis("Vertical"), 0);
    //transform.position += move * speed * Time.deltaTime;

    CheckForXVelocity();

    if(Player3IsKnockedBack === true){
        //XVelocity--;
        if(XVelocity < 0){
        	XVelocity++;
        } else if (XVelocity > 0){
        	XVelocity--;
        }
        //gameObject.Find("Player 3").GetComponent(Rigidbody2D).velocity = new Vector2(XVelocity, 0);
    }

    NoHealth();
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

function OnCollisionEnter2D(coll: Collision2D){
    if(coll.gameObject.name == "Player 3" && Input.GetButton("Fire1")){
        Player3KnockBack(coll);
        coll.gameObject.GetComponent(Player_2).health--;
   }
}

function NoHealth(){
    if(health <= 0){
        Destroy(gameObject);
    }
}

    // WARNIGN WARNIGN WARNIGN WARNING
    // FIX HERE RIGHT NOW BELOW THE KNOCKBACK WORK ON IT

function Player3KnockBack(coll: Collision2D){
	var other = coll.gameObject;
    Player3IsKnockedBack = true;
    if(Direction == 1 || Direction == 2){
    	Debug.Log(Direction, gameObject);
    	XVelocity = -10;
    	coll.gameObject.GetComponent(Rigidbody2D).velocity = new Vector2(XVelocity, 0);
    	//coll.gameObject.GetComponent(Rigidbody2D).AddForce(transform.right * -1);
    } else if (Direction == 0 || Direction == 3) {
    	XVelocity = 10;
    	coll.gameObject.GetComponent(Rigidbody2D).velocity = new Vector2(XVelocity, 0);
    }
    Debug.Log(Direction, gameObject);
}

function CheckForXVelocity(){
    if(XVelocity <= 0){
        Player3IsKnockedBack = false;
    }
}

function CheckButtonPressForVelocity(){
	if(!(Input.GetAxis("Horizontal") || Input.GetAxis("Vertical"))){
		this.GetComponent(Rigidbody2D).velocity = new Vector2(0, 0);
	} 
}


function Move(){
    var move = Vector3(Input.GetAxis("Horizontal"), Input.GetAxis("Vertical"), 0);
    transform.position += move * speed * Time.deltaTime;

}

function Boundry(){
	var boundry = gameObject.GetComponent(Transform).position;
	var move = Vector3(Input.GetAxis("Horizontal"), Input.GetAxis("Vertical"), 0);

    if(boundry.y > -6.3 && Input.GetAxis("Vertical") > 0){
    		Debug.Log("too far up");	
    }	else if (boundry.y < -7.62 && Input.GetAxis("Vertical") < 0){
    		Debug.Log("too far down");
    }	else if (boundry.x < -12.9 && Input.GetAxis("Horizontal") < 0){
    		Debug.Log("too far left");
    }	else if (boundry.x > 4.34 && Input.GetAxis("Horizontal") > 0){
    		Debug.Log("too far right");
    } 	else {
    	Move();
    }

}
