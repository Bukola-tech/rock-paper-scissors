


const body = document.body;
const toggleButton = document.getElementById('switch');

function toggleMode() {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');

    localStorage.setItem('darkMode', isDarkMode);
}

toggleButton.addEventListener('click', toggleMode);

const savedDarkMode = localStorage.getItem('darkMode');
if (savedDarkMode === 'true') {
    body.classList.add('dark-mode');
}





// Define global variables to store player information
var playerName;
var selectedAvatar;

function selectAvatar(avatar) {
    var avatars = document.querySelectorAll('.avatar');
    avatars.forEach(function(avatarElement) {
        avatarElement.classList.remove('selected');
    });

  
    var selectedAvatarElement = document.getElementById('event' + avatar.charAt(avatar.length - 1));
    selectedAvatarElement.classList.add('selected');

    console.log('Selected Avatar:', avatar);
}

function moveToChoose2() {
    document.getElementById('choose1').style.display = 'none';
    var choose2Element = document.getElementById('choose2');
    choose2Element.style.display = 'flex';
    choose2Element.classList.remove('hidden');
}

function saveNameAndMoveToWelcome() {
    playerName = document.getElementById('name').value;
    selectedAvatar = document.querySelector('.avatar.selected img').src;

    var welcomeElement = document.getElementById('wel');
    welcomeElement.style.display = 'flex';
    welcomeElement.classList.remove('fade-out');
    welcomeElement.classList.add('fade-in');

    document.getElementById('playerName').innerText = playerName;
    document.getElementById('selectedAvatarImage').src = selectedAvatar;

    document.getElementById('choose2').style.display = 'none';
    document.getElementById('games').style.display = 'flex';
}

function moveToGamesDelayed() {
   
    console.log('Player Name:', playerName);
    console.log('Selected Avatar:', selectedAvatar);

    document.getElementById('wel').style.display = 'none';
    document.getElementById('games').style.display = 'flex';
}

document.getElementById('event1').addEventListener('click', function() {
    selectAvatar('avatar1');
});

document.getElementById('event2').addEventListener('click', function() {
    selectAvatar('avatar2');
});

document.getElementById('next').addEventListener('click', function() {
    moveToChoose2();
});

document.getElementById('enter').addEventListener('click', function() {
    saveNameAndMoveToWelcome();

    
    setTimeout(moveToGamesDelayed, 1000);
});


function setPlayerInfo(name, avatarSrc) {
    document.getElementById('playerName').innerText = name;
    document.getElementById('selectedAvatarImage').src = avatarSrc;
}


var playerName = "John Doe";
var avatarSrc = "./MEDIA/avatar.png";


setPlayerInfo(playerName, avatarSrc);






document.addEventListener("DOMContentLoaded", function () {
    let icon = document.getElementsByClassName("icon");
    let selected = document.getElementById("selectedChoices");
    let res = document.getElementById("outcome");
    let playerScore = 0;
    let computerScore = 0;

    document.getElementById("playerName").innerText = "Player"; // Set player name
    document.getElementById("avatarSrc").src = "./MEDIA/avatar.png"; // Set player avatar (replace with actual path)

    let choices = [["rock", "./MEDIA/rock.png"], ["paper", "./MEDIA/paper.png"], ["scissor", "./MEDIA/scissor.png"]];
    for (let i = 0; i < icon.length; i++) {
        icon[i].addEventListener("click", function () {
       // Get the user's choice based on the clicked icon
            let you = choices[i][0];

       // Generate a random index to simulate the computer's choice     
            let ram = Math.floor(Math.random() * 3);

        // Get the computer's choice based on the random index
            let comp = choices[ram][0];

            console.log(you, comp);
            

    setTimeout(function(){
                 selected.innerHTML = `
            <div class= "you"><h2>YOU</h2><span><img src="${choices[i][1]}"></span></div>
            <div class= "comp"><h2>COMPUTER</h2><span><img src="${choices[ram][1]}"></span></div>
            `;
             // Remove the 'hide' class to trigger the fade-in animation
             selected.classList.remove('hide');

             // Determine the winner and display the result in the "outcome" div slowly
         setTimeout(function(){
                if (you == comp) {
                    res.textContent = "DRAW";
                } else if ((you == "rock" && comp == "scissor") ||
                           (you == "scissor" && comp == "paper") ||
                           (you == "paper" && comp == "rock")) {
                    res.textContent = "YOU WIN";
                    playerScore++;
                } else {
                    res.textContent = "Computer Wins";
                    computerScore++;
                }
                res.classList.add('show');

            setTimeout(function () {
                // Add the 'hide' class to trigger the slide-out animation
                selected.classList.add('hide');

                // Remove the 'show' class to trigger the ease-out animation
                res.classList.remove('show');


                 
                setTimeout(()=>{

                    // Debugging statements
                    console.log("Player Score:", playerScore);
                    console.log("Computer Score:", computerScore);

                    // Update the score in the HTML
                    document.getElementById("playerScore").innerHTML = playerScore;
                    document.getElementById("computerScore").innerHTML = computerScore;


                    
                 },1000)

            }, 1000)
               
        },1000)
            
    },1500)
   

        });
    }
});
