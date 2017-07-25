#pragma strict

var speed: float = 1.0;

function Start () {
	
}

function Update () {
	Boundry();
}


function Boundry(){
	var boundry = gameObject.GetComponent(Transform).position;
	var move = Vector3(Input.GetAxis("Horizontal2"), Input.GetAxis("Vertical2"), 0);

    if(boundry.y > -6.2&& Input.GetAxis("Vertical2") > 0){
    		gameObject.transform.position = Vector2(boundry.x,-6);
    }	else if (boundry.y < -6.95 && Input.GetAxis("Vertical2") < 0 ){
    		gameObject.transform.position = Vector2(boundry.x,-6.9);
    }	else if (boundry.x < -11.65 && Input.GetAxis("Horizontal2") < 0){
    		gameObject.transform.position = Vector2(-12.35, boundry.y);
    }	else if (boundry.x > 3 && Input.GetAxis("Horizontal2") > 0){
    		gameObject.transform.position = Vector2(3.8, boundry.y);
    } 	else {
    	Move();
    }

}

function Move(){
    var move = Vector3(Input.GetAxis("Horizontal2"), Input.GetAxis("Vertical2"), 0);
    transform.position += move * speed * Time.deltaTime;

}

