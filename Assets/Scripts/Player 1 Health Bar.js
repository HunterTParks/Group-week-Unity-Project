#pragma strict

//var DeathBar: float = gameObject.GetComponent(Transform).position.x;
var checkHealth: float = 100;

//var Player: UnityEngine.GameObject = gameObject.Find("Player 1");

var Player = gameObject.Find("Player 1");

var LostHealth: float;

function Start () {
	
}

function FixedUpdate() {
	
	CheckForHealth();
}


function Update () {

}


function CheckForHealth() {

	if(checkHealth != Player.GetComponent(Player_1).health){
		Debug.Log(Player.GetComponent(Player_1).health);
		Debug.Log(checkHealth);

		var currentPosition = gameObject.GetComponent(Transform).position;

		LostHealth = (checkHealth - Player.GetComponent(Player_1).health) * 0.034;

		var newPosition = currentPosition.x - LostHealth;
		gameObject.GetComponent(Transform).position = Vector2(newPosition, currentPosition.y);

		checkHealth = Player.GetComponent(Player_1).health;
	}
}

