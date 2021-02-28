window.onload = function() {
  // const typed = new Typed('.feature-title', {
  //   stringsElement: 'Hello'
  // });
  const options = {
    strings: [
      'Je préfère la qualité à la quantité...',
      'Je prends le temps qu\'il faut pour faire de l\'exercice.',
      'Je bichonne mon sommeil.',
      'Je traine souvent sur Reddit.',
      'Je change tout le temps de navigateur.',
      'Je suis papa d\'un petit ga adorable.',
      'Je bois trop de café.'
    ],
    typeSpeed: 70,
    backSpeed: 40,
    smartBackspace: true,
    loop: true
  };
  
  const typed = new Typed('.feature-title', options);
}