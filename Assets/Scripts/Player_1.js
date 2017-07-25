#pragma strict

function Start () {

}

//head
var headRight: Sprite;
var headLeft: Sprite;
var headBack: Sprite;
var headFront: Sprite;
//chest
var chestRight: Sprite;
var chestLeft: Sprite;
var chestBack: Sprite;
var chestFront: Sprite;
//arms
var armRight: Sprite;
var armLeft: Sprite;
var armFrontL: Sprite;
var armFrontR: Sprite;
var armBackL: Sprite;
var armBackR: Sprite;
//legs
var legRight: Sprite;
var legLeft: Sprite;
var legFrontL: Sprite;
var legFrontR: Sprite;
var legBackL: Sprite;
var legBackR: Sprite;

function Awake () {
	//testSprite = gameObject.transform.Find("Chest").GetComponent(SpriteRenderer).sprite;
}

var currentSprite: Sprite;
var speed : float = 1.0;
var health : float = 100.0;
var HealthBar: float = 0;

function Update () {
    //Boundry();
    //NoHealth();
}

function FixedUpdate() {
	//if(Player3IsKnockedBack === true){
	        //XVelocity--;
	        //if(XVelocity < 0){
	        //	XVelocity++;
	       // } else if (XVelocity > 0){
	        //	XVelocity--;
	        //}
	        //gameObject.Find("Player 3").GetComponent(Rigidbody2D).velocity = new Vector2(XVelocity, 0);
	    //}
}

function TravelRight(){
		gameObject.transform.Find("Head-front").GetComponent(SpriteRenderer).sprite = headRight;
        gameObject.transform.Find("Chest").GetComponent(SpriteRenderer).sprite = chestRight;
        gameObject.transform.Find("Right-leg").GetComponent(SpriteRenderer).sprite = legRight;
        gameObject.transform.Find("Left-leg").GetComponent(SpriteRenderer).sprite != legLeft;
        gameObject.transform.Find("Right-arm").GetComponent(SpriteRenderer).sprite = armRight;
        gameObject.transform.Find("Left-arm").GetComponent(SpriteRenderer).sprite != armLeft;
	}

function TravelLeft(){
		gameObject.transform.Find("Head-front").GetComponent(SpriteRenderer).sprite = headLeft;
        gameObject.transform.Find("Chest").GetComponent(SpriteRenderer).sprite = chestLeft;
        gameObject.transform.Find("Left-leg").GetComponent(SpriteRenderer).sprite = legLeft;
        gameObject.transform.Find("Left-arm").GetComponent(SpriteRenderer).sprite = armLeft;
	}

function TravelUp(){
		gameObject.transform.Find("Head-front").GetComponent(SpriteRenderer).sprite = headBack;
        gameObject.transform.Find("Chest").GetComponent(SpriteRenderer).sprite = chestBack;
        gameObject.transform.Find("Left-leg").GetComponent(SpriteRenderer).sprite = legBackL;
        gameObject.transform.Find("Right-leg").GetComponent(SpriteRenderer).sprite = legBackR;
        gameObject.transform.Find("Left-arm").GetComponent(SpriteRenderer).sprite = armBackL;
        gameObject.transform.Find("Right-arm").GetComponent(SpriteRenderer).sprite = armBackR;
	}

function TravelDown(){
		gameObject.transform.Find("Head-front").GetComponent(SpriteRenderer).sprite = headFront;
        gameObject.transform.Find("Chest").GetComponent(SpriteRenderer).sprite = chestFront;
        gameObject.transform.Find("Left-leg").GetComponent(SpriteRenderer).sprite = legFrontL;
        gameObject.transform.Find("Right-leg").GetComponent(SpriteRenderer).sprite = legFrontR;
        gameObject.transform.Find("Left-arm").GetComponent(SpriteRenderer).sprite = armFrontL;
        gameObject.transform.Find("Right-arm").GetComponent(SpriteRenderer).sprite = armFrontR;
	}

function OnCollisionEnter2D(coll: Collision2D){
    if(coll.gameObject.name == "Player 3" && Input.GetButton("Fire1")){
        Player3KnockBack(coll);
        coll.gameObject.GetComponent(Player_2).health-=10;
   }
}

//function Move(){
   // var move = Vector3(Input.GetAxis("Horizontal"), Input.GetAxis("Vertical"), 0);
   // transform.position += move * speed * Time.deltaTime;

//}

//function Boundry(){
	//var boundry = gameObject.GetComponent(Transform).position;
	//var move = Vector3(Input.GetAxis("Horizontal"), Input.GetAxis("Vertical"), 0);

   // if(boundry.y > -6.3 && Input.GetAxis("Vertical") > 0){
    		//Debug.Log("too far up");
   // }	else if (boundry.y < -7.62 && Input.GetAxis("Vertical") < 0){

   // }	else if (boundry.x < -12.9 && Input.GetAxis("Horizontal") < 0){
    		//Debug.Log("too far left");
    //}	else if (boundry.x > 4.34 && Input.GetAxis("Horizontal") > 0){
    		//Debug.Log("too far right");
    //} 	else {
   // 	Move();
    //}

//}
