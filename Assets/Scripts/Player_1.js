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
}

var speed : float = 1.0;
var health : float = 100.0;
var HealthBar: float = 0;

function Update () {
    //Boundry();
    NoHealth();
}

function NoHealth(){
    if(health <= 0){
        Destroy(gameObject);
    }
}

function TravelRight(){
	gameObject.transform.Find("Head-front").GetComponent(SpriteRenderer).sprite = headRight;
	gameObject.transform.Find("Head-front").GetComponent(FixedJoint2D).anchor.x = -1.28;
	gameObject.transform.Find("Chest").GetComponent(SpriteRenderer).sprite = chestRight;
	gameObject.transform.Find("Right-leg").GetComponent(SpriteRenderer).sprite = legRight;
	gameObject.transform.Find("Right-leg").GetComponent(FixedJoint2D).anchor.x = -1.28;
	gameObject.transform.Find("Left-leg").GetComponent(SpriteRenderer).sprite = legBackR;
	gameObject.transform.Find("Left-leg").GetComponent(FixedJoint2D).anchor.x = 1.65;
	gameObject.transform.Find("Left-leg").GetComponent(FixedJoint2D).connectedAnchor.x = 1.54;
	gameObject.transform.Find("Right-arm").GetComponent(SpriteRenderer).sprite = armRight;
	gameObject.transform.Find("Right-arm").GetComponent(FixedJoint2D).anchor.x = 2.22;
	gameObject.transform.Find("Right-arm").GetComponent(FixedJoint2D).connectedAnchor.x = 2.56;
	gameObject.transform.Find("Right-arm").GetComponent(Transform).position.z = 1;
	gameObject.transform.Find("Left-arm").GetComponent(SpriteRenderer).sprite = armLeft;
	gameObject.transform.Find("Left-arm").GetComponent(FixedJoint2D).anchor.x = 1.24;
	gameObject.transform.Find("Left-arm").GetComponent(FixedJoint2D).connectedAnchor.x = -2.49;
	gameObject.transform.Find("Left-arm").GetComponent(Transform).position.z = -1;

}

function TravelLeft(){
	gameObject.transform.Find("Head-front").GetComponent(SpriteRenderer).sprite = headLeft;
	gameObject.transform.Find("Chest").GetComponent(SpriteRenderer).sprite = chestLeft;
	gameObject.transform.Find("Head-front").GetComponent(FixedJoint2D).anchor.x = 0.92;
	gameObject.transform.Find("Head-front").GetComponent(FixedJoint2D).connectedAnchor.x = -0.04000043;
	gameObject.transform.Find("Left-leg").GetComponent(SpriteRenderer).sprite = legLeft;
	gameObject.transform.Find("Left-leg").GetComponent(FixedJoint2D).anchor.x = 1.56;
	gameObject.transform.Find("Left-leg").GetComponent(FixedJoint2D).connectedAnchor.x = 1.24;
	gameObject.transform.Find("Right-leg").GetComponent(SpriteRenderer).sprite = legBackR;
	gameObject.transform.Find("Right-leg").GetComponent(FixedJoint2D).anchor.x = -1.42;
	gameObject.transform.Find("Right-leg").GetComponent(FixedJoint2D).connectedAnchor.x = 1.24;
	gameObject.transform.Find("Left-arm").GetComponent(SpriteRenderer).sprite = armLeft;
	gameObject.transform.Find("Left-arm").GetComponent(FixedJoint2D).anchor.x = 2.24;
	gameObject.transform.Find("Left-arm").GetComponent(FixedJoint2D).connectedAnchor.x = -2.49;
	gameObject.transform.Find("Left-arm").GetComponent(Transform).position.z = 1;
	gameObject.transform.Find("Right-arm").GetComponent(SpriteRenderer).sprite = armRight;
	gameObject.transform.Find("Right-arm").GetComponent(FixedJoint2D).anchor.x = -2.9;
	gameObject.transform.Find("Right-arm").GetComponent(FixedJoint2D).connectedAnchor.x = -2.49;
	gameObject.transform.Find("Right-arm").GetComponent(Transform).position.z = -1;
}

