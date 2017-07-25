#pragma strict

var checkHealth: float = 100;

var Player: UnityEngine.GameObject;

var LostHealth: float;

function Awake() {
	Player = gameObject.Find("Player 1");

}

function Start () {
	
}

function FixedUpdate() {
	
	CheckForHealth();
}


function Update () {

}


function CheckForHealth() {

	if(checkHealth != Player.GetComponent(Player_1).health){
		var currentPosition = gameObject.GetComponent(Transform).position;

		LostHealth = (checkHealth - Player.GetComponent(Player_1).health) * 0.034;

		var newPosition = currentPosition.x - LostHealth;
		gameObject.GetComponent(Transform).position = Vector2(newPosition, currentPosition.y);

		checkHealth = Player.GetComponent(Player_1).health;
	}
}

