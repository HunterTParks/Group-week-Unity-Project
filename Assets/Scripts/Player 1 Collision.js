#pragma strict

var Player3IsKnockedBack: boolean = false;
var XVelocity: float = 0;
var Direction : float = 0;

function Start () {
	
}

function Update () {
    CheckButtonPressForVelocity();
    CheckForDirection();
    CheckForXVelocity();
}

function FixedUpdate(){
	if(Player3IsKnockedBack === true){
        if(XVelocity < 0){
        	XVelocity++;
        } else if (XVelocity > 0){
        	XVelocity--;
        }
    }
}

function OnCollisionEnter2D(coll: Collision2D){
	if(coll.gameObject.name == "Player 3" && Input.GetButton("Player1Punch")){
		gameObject.GetComponent(Player_1_Attacks).Punch(coll);
		Player3KnockBack(coll);
	} else if(coll.gameObject.name == "Player 3" && Input.GetButton("Player1Kick")){
		gameObject.GetComponent(Player_1_Attacks).Kick(coll);
		Player3KnockBack(coll);
	}
}

function Player3KnockBack(coll: Collision2D){
	Player3IsKnockedBack = true;
	if(Direction == 1 || Direction == 2){
		XVelocity = -4;
		coll.gameObject.GetComponent(Rigidbody2D).velocity = new Vector2(XVelocity, 0);
	} else if (Direction == 0 || Direction == 3){
		XVelocity = 4;
    	coll.gameObject.GetComponent(Rigidbody2D).velocity = new Vector2(XVelocity, 0);
	}
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

function CheckForDirection(){
    if(Input.GetAxis("Horizontal") > 0){
        //0 is looking right
        //Debug.Log("ETSTING RIGHT");
        Direction = 0;
        //TravelRight();
    } else if (Input.GetAxis("Horizontal") < 0){
        //1 is looking left
        //Debug.Log("ETSTING Left");
        Direction = 1;
        //TravelLeft();
    } else if (Input.GetAxis("Vertical") > 0){
        //2 is looking up
        //Debug.Log("ETSTING UP");
        Direction = 2;
       	//TravelUp();
    } else if (Input.GetAxis("Vertical") < 0) {
        //3 is looking down
        //Debug.Log("ETSTING Down");
        Direction = 3;
        //TravelDown();
    }
}
