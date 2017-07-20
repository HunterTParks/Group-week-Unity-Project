#pragma strict

function Start () {
	
}

var speed : float = 1.0;
var health : float = 100.0;

function Update () {
	Boundry();


	CheckButtonPressForVelocity();
    NoHealth();
}

function OnCollisionEnter2D(coll : Collision2D) {
    if(coll.gameObject.name == "Player 1" && Input.GetButton("Fire2")){
        //health -= 1;
    }
}

function NoHealth(){
    if(health <= 0){
        Destroy(gameObject);
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