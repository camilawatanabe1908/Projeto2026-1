

const scriptsInEvents = {

	async FFase1_Event10_Act2(runtime, localVars)
	{
		//obter o valor da váriavel vidas
		let vida = runtime.globalVars.Vidas;
		
		//reduz 1 vida
		vida --;
		
		//atualizar váriavel global
		runtime.globalVars.Vidas = vida;
		if (vida<=0){
			runtime.goToLayout("Game Over");
		}
	},

	async FFase1_Event15_Act2(runtime, localVars)
	{
		//obter o valor da váriavel vidas
		let vida = runtime.globalVars.Vidas;
		
		//reduz 1 vida
		vida --;
		
		//atualizar váriavel global
		runtime.globalVars.Vidas = vida;
		if (vida<=0){
			runtime.goToLayout("Game Over");
		}
	},

	async FFase1_Event24_Act2(runtime, localVars)
	{
		//obter o valor da váriavel vidas
		let vida = runtime.globalVars.Vidas;
		
		//reduz 1 vida
		vida --;
		
		//atualizar váriavel global
		runtime.globalVars.Vidas = vida;
		if (vida<=0){
			runtime.goToLayout("Game Over");
		}
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
