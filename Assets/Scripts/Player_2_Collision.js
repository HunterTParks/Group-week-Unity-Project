#pragma strict

var Player1IsKnockedBack : boolean = false;
var XVelocity : float = 0;
var Direction : float = 0;

function Start () {
	
}

function Update () {
	CheckButtonPressForVelocity();
	CheckForDirection();
	CheckForXVelocity();
}

function FixedUpdate() {
	 if(Player1IsKnockedBack === true){
        if(XVelocity < 0){
        	XVelocity++;
        } else if (XVelocity > 0){
        	XVelocity--;
        }
    }
}

function OnCollisionEnter2D(coll : Collision2D) {
    if(coll.gameObject.name == "Player 1" && Input.GetButton("Player2Punch")){
    	gameObject.GetComponent(Player_2_Attacks).Punch(coll);
    	Player1KnockBack(coll);
    } else if (coll.gameObject.name == "Player 1" && Input.GetButton("Player2Kick")){
    	gameObject.GetComponent(Player_2_Attacks).Kick(coll);
    	Player1KnockBack(coll);
    }
}

function Player1KnockBack(coll: Collision2D){
    Player1IsKnockedBack = true;
    Debug.Log(Direction);
    if(Direction == 1 || Direction == 2){
    	Debug.Log("TESTINGLOLOOLOLO");
    	XVelocity = -20;
    	coll.gameObject.GetComponent(Rigidbody2D).velocity = new Vector2(XVelocity, 0);
    } else if (Direction == 0 || Direction == 3) {
    	XVelocity = 20;
    	coll.gameObject.GetComponent(Rigidbody2D).velocity = new Vector2(XVelocity, 0);
    }
}

function CheckForXVelocity(){
    if(XVelocity == 0){
        Player1IsKnockedBack = false;
    }
}

//TEST NOW FOR BuG ERRORS
function CheckButtonPressForVelocity(){
	if(!(Input.GetAxis("Horizontal") || Input.GetAxis("Vertical"))){
		this.GetComponent(Rigidbody2D).velocity = new Vector2(0, 0);
	} 
}

function CheckForDirection(){
    if(Input.GetAxis("Horizontal2") > 0){
        //0 is looking right
        Direction = 0;
    } else if (Input.GetAxis("Horizontal2") < 0){
        //1 is looking left
        Direction = 1;
    } else if (Input.GetAxis("Vertical2") > 0){
        //2 is looking up
        Direction = 2;
    } else if (Input.GetAxis("Vertical2") < 0) {
        //3 is looking down
        Direction = 3;
    }
}