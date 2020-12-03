    "use strict"   
    let myText = document.getElementById('myText');
    let myImage = document.getElementById('myImage');
    let myButton = document.getElementById('myButton');
    let myReset = document.getElementById('myReset');

    myButton.addEventListener('click', function(){
        main();
    })

    myReset.addEventListener('click', function(){
        myText.innerHTML = " puntje puntje puntje..."
        myImage.src = "https://i.pinimg.com/originals/16/9a/8d/169a8dfcb402415d343481e7143f932c.jpg"
    })

    function main(){
         let dezeTextWordtHet = makeThisSentence();
         myText.innerHTML = dezeTextWordtHet;
         sayItLoud(dezeTextWordtHet); // say something nice say it loud
         selectThisImage(); // show a nice image
    }
    
    
    
    function randomizer(range = 1){ 
        // Math.random geeft een waarde  0 <= waarde < 1 (dus exclusief 1)
        return Math.floor((Math.random() * range));
    }
    
    
    function makeThisSentence(){
        let index = randomizer(arrayLength);
        let woord1 = onderwerp[index];
        let woord2 = werkwoord[index];
        let woord3 = restwoord[index];
        let woord4 = Extra1[index];
        let woord5 = Extra2[index];
        let outputString = woord1 + " " + woord2 + " " + woord3 + " " + woord4 + " " + woord5;
        return outputString;
    }
    
    function selectThisImage(){
        let index = randomizer(arrayLength);
        myImage.src = plaatjes[index]; 
    }
    
    function sayItLoud (textString) {
      let message = new SpeechSynthesisUtterance(textString);
      let voices = window.speechSynthesis.getVoices();
      message.voice = voices[1];
      message.pitch = 1; // range between 0 and 2
      message.rate = 1; // range between 0.1 (lowest) and 10 (highest) 
      window.speechSynthesis.speak(message);
    }
    
    
    
    const onderwerp = ["Ik", "Jij", "Wij"];
    const werkwoord = ["hou", "houd", "houden"];
    const restwoord = ["van", "van", "van"];
    const Extra1 = ["peanut","peanut","peanut"];
    const Extra2 = ["en jou.","en van hun.","en jou."];
        
    let plaatjes = ["https://i.ytimg.com/vi/lXObmgb7BeI/maxresdefault.jpg", "https://assets.puzzlefactory.pl/puzzle/242/942/original.jpg", "https://mijnfabrikaties.files.wordpress.com/2012/02/spongebob-squarepants-movie-in-the-works-2014-release.jpg", "https://pbs.twimg.com/profile_images/782663289629212672/avedbtO7.jpg?quality=80"]
    let arrayLength = onderwerp.length;
