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

function FixedUpdate() {

}

function TravelRight(){
		gameObject.transform.Find("Head-front").GetComponent(SpriteRenderer).sprite = headRight;
        gameObject.transform.Find("Chest").GetComponent(SpriteRenderer).sprite = chestRight;
        gameObject.transform.Find("Right-leg").GetComponent(SpriteRenderer).sprite = legRight;
        gameObject.transform.Find("Right-arm").GetComponent(SpriteRenderer).sprite = armRight;
	}

function TravelLeft(){
		gameObject.transform.Find("Head-front").GetComponent(SpriteRenderer).sprite = headLeft;
        gameObject.transform.Find("Chest").GetComponent(SpriteRenderer).sprite = chestLeft;
        gameObject.transform.Find("Left-leg").GetComponent(SpriteRenderer).sprite = legLeft;
        gameObject.transform.Find("Left-arm").GetComponent(SpriteRenderer).sprite = armLeft;
        gameObject.transform.Find("Left-arm").GetComponent(Transform).position.x = gameObject.GetComponent(Transform).position.x;
        gameObject.transform.Find("Left-arm").GetComponent(SpriteRenderer).flipX = true;
	}

function TravelUp(){
		gameObject.transform.Find("Head-front").GetComponent(SpriteRenderer).sprite = headBack;
        gameObject.transform.Find("Chest").GetComponent(SpriteRenderer).sprite = chestBack;
        gameObject.transform.Find("Left-leg").GetComponent(SpriteRenderer).sprite = legBackL;
        gameObject.transform.Find("Right-leg").GetComponent(SpriteRenderer).sprite = legBackR;
        gameObject.transform.Find("Left-arm").GetComponent(SpriteRenderer).sprite = armBackR;
        gameObject.transform.Find("Right-arm").GetComponent(SpriteRenderer).sprite = armBackL;
	}

function TravelDown(){
		gameObject.transform.Find("Head-front").GetComponent(SpriteRenderer).sprite = headFront;
        gameObject.transform.Find("Chest").GetComponent(SpriteRenderer).sprite = chestFront;
        gameObject.transform.Find("Left-leg").GetComponent(SpriteRenderer).sprite = legFrontL;
        gameObject.transform.Find("Right-leg").GetComponent(SpriteRenderer).sprite = legFrontR;
        gameObject.transform.Find("Left-arm").GetComponent(SpriteRenderer).sprite = armFrontR;
        gameObject.transform.Find("Right-arm").GetComponent(SpriteRenderer).sprite = armFrontL;
	}

