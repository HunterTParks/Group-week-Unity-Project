#pragma strict

var coolDownCounterPunch: float = 1;
var coolingDownPunch: boolean = false;

var coolDownCounterKick: float = 3;
var coolingDownKick: boolean = false;

function Start () {
	
}

function Update () {
	coolDownCounterPunch -= Time.deltaTime;
	if(coolDownCounterPunch <= 0) {
		coolingDownPunch = true;
	}
	coolDownCounterKick -= Time.deltaTime;
	if(coolDownCounterKick <= 0) {
		coolingDownKick = true;
	}

	if(Input.GetKeyDown ("v")){
		PunchAnimation();
	}
	if(Input.GetKeyDown ("c")){
		KickAnimation();
	}
}


function PunchAnimation () {
	if(gameObject.GetComponent(Player_2_Collision).Direction == 0 || gameObject.GetComponent(Player_2_Collision).Direction == 3){
		var anim = GetComponent(Animator);
		anim.Play("BlueManPunchLeft");
	} else if(gameObject.GetComponent(Player_2_Collision).Direction == 1 || gameObject.GetComponent(Player_2_Collision).Direction == 2){
		var anime = GetComponent(Animator);
		anime.Play("BlueManPunch");
	}
};

function KickAnimation () {
	if(gameObject.GetComponent(Player_2_Collision).Direction == 0 || gameObject.GetComponent(Player_2_Collision).Direction == 3){
		var anim = GetComponent(Animator);
		anim.Play("BlueManKickLeft");
	} else if(gameObject.GetComponent(Player_2_Collision).Direction == 1 || gameObject.GetComponent(Player_2_Collision).Direction == 2){
		var anime = GetComponent(Animator);
		anime.Play("BlueManKickRight");
	}
};


function Punch(coll: Collision2D){
	if(coolingDownPunch == true){
		coll.gameObject.GetComponent(Player_1).health -= 5;
		coolingDownPunch = false;
		coolDownCounterPunch = 1;
	}
}

function Kick(coll: Collision2D) {
	if(coolingDownKick == true){
	coll.gameObject.GetComponent(Player_1).health -= 10;
	coolingDownKick = false;
	coolDownCounterKick = 1;
	}
}
