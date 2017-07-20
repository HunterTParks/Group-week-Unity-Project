using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LoadOnClick : MonoBehaviour {

	public GameObject loadingImage;

	public void LoadScene(int Level)
	{
		loadingImage.SetActive (true);
		Application.LoadLevel (Level);
	}
}
