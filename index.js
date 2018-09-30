let rl = require('readline-sync');
//req one of the dependencies that you have already installed 
//extractig the content of realine- sync and sotring it into the variable


do {
        
    console.log("\n\nWelcome to DC Comic's Totally and Completely Official Static Shock Console Game!\n\n********************************************************************************\n");

    console.log("In This game you will choose a character, Virgil \"Static Shock\" or Richard \'Gear\" and simulate through a day in their adventurous life. So First read about each and then decide who to be! Enjoy!\n");

   
    rl.keyInPause("\n***");
  
    console.log("a - Virgil \"Static Shock\" Hawkins a high school student in Dakota City. As a result of accidental exposure to an experimental mutagen in an event known as the Big Bang, he gained the ability to control and manipulate electromagnetism, and uses these powers to become a superhero named \"Static.\" Countless others who were also exposed also gained a wide variety of mutations and abilities, and Static spends much of his time dealing with these \"Bang Babies\", many of whom use their abilities in selfish, harmful, and even criminal ways.")

    rl.keyInPause("\n***");

    console.log("\nb - Richard \"Gear\" Foley Virgil's best friend and confidant. At first, he merely provides support for his friend, making gadgets for him and helping to cover for Virgil to protect his secret identity. Richie's passive exposure to the Bang Gas gave him enhanced intelligence, which enabled him to easily invent rocket-powered boots and \"Backpack\", a highly intelligent multipurpose device worn on the back capable of surveillance and other semi-independent activity. With this equipment, he adopted the superhero identity \"Gear\" and becomes Static's full-time partner in crime-fighting.");
       
    let playerChoice = pickPlayer();
    rl.keyInPause("\n***");
    let initChoice = beginGame();
    
        //for users who choose Static 
        if (playerChoice == "a" && initChoice == 'attend') 
        {
            console.log("Static stayed in school")
            let aALevelOne = rl.question("\nIt is a warm day. ou are paying attention, unlike most of the class. Your buddy Richie is taking notes, Joey is texting, Susan and Vickie are whispering about...**BOOM** Joey's phone erupts into white hot flames. You recognize that although you've heard the new phones have a propensity for catching on fire, this fire is different, then it hits you. IT'S Hotstreak, you have to act fast!\nQuick, DO YOU:\n(A) Run out of class gear up and come back to fight\n(B) Stay in class, you don't want the smoke\n\t");  
                if(aALevelOne == "a")
                {
                    console.log("You fight Hotstreak, barely leave with your life, but the school is safe...then you are sent to detention for ditching class\n");

                }
                else{
                    var aALevelTwo = rl.question("\nThe teacher, mistakenly thinking that the loud bang was another student falling out of their chair, slowly turns around. He realizes that the noise was from a fire and rushes to get the fire extinguisher in the back corner. He is having trouble, you aren't the biggest guy in the room but you can slyly use a quick jolt of electricity to magnetize the door and open the fire extinguisher.\nDO YOU:\n(A) Get up and help\n(B) Leave the teacher to do it himself\n\t");
                    if (aALevelTwo == "a")
                    {
                        let aALevelThree = rl.question("\nYou are able to get the fire extinguisher open, but it is not strong enough. The room is saved but Hotstreak is now on the campus.\nDo You:\n(A) Run into a locker room, gear up and fight him\n(B) Leave School\n\t")
                        if(aALevelThree == "a") {
                            console.log("\nYou fight him, save the school and are then placed in detention for leaving campus without permission and then grounded for attempting to leave school\n")
                        }
                        else {
                            //leave school
                            console.log("\nHotstreak burns the school down and the children are all forced to attend the much more dangerous school accross town\n");
                        }
                    }
                    else {
                        //leave teacher to do it
                        console.log("\nThe teacher takes too long, and although the sprinklers come on, the fire, being an offshoot of Hotstreak, burns the school\n")
                    }
                }
        }
        else if(playerChoice == "a" && initChoice == 'skip')
        {
            console.log("Static skipped");
            let aSLevelOne = rl.question("\nYou're free, walking along in the local mall, backpack on eating frozen yogurt. The mall is relatively packed for a Monday but you don't care. You've purchased a few things and you are feeling good. Then, you are stopped by a mall cop who asks what are you doing?\nDO YOU:\n(A) Politely ask why you are being questioned\n(B) Answer and promptly leave\n\t");
            if (aSLevelOne == "a") {
                let aSLevelTwo = rl.question("\nThe cop looks you up and down and says, stay safe and informs you that you may continue shopping. You begin to walk away, heading to the Video game store. You arrive.\nDO YOU:\n(A) Buy a video game\n(B) Play on the sample console\n(C) Leave the mall\n\t");

                if (aSLevelTwo == "a" || aSLevelTwo == "b") {
                    let aSLevelThree = rl.question("\nWRONG!! THE COP NEVER SAID YOU COULD LEAVE! HE shows up behind you and pulls a gun and tells you to turn around\nDO YOU:\n(A) Gear up and fight\n(B) Gear Up and fly away\n(C) Put your hands up");
                    if (aSLevelThree == "a") {
                        console.log("\nThe cops gun begins morphing into his hand and turns into a sword *PLOT TWIST* it's Rubber ban Man and you fight\n");
                    }
                    else if(aSLevelThree == "b") {
                        console.log("\nThe cop misfires and you escape into the sky to relax and breath, the cooler air helps you chill...then you realize you left your purchases\n");
                    }
                    else {
                        console.log("\nThe cop holsters his weapon tells you to leave and you walk away, hiding your purchses in your backpack run go home and never skip class again\n");
                    }
                }
                else {
                    console.log("\nYou leave the mall and see your dad on his lunch break. You are caught and grounded for 2 months. Game over\n");
                }
            }

            else {
                //this is for answering and leaving quickly
                //make aSLevelOne == b
                let aSLevelTwo = rl.question("\nThe cop grows 6ft, then 7ft, then 10ft and it becomes apparent to you that he is an evil shapeshifter.\nDO YOU:\n(A) Gear up and fight\n(B) Run for your life\n\t");
                if (aSLevelTwo == "a")
                {
                    console.log("\nYou fight the monster, win and the city is saved, you are a hero. You get back home and are promptly grounded for missing class.\n");
                }
                else
                //you hit b
                    console.log("\nYou are running and running, the monster destroys the city and you are dead GAME OVER\n");
            }

        }

        //for users who choose Gear
        else if(playerChoice == "b" && initChoice == 'attend')
        {
            console.log("Gear stayed in school"); 
            let bALevelOne = rl.question("\nYou are sitting in half taking notes, half doodling about the problematics of time travel, Virgil, your best friend is sitting by you paying attention, Bey and Grace are chatting about the upcoming Chemistry homework and in typical fashion there is an empty seat in front of you were Monet \"No Sho Mo\" Simpson usually isn't. All of a sudden, Mitch, the rich kid who always has the best tech, laptop malfunctions. No one hears or notices it but you. His screen goes all black, then all blue...then all red. It hits you, his computer has been compromised by the Brainiac virus and if you don't act fast it'll infect everyone else's electronics.\nDO YOU:\n(A) Tell him you know what's wrong and offer to fix it\n(B) Tell him to take it to the School IT Office\n\t");
            if (bALevelOne == "a")
            {
                let bALevelTwo = rl.question("\nMitch ignores you and calls you a loser, but the virus keeps spreading.\nDo You:\n(A) Ignore him and tell him his laptop is transmitting a signal that could destroy the class\n(B) Grab his laptop and try to hack Brainiac\n(C) Shrug and continue paying attention to the teacher\n\t");
                if (bALevelTwo == "a") {
                    console.log("\nMitch stares at you, recognizes the genuine expression and hands you his laptop that is not changing colors, from green to purple, and from purple to green. The frequency of the change is confirmation that this is only going to get worse. You begin typing, slower and slower then faster and faster. The teacher recognizes that you are typing faster than he is talking and takes the laptop assuming you are rushing to finish CS homewrk.\n")
                }
                else if (bALevelTwo == "b") {
                    console.log("\nMitch protests and the teacher turns around and begins giving a lecture on why you should not take things from others. You are almost done with tracing brainiac when BOOM the lights cut off and you realize you've done it, you saved the school. Class is canceled because IT and the amdin are not able to get the power back on. You and Virgil walk out knowing you barely averted disaster.\n");
                }
                else {
                    let bALevelThree = rl.question("\nMitch's laptop screen goes green, his eyes change, he closes the laptop and you realize that Brainiac has used the computer webcam to involuntarily place Mitch in an AR that causes him to become violent.\nDo You:\n(A) Fight Mitch, being careful to only immobilize him so that you can later figure out how Brainiac's virus worked\n(B)Hurt Mitch because it is the only way\n\t")
                    if (bALevelThree == "a") {
                        console.log("\nVirgil recognizes what is going on, gears up and helps you out, you transport Mitch to another site, call Batman and you all fight and beat Brainiac and erase Mitch's memory")
                    }
                    else {
                        console.log("You save Mitch from Brainiac but he is badly injured. His family sues you and you lose. Virgil's dad lets your family stay with him and you each secretly build the Shockwave (you and Static's \"Batcave\"");
                    }

                }

                
            }
            else 
            {
                let bALevelTwo = rl.question("\nMitch, raises his hand, and the teacher tells him to wait until the next break, which is in 20min. The virus slowly spreads to the school network, and begins infecting every device connected to it. Virgil, with his innate though not as developed bio-electronic wave detecter (a form of spider-sense) realizes there is a problem and tells you what he thinks. You fill him in.\nDO you\n(A) Immediately cause a diversion and gear up to take on Brainiac together\n(B) Tell Virgil to contact Batman and alert the Justice League\n(C) Relax, knowing the virus blocker you wrote is strong enough to protect you and Virgil's device\n\t");
               
                if (bALevelTwo == "a" )
                {
                    console.log("\nYou ask to use the restroom and secretly pull the fire alarm. The diversion works but it works too well. Students panic, the sprinklers intensify and Brainiac, realizing that his plan could potentially be foiled by a lesser being shows up. You fight, but just as you are beginning to lose, are joined by Martian Manhunter and the Flash. Tofether you take down Brainiac.\n")

                }
                else if (bALevelTwo == "b") 
                {
                    console.log("\nBatman is alerted, and seemingly dismisses your claim. The virus spreads and devices begin coming together to form a large autonomous, organized machine. You and Virgil leave, realizing it is too much of a task for you. BATMAN ARRIVES alone\n")

                }
                else{
                    console.log("\nThe networks are completely comprimised, Brainiac has infiltrated the system and arrives. Superman arrives first and is alerted, Batman shortly after. You, Static, Superman and Batman fight Brainiac and barely win. Superman congratulates you for being able to contribute, the city cheers...Batman reprimands you for for not alerting him sooner, angrily give you a 5sec lecture on why you must act in the face of danger when you hold power, and smirks. YOu turn to make eye contact with Virgil behind you; each of you recognizing that Batman has just implicitly complimented you and when you look back, Batman is gone.\n")
                }
            }   

        }
        else if(playerChoice == "b" && initChoice == 'skip')
        {
            console.log("Gear skipped");
            let bSLevelOne = rl.question("\nYou are walking along, Virgil has decided not to come along this time, but you are okay, (you all can ditch together another day). You are walking along the sidewalk, backpack on, listening to music and an advertisement catches your eye. You brush it aside. Then another advertisement, different and yet familiar catches your eye. It hits you, that's not an advertisement, that's a person who's been following you.\nDo You\n(A) Turn around and investigate\n(B) Run\n\t")
            if (bSLevelOne == "a") 
            {
                let bSLevelTwo = rl.question("\nIt's Permafrost, the young houseless woman turned temperature decrecreasing villian who just last week nearly froze the city to death. She promises, she doesn't want to harm you, just help\nDo You\n(A) Believe Her\n(B) Disbelieve\n\t")
                if (bSLevelTwo == "a")
                {
                    let bSLevelThree = rl.question("\nShe tells you that the last week she was under mind control and this week the gang is after her. You argue about last week's events and you the gang of meta-humans shows up to fight you.\nDo you\n(A) Fight\n(B) Run\n\t")
                   
                    if(bSLevelThree == "a") 
                    {
                        let bSLevelFour = r1.question("\nYou each tag team the fight, it is 2 against 5 and you are getting swamped. Static arrives and quickly starts fighting the gang and Permafrost. You tell him to stop but he doesn't understand.\nDo you\n(A) Fight him and the gang\n(B) Ignore him and continue fighting the gang\n\t")
                            if(bSLevelFour == "a") 
                            { 
                                let bSLevelFive = rl.question("\nUsing your equipment you immobilize Static, the gang splits off and takes advantage of their major adversary being down for a sec. Static is hurt but Permafrost saves him. The gang is defeated and you and Static attempt to understand Permafrost's mind control issue. In the middle of the call you get a call, only its not on either you or Static's devices. Static taps into the air waves and realizes. it's BATMAN. He tells them there is a situation in Gotham and they are required, then hangs up.\nDO You\n(A) Continue listening to Permafrost\n(B) Leave and go to Gotham\n\t");
                                if(bSLevelFive == "a")
                                {
                                    console.log("\nShe informs you in the intel she was able to recover from the gang. Putting the pieces together you manage to put together the involvment of Prof. Hugo Strange. Though you protest, Permafrost comes along to help fight him. Although you get injured you manage to save all meta-humans.\n")
                                }
                                else 
                                {
                                    //leave and go to Gotham
                                    let bSLevelSix = rl.question("\nYou arrive and learn the joker has teamed up with Prof. Hugo Strange and they are attempting to gain mind control on all meta-humans,starting in you and Virgil's hometown. Would you like to return to your city or stay in Gotham\nDo You:\n(A) Leave and head back to your city\n(B) Stay in Gotham\n\t");

                                    if(bSLevelSix == "a") {
                                        let bSLevelSeven = rl.question("\nYou arrive back and Permafrost is under mind control and is doing more damage than ever to the city.\nDo you\n(A)Fight\n(B) Run\n\t");
                                        if (bSLevelEight == "a")
                                        { 
                                            console.log("\nYou fight permafrost and just when you are winning, her powers amplify, and you immobilize her, but not without permanently altering the weather condition in the city\n")
                                        }
                                        else 
                                        {
                                            console.log("\nShe catches you running and follows you, fight ensues, you continue running and Virgil is frozen. You must fight now. You lose.\n")
                                        }
                                    }
                                    else 
                                    {
                                        console.log("\nBatman seeing your desire to stay in Gotham decides to go back to Dakota with you and fight permafrost. You and Virgil fight side by side with Batman against Permafrost. She is defeated but You are each badly injured\n")
                                    }
                                }

                            }
                            else 
                            {
                                //choosing to ignore him and continue fighting the gang
                                console.log("\nPermafrost feeling betrayed super-ices and freezes the town again. Unable to move your body you utlitize the hi-tech voice commands in your helmet and melt the ice. You try to explain what happened but she doesn't want to hear it and flees town\n")
                            }
                            
                    }
                    else 
                    {
                        //choosing to run
                        let bSLevelThree = rl.question("\nYou get to an alley. you are safe. she explains her predicament. You understand, she was under mind control. You dodge the gang and you both use the sewers to head back to the hideout spot and locate the source of her mind control. The villian ink shows up out of no where.\nDo You:\n(A) Fight\n(B) Run\n\t");
                        if (bSLevelThree == "a")
                        {
                            console.log("\nYou fight and although the city sewer pipes are eventually destroyed you and permafrost defeat her and permafrost remembers that the source of her mind control was ink. Static arrives just as the fight is ending, and you explain what has happened\n")
                        }
                        else {
                            console.log("Ink takes control of permafrost and it becomes 2 against 1. You are outnumbered, Static arrives late and is not enough, you both are place in mind control and destroy the city together\n");
                        }

                    }
                }
               
                else 
                {
                    //this is when you do not believe Permafrost 
                    let bSLevelThree = rl.question("\nShe asks you to follow her, you oblige, and just as you are in a private area, she freezes your feet to the ground\nDo You:\n(A) Ask her to unfreeze you and explain\n(B) Secretly alert Static\n\t")
                    if (bSLevelThree == "a") 
                    {
                        console.log("\nShe unfreezes your feet, you use the re-warmers you built into your socks as she explains her predicament. The villian, ink has trapped her brother. You inform Static and you all leave to go and fight ink\n")
                    }
                    else {
                        //for alerting Static 
                        console.log("PERMAFROST WAS TELLING THE TRUTH. You realize this just as Static arrives. You attempt to stop him but Permafrost recognizing that she had been played, Static wanting to protect you and the entire event happening fast leads to a fight. Permafrost freezes powerlines, temporarily disorienting Static and dissappears....");
                    }
                }
            }

            else 
            {
                //run, and find out the person is permafrost
                let bSLevelTwo = rl.question("\nPermafrost, the person, following you begins running after you, then she freezes the ground. you slip and fall but she does not attempt to hurt you.\nDo you\n(A) Talk to her\n(B) Keep Running\n(C) You fight Permafrost\n\t")
                if (bSLevelTwo == "a"){
                    console.log("\nShe apologizes, explains that she could use some help. She explains her predicament and that she needs a partner to take down the person she thinks is attempting to use mind control on her.\n")
                }
                else if (bSLevelTwo == "b")
                {
                    console.log("\nPermafrost, leaves...weeks later....She is free but other meta-humans have been placed under mind control, the city is destroyed.\n")
                }
                else {
                    console.log("\nYou fight Permafrost, already warmed up in fighting, Permafrost freezes half the town, and is only stopped by Static.\n")
                }


            }

        }
        
        else 
            var continuePlayingGame = wantToContinueQ();

}

