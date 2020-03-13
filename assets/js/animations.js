//ANIMATIONS
function animate(element,event,effect){
	element.addEventListener(event, function(){
		element.classList.add('magictime', effect);
		setTimeout(function() {
			element.classList.remove('magictime', effect)
		}, 1500);
	})
}

const featureImage = document.getElementById('featureImage');
const featurePragraph = document.getElementById('featurePragraph');

// animate(featureImage,'mouseover','perspectiveUp');
// animate(featurePragraph,'mouseover','vanishIn');