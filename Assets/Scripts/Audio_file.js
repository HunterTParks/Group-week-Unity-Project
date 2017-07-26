#pragma strict

var Player1: UnityEngine.GameObject;
var Player2: UnityEngine.GameObject;
var BackGround: UnityEngine.GameObject;

function Start () {
	
}

function Update () {
	if(Player1.GetComponent(Player_1).health < 25 || Player2.GetComponent(Player_2).health < 25){
		gameObject.GetComponent(AudioSource).pitch = 0.75;
		BackGround.GetComponent(SpriteRenderer).color = Color32(229, 8, 8, 255);
	}
}

function changePitchNearDeath(){

}
