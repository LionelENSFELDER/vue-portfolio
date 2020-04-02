document.onreadystatechange = function () {
    
	if(document.readyState === "complete"){

		window.addEventListener('scroll', function() {
            const navbar = document.getElementsByTagName("header");
    
            if(window.scrollY <= 80){
                navbar[0].classList.remove('hard-dark');
            }else{
                navbar[0].classList.add("hard-dark");
            }
    
        })

    }
    
};