function TravelUp(){
	gameObject.transform.Find("Head-front").GetComponent(SpriteRenderer).sprite = headBack;
	gameObject.transform.Find("Head-front").GetComponent(FixedJoint2D).anchor.x = -0.01;
	gameObject.transform.Find("Head-front").GetComponent(FixedJoint2D).connectedAnchor.x = -0.04000043;
	gameObject.transform.Find("Chest").GetComponent(SpriteRenderer).sprite = chestBack;
	gameObject.transform.Find("Left-leg").GetComponent(SpriteRenderer).sprite = legBackL;
	gameObject.transform.Find("Left-leg").GetComponent(FixedJoint2D).anchor.x = 0.42;
	gameObject.transform.Find("Left-leg").GetComponent(FixedJoint2D).connectedAnchor.x = -1.04;
	gameObject.transform.Find("Right-leg").GetComponent(SpriteRenderer).sprite = legBackR;
	gameObject.transform.Find("Right-leg").GetComponent(FixedJoint2D).anchor.x = 0;
	gameObject.transform.Find("Right-leg").GetComponent(FixedJoint2D).connectedAnchor.x = 1.24;
	gameObject.transform.Find("Left-arm").GetComponent(SpriteRenderer).sprite = armBackL;
	gameObject.transform.Find("Left-arm").GetComponent(FixedJoint2D).anchor.x = -0.35;
	gameObject.transform.Find("Left-arm").GetComponent(FixedJoint2D).connectedAnchor.x = -2.49;
	gameObject.transform.Find("Right-arm").GetComponent(SpriteRenderer).sprite = armBackR;
	gameObject.transform.Find("Right-arm").GetComponent(FixedJoint2D).anchor.x = -0.28;
	gameObject.transform.Find("Right-arm").GetComponent(FixedJoint2D).connectedAnchor.x = 2.56;
}

function TravelDown(){
	gameObject.transform.Find("Head-front").GetComponent(SpriteRenderer).sprite = headFront;
	gameObject.transform.Find("Head-front").GetComponent(FixedJoint2D).anchor.x = -0.01;
	gameObject.transform.Find("Head-front").GetComponent(FixedJoint2D).connectedAnchor.x = -0.04000043;
	gameObject.transform.Find("Chest").GetComponent(SpriteRenderer).sprite = chestFront;
	gameObject.transform.Find("Left-leg").GetComponent(SpriteRenderer).sprite = legFrontL;
	gameObject.transform.Find("Left-leg").GetComponent(FixedJoint2D).anchor.x = 0.42;
	gameObject.transform.Find("Left-leg").GetComponent(FixedJoint2D).connectedAnchor.x = -1.04;
	gameObject.transform.Find("Right-leg").GetComponent(SpriteRenderer).sprite = legFrontR;
	gameObject.transform.Find("Right-leg").GetComponent(FixedJoint2D).anchor.x = 0;
	gameObject.transform.Find("Right-leg").GetComponent(FixedJoint2D).connectedAnchor.x = 1.24;
	gameObject.transform.Find("Left-arm").GetComponent(SpriteRenderer).sprite = armFrontL;
	gameObject.transform.Find("Left-arm").GetComponent(FixedJoint2D).anchor.x = -0.35;
	gameObject.transform.Find("Left-arm").GetComponent(FixedJoint2D).connectedAnchor.x = -2.49;
	gameObject.transform.Find("Right-arm").GetComponent(SpriteRenderer).sprite = armFrontR;
	gameObject.transform.Find("Right-arm").GetComponent(FixedJoint2D).anchor.x = -0.28;
	gameObject.transform.Find("Right-arm").GetComponent(FixedJoint2D).connectedAnchor.x = 2.56;
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
