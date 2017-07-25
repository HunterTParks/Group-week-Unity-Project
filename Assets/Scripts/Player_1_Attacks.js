#pragma strict

var coolDownCounterPunch: float = 1;
var coolingDownPunch: boolean = false;

var coolDownCounterKick: float = 3;
var coolingDownKick: boolean = false;

var coolDownCounterSpecial: float = 5;
var coolingDownSpecial: boolean = false;



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
	coolDownCounterSpecial -= Time.deltaTime;
	if(coolDownCounterSpecial <= 0) {
		coolingDownSpecial = true;
	}
}


function Punch(coll: Collision2D) {
	if(coolingDownPunch == true){
		coll.gameObject.GetComponent(Player_2).health -= 5;
		coolingDownPunch = false;
		coolDownCounterPunch = 1;
		//GetComponent.<Animation>().Play("PurpleManPunch");
		var anim = GetComponent(Animator);
		anim.Play("PurpleManPunch");
	}
}

function Kick(coll: Collision2D) {
	if(coolingDownKick == true){
		coll.gameObject.GetComponent(Player_2).health -= 10;
		coolingDownKick = false;
		coolDownCounterKick = 1;
	}
}

function Special(coll: Collision2D) {
	if(coolingDownSpecial == true){
		coll.gameObject.GetComponent(Player_2).health -= 25;
		coolingDownSpecial = false;
		coolDownCounterSpecial = 5;
	}
}