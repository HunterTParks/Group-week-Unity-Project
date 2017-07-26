using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Audio : MonoBehaviour {

	AudioSource myAudio;

	// Use this for initialization
	void Start () {

		myAudio = GetComponent<AudioSource>();
		myAudio.clip = Resources.Load<AudioClip>("Salary Monster Theme");
		myAudio.Play ();

	}
	
	// Update is called once per frame
	void Update () {
		
	}
}
