let hover = document.getElementsByClassName('services__item');

for (i=0; i < hover.length; i++){
	hover[i].onmouseover = function(){
		this.classList.add ('item-services_green');
		// this.style.color = 'white';

	}
	hover[i].onmouseout = function(){
		this.classList.remove ('item-services_green');
	}
}

// for (i=0; i < title.length; i++){
// 	title[i].onmouseover = function(){
// 		this.style.color = 'white';
// 	}
// 	title[i].onmouseout = function(){
// 		this.style.color = '';
// 	}
// }
// for (i=0; i < hover.length; i++){
// 	hover[i].onmouseover = function(){
// 		this.style.background = green;
// 	}
// 	hover[i].onmouseout = function(){
// 		this.style.background = '';
// 	}
// }
