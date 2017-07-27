#pragma strict

var Music: UnityEngine.GameObject;

function Start () {
	endingMusic();	
}

function Update () {
	
}

function endingMusic(){
	for(var i = 0; i <= 5; i++){
		yield WaitForSeconds(4);
		Music.GetComponent(AudioLowPassFilter).cutoffFrequency -= 1000;

	}
}