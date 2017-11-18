
//initial sound
 var $audioCharacter = document.createElement('audio');
 $audioCharacter.setAttribute('src', 'assets/sounds/call_of_duty.mp3');

// Logic  

var score = 0;
var playersChoice;

var readable = {
    '0' : 'Rock',
    '1' : 'Paper',
    '2' : 'Scissors'
};

var cpuChoice = {
    init: function(){
      this.store = Math.floor(Math.random() * 3);
      this.text = readable[this.store];  
    },
    store: '',
    text: ''
};

var order = [0, 1, 2, 0];

var chooseWinner = function(player, cpu){
    if(order[player] === order[cpu]) {
        return 'THAT WAS A TIE, Try again.';
    }
    if (order[player] === order[cpu + 1]){
        score++;
        return 'YOU WON!'; 
    } else {
        score--;
        return 'YOU LOST! Try again';
    }
}

//test
// console.log(chooseWinner(1, 2));

//UI

var paragraph = document.querySelector('p');

var assignClick = function(tag, pos){
    tag.addEventListener('click', function(){
        playersChoice = pos;
        cpuChoice.init();
        paragraph.innerText = chooseWinner(playersChoice, cpuChoice.store);
        paragraph.innerText += '\n\n' + 'SCORE: ' + score;
        var $audioCharacter = document.createElement('audio');
        $audioCharacter.setAttribute('src', 'assets/sounds/click.mp3');
        $audioCharacter.play();
    });
}

var images = {
    tags: document.getElementsByTagName('img'),
    init: function(){
        for(var step = 0; step < this.tags.length; step++) {
            assignClick(this.tags[step], step);
        }
    }
}

//This are the functions that activate when the application starts
$audioCharacter.play();
images.init();