while (continuePlayingGame)

console.log("\n************\nThanks for Playing! Shock ya later!");


//asks if user wants to replay/continue the game, returns true to continue and false to quit
    function wantToContinueQ() 
    {
        let continuePlayingSS = rl.question("Would you like to play again? Y/N: ");  
            if(continuePlayingSS.toLowerCase() === 'y')  
            {
                return true;
            }
            else if(continuePlayingSS.toLowerCase() === 'n')
            {
                return false;
            }        
            else 
                console.log("**Invalid Input** TRY AGAIN")
                wantToContinueQ();
    } 


//asks the user which player they want to play as, returns a for Virgil or b for Richie
    function pickPlayer() 
    {
        let choice = rl.question("\n\nChoose your player (A) Virgil or (B) for Richard: ");
        if (choice.toLowerCase() === 'a') {
            console.log("\n**You chose Static**\n");
            return "a"
        }
        else if (choice.toLowerCase() === 'b') {
            console.log("\n~~You chose Gear~~\n");
            return "b";
        }
        else
            console.log("**ERROR INVALID INPUT - TRY AGAIN**");
            pickPlayer();
        
    }


//asks the first question to the user to start the game, returns string attend or string skip
    function beginGame() {
        let playerChoice = rl.question("It's early 8am on Monday morning and you have just been dropped off at school. You have a test in one class and a quiz in another class but today is lab day for your Javascript lecture in your Computer class. Would you like to attend class or skip?\n\t");
        
            if (playerChoice.toLowerCase() == 'attend')
            {
                return 'attend';
            }
            else    
                return 'skip';

    }


