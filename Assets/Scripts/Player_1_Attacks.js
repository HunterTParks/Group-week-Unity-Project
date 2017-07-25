#pragma strict

function Start () {
	
}

function Update () {
	
}


function Punch(coll: Collision2D) {
	coll.gameObject.GetComponent(Player_2).health -= 5;
}

function Kick(coll: Collision2D) {
	coll.gameObject.GetComponent(Player_2).health -= 10;
}