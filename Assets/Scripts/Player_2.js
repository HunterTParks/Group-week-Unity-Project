#pragma strict

function Start () {

}

var health : float = 100.0;
var HealthBar: float = 0;
var source: AudioSource;
var DeathSound: AudioClip;
var gameOver: UnityEngine.GameObject;

function Update () {
    NoHealth();
}

function NoHealth(){
    if(health <= 0){
    gameOver.SetActive(true);
        var anim = GetComponent(Animator);
		anim.Play("BlueDudeDeath");
		yield WaitForSeconds(6);
        Application.LoadLevel(3);
		//Destroy(gameObject);
    }

}
