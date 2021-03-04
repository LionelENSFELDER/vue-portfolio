window.onload = function() {
  // const typed = new Typed('.feature-title', {
  //   stringsElement: 'Hello'
  // });
  const options = {
    strings: [
      'Je préfère la qualité à la quantité...',
      'Je préfère le Seigneur des anneaux à Star Wars.',
      'Je prends le temps qu\'il faut pour faire de l\'exercice.',
      'Je prends le temps qu\'il faut pour cuisiner.',
      'Je bichonne mon sommeil.',
      'Je bichonne mon ordinateur.',
      'Je suis accro à Reddit.',
      'Je suis accro au café.',
      'Je change tout le temps de navigateur.',
      'Je fais la différence entre 60hz et 144hz.',
      'Je suis papa d\'un petit gars adorable.',
      'Je ne tweet pas...',
      '#TeamCherryMxBrown.',
      '#TeamVSCode.',
      '#JeSuisPasséChezSosh',
    ],
    typeSpeed: 70,
    backSpeed: 40,
    smartBackspace: true,
    loop: true,
    showCursor: false
  };
  
  const typed = new Typed('.feature-title', options);
}