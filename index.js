function myFunction(){

	setTimeout(function(){
 	var main1 = document.getElementById("main1");
 	main1.setAttribute('style','animation-name: maina; animation-duration: 3s;');
 	}, 1000); //1000

	setTimeout(function(){
 	var main = document.getElementById("main");
 	main.setAttribute('style','visibility:hidden');
 	
 	}, 1600);// 1600

 	setTimeout(function(){
 	var main = document.getElementById("main1");
 	main1.remove()

 	document.getElementById("top").setAttribute('style','visibility:visible');
 	document.getElementById("open").setAttribute('style','visibility:visible;animation: opena; animation-duration: 3s; animation-fill-mode:forwards;');
 	
 	}, 3600);// 3600

 	setTimeout(function(){

 	
 	document.getElementById("top").setAttribute('style','visibility:visible;transform: rotateZ(35deg);');
 	document.getElementById("open").setAttribute('style','visibility:hidden');
 	document.getElementById("back").setAttribute('style','visibility:visible');
 	document.getElementById("bb").setAttribute('fill','#c6c2be');
 	
 	}, 5600);// 3600

}