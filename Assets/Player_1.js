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

    var move = Vector3(Input.GetAxis("Horizontal"), Input.GetAxis("Vertical"), 0);
    transform.position += move * speed * Time.deltaTime;

    CheckForXVelocity();

    if(Player3IsKnockedBack === true){
        XVelocity--;
        gameObject.Find("Player 3").GetComponent(Rigidbody2D).velocity = new Vector2(XVelocity, 0);
    }

    NoHealth();
}

function CheckForDirection(){
    if(Input.GetAxis("Horizontal") > 0){
    	Debug.Log("Right", gameObject);
        //0 is looking right
        Direction = 0;
    } else if (Input.GetAxis("Horizontal") < 0){
    	Debug.Log("Left", gameObject);
        //1 is looking left
        Direction = 1;
    } else if (Input.GetAxis("Vertical") > 0){
    	Debug.Log("Up", gameObject);
        //2 is looking up
        Direction = 2;
    } else {
    	Debug.Log("Down", gameObject);
        //3 is looking down
        Direction = 3;
    }
}

function OnCollisionEnter2D(coll: Collision2D){
    if(coll.gameObject.name == "Player 3" && Input.GetButton("Fire1")){
        Player3KnockBack(coll);
        coll.gameObject.GetComponent(Rigidbody2D).velocity = new Vector2(5, 0);
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
    Player3IsKnockedBack = true;
    XVelocity = 10;
    if(Direction == 0 || Direction == 3){
        coll.gameObject.GetComponent(Rigidbody2D).velocity = new Vector2(Mathf.Abs(XVelocity), 0);
    }
    else{
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