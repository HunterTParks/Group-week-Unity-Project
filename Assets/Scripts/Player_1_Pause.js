#pragma strict

var canvas: UnityEngine.GameObject;

function Start () {
	
}

function Update () {
	Pause();
}

function Pause(){
	if(Input.GetButtonDown("Start")){
		if(Time.timeScale == 0){
			Time.timeScale = 1;
			canvas.SetActive(true);

		} else {
			Time.timeScale = 0;
			canvas.SetActive(false);
		}
	}

}