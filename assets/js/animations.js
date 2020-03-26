//animate elements when visible in viewport
let callback = function(entries, observer) { 
	entries.forEach(entry => {

		if(entry.isIntersecting === true){

			entry.target.style.visibility = "visible";
			entry.target.classList.add('animated');
			//console.log('isIntersecting of ' + entry + ' is true');

			if(entry.target.classList.contains('animated-fadeInLeft')){

				entry.target.classList.add('fadeInLeft');

			}if(entry.target.classList.contains('animated-fadeInRight')){

				entry.target.classList.add('fadeInRight');

			}if(entry.target.classList.contains('animated-fadeInUp')){

				entry.target.classList.add('fadeInUp');

			}if(entry.target.classList.contains('animated-fadeInDown')){

				entry.target.classList.add('fadeInDown');

			}

		}else if(entry.isIntersecting === false){
			console.log('isIntersecting of ' + entry + ' is false');

			entry.target.style.visibility = "hidden";

			entry.target.classList.remove('animated', 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'fadeInDown');

		}
	});
};

//observer need option object...
const options = {
  root: null,
  rootMargin: '0px',
  threshold:  0
};

window.onload = function() {
	//event observer...
	const observer = new IntersectionObserver(callback, options);

	const animationsTargets = document.querySelectorAll('[class*="animated-"]');

	//console.log("animationsTargets= " + animationsTargets.length);

	animationsTargets.forEach(function(currentValue){
		observer.observe(currentValue);
	})

	//particles animation...
	Particles.init({
		selector: '.particles',
		connectParticles: true,
		sizeVariations: 1,
		speed: 1,
		color: ['#EA00D9']
	});
  
};