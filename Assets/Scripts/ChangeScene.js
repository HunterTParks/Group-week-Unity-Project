#pragma strict

function Start () {
	yield WaitForSeconds(20);
	BackToMainMenu();
}

function Update () {
	
}

function BackToMainMenu(){
	Application.LoadLevel(0);
}