let rl = require('readline-sync');
//req one of the dependencies that you have already installed 
//extractig the content of realine- sync and sotring it into the variable

let pts = 0;
let currentLevel = 0; 


function tryAgain() {
    let tryIt = rl.question();
    return tryIt;
}


function checkTheInput(levelNum, actionType) {
    if (actionType = "h")
    {
        return heroic(levelNum);
    }
    else if (actionType = "c")
    {
        return cow(levelNum);
    }
    else if (actionType = "n")
    {
        return neut(levelNum);
    }

}

if (playerChoice == "a" && initChoice == 'attend') 
{
    let aALevelOne = rl.question("\nIt is a warm day. You are paying attention, unlike most of the class. Your buddy Richie is taking notes, Joey is texting, Susan and Vickie are whispering about...**BOOM** Joey's phone erupts into white hot flames. You recognize that although you've heard that the new phones have a propensity for catching on fire, this fire is different, then it hits you. IT'S Hotstreak, you have to act fast!\nQuick, DO YOU:\n(A) Run out of class gear up and come back to fight\n(B) Stay in class, you don't want the smoke\n\t");  
        if(aALevelOne == "a")
        {
            currentLevel++;
            heroic(1);
            console.log("You fight Hotstreak, barely leave with your life, but the school is safe...then you are sent to detention for ditching class\n");

        }
        else{
            cow(1);
            var aALevelTwo = rl.question("\nThe teacher, mistakenly thinking that the loud bang was another student falling out of their chair, slowly turns around. He realizes that the noise was from a fire and rushes to get the fire extinguisher in the back corner. He is having trouble, you aren't the biggest guy in the room but you can slyly use a quick jolt of electricity to magnetize the door and open the fire extinguisher.\nDO YOU:\n(A) Get up and help\n(B) Leave the teacher to do it himself\n\t");
            if (aALevelTwo == "a")
            {
                currentLevel++;
                heroic(2);
                let aALevelThree = rl.question("\nYou are able to get the fire extinguisher open, but it is not strong enough. The room is saved but Hotstreak is now on the campus.\nDo You:\n(A) Run into a locker room, gear up and fight him\n(B) Leave School\n\t")
                if(aALevelThree == "a") {
                    heroic(3);
                    currentLevel++
                    console.log("\nYou fight him, save the school and are then placed in detention for leaving campus without permission and then grounded for attempting to leave school\n")
                }
                else {
                    //leave school
                    currentLevel++
                    cow(3);
                    console.log("\nHotstreak burns the school down and the children are all forced to attend the much more dangerous school accross town\n");
                }
            }
            else {
                //leave teacher to do it
                currentLevel++;
                cow(2);
                console.log("\nThe teacher takes too long, and although the sprinklers come on, the fire, being an offshoot of Hotstreak, burns the school\n")
            }
        }
}