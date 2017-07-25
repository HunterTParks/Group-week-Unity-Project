#pragma strict

var speed: float = 1.0;


function Start () {
	
}

function Update () {
	Boundry();
}

function Boundry(){
	var boundry = gameObject.GetComponent(Transform).position;
	var move = Vector3(Input.GetAxis("Horizontal"), Input.GetAxis("Vertical"), 0);

    if(boundry.y > -6.3 && Input.GetAxis("Vertical") > 0){
    }	else if (boundry.y < -7.62 && Input.GetAxis("Vertical") < 0){
    }	else if (boundry.x < -12.9 && Input.GetAxis("Horizontal") < 0){
    }	else if (boundry.x > 4.34 && Input.GetAxis("Horizontal") > 0){
    } 	else {
    	Move();
    }
}

function Move(){
	var move = Vector3(Input.GetAxis("Horizontal"), Input.GetAxis("Vertical"), 0);
    transform.position += move * speed * Time.deltaTime;
}
