let score = 0;
let life = 6;
let timeLeft = 10;
let showSettingsEffektSound = true;
let showSettingsMusic = true;

window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    //Hvad der skal ske
    showStart();

}


function showStart() {
    console.log("show start");

    document.querySelector("#levelcomplete").classList.add("hide");
    document.querySelector("#gameover").classList.add("hide");
    document.querySelector("#score").classList.add("hide");

    document.querySelector("#spiligen").classList.add("hide");

    document.querySelector("#start").classList.remove("hide");

    document.querySelector("#play").classList.add("pulse");
    document.querySelector("#play").classList.remove("hide");

    document.querySelector("#play").addEventListener("click", hideStart);

    document.querySelector("#indstillinger").addEventListener("click", showSettings);

    document.querySelector("#play").addEventListener("click", toggleMusic);
}

function showSettings() {
    console.log("show settings");

    document.querySelector("#settings").classList.remove("hide");

    document.querySelector("#musikknap").addEventListener("click", muteMusik);

    document.querySelector("#mutemusikknap").addEventListener("click", unmuteMusik);

    document.querySelector("#lydknap").addEventListener("click", muteLyd);

    document.querySelector("#mutelydknap").addEventListener("click", unmuteLyd);

    document.querySelector("#luk").addEventListener("click", closeSettings);


}

function muteMusik() {
    console.log("mute musik");

    document.querySelector("#mutemusikknap").classList.remove("hide");

    document.querySelector("#musikknap").classList.add("hide");



}

function unmuteMusik() {
    console.log("unmute musik");

    document.querySelector("#mutemusikknap").classList.add("hide");

    document.querySelector("#musikknap").classList.remove("hide");



}


function muteLyd() {
    console.log("mute lyd");

    document.querySelector("#mutelydknap").classList.remove("hide");

    document.querySelector("#lydknap").classList.add("hide");


}

function unmuteLyd() {
    console.log("unmute lyd");

    document.querySelector("#mutelydknap").classList.add("hide");

    document.querySelector("#lydknap").classList.remove("hide");



}

function closeSettings() {
    console.log("close settings")

    document.querySelector("#settings").classList.add("hide");

    document.querySelector("#musikknap").removeEventListener("click", muteMusik);

    document.querySelector("#mutemusikknap").removeEventListener("click", unmuteMusik);

    document.querySelector("#lydknap").removeEventListener("click", muteLyd);

    document.querySelector("#mutelydknap").removeEventListener("click", unmuteLyd);

    document.querySelector("#luk").removeEventListener("click", closeSettings);

    showStart();
}



function hideStart() {
    console.log("hide start");
    document.querySelector("#play").removeEventListener("click", hideStart);

    document.querySelector("#play").classList.remove("pulse");

    document.querySelector("#start").classList.add("fade_out");

    document.querySelector("#play").classList.add("fade_out");

    document.querySelector("#play").classList.add("hide");

    document.querySelector("#start").addEventListener("animationend", showIntro);
}


function showIntro() {
    console.log("show intro");


    document.querySelector("#intro").classList.remove("hide");

    document.querySelector("#introplayknap").classList.remove("hide");

    document.querySelector("#introplayknap").addEventListener("click", hideIntro);





}

function hideIntro() {
    console.log("hideIntro");

    document.querySelector("#introplayknap").removeEventListener("click", hideIntro);

    document.querySelector("#intro").classList.add("fade_out");

    document.querySelector("#introplayknap").classList.add("hide");

    document.querySelector("#intro").addEventListener("animationend", startGame);
}

function startGame() {
    console.log("start game");
    console.log("start kat animation");

    document.querySelector("#start").removeEventListener("animationend", startGame);

    document.querySelector("#start").classList.remove("fade_out");

    document.querySelector("#start").classList.add("hide");
    document.querySelector("#intro").classList.add("hide");




    document.querySelector("#kat_right1").addEventListener("click", clickKat);
    document.querySelector("#kat_right1").addEventListener("animationend", gameOver);
    document.querySelector("#kat_right1").classList.add("kr1_komind");

    document.querySelector("#kat_right2").addEventListener("animationend", gameOver);
    document.querySelector("#kat_right2").classList.add("kr2_komind")
    document.querySelector("#kat_right2").addEventListener("click", clickKat);

    document.querySelector("#kat_right3").addEventListener("animationend", gameOver);
    document.querySelector("#kat_right3").classList.add("kr3_komind")
    document.querySelector("#kat_right3").addEventListener("click", clickKat);

    document.querySelector("#kat_left1").addEventListener("animationend", gameOver);
    document.querySelector("#kat_left1").classList.add("kl1_komind")
    document.querySelector("#kat_left1").addEventListener("click", clickKat);

    document.querySelector("#kat_left2").addEventListener("animationend", gameOver);
    document.querySelector("#kat_left2").classList.add("kl2_komind")
    document.querySelector("#kat_left2").addEventListener("click", clickKat);

    document.querySelector("#kat_left3").addEventListener("animationend", gameOver);
    document.querySelector("#kat_left3").classList.add("kl3_komind")
    document.querySelector("#kat_left3").addEventListener("click", clickKat);

    document.querySelector("#ost").classList.add("ost_komind");
    document.querySelector("#ost").addEventListener("click", clickOst);


    timeLeftFc();
}

////function endKat() {
////
////    console.log("slut animation");
////
////    document.querySelector("#kat_right1").removeEventListener("animationend", endKat);
////    document.querySelector("#kat_right1").classList.add("fade_out");
////    document.querySelector("#kat_right1").classList.remove("kr1_komind");
////    document.querySelector("#kat_right1").addEventListener("animationend", startKat);
////
////}
////
////
////
////
////function startKat() {
////
////    console.log("restart animation")
////
////    document.querySelector("#kat_right1").removeEventListener("animationend", startKat);
////
////    document.querySelector("#kat_right1").classList.add("kr1_komind");
////
////    document.querySelector("#kat_right1").classList.remove("hide");
////
////    document.querySelector("#kat_right1").addEventListener("animationend", endKat);
//
//}



function clickKat() {

    if (this.classList.contains("kat")) {
        console.log("kat klikket");

        score++;
        console.log(score);

        document.querySelector("#score").innerHTML = score;

        console.log(this);

        this.classList.add("hide");

        this.removeEventListener("click", clickKat);

        this.classList.contains("kat");

        document.querySelector("#lyd1").currentTime = 0;
        document.querySelector("#lyd1").play();

        this.addEventListener("animationend", clickKat);
    } else if (this.classList.contains("kat")) {

        console.log("du har klikket på en giftig svamp");


        document.querySelector("#energi" + life).classList.add("hide");
        life--;
    }
    //    mist energi/liv ved klik på kat
    //    start ny animation
}



function katGone() {}

function clickOst() {
    console.log("ost klikket");

    score--;
    console.log(score);

    document.querySelector("#score").innerHTML = score;

    console.log(this);

    document.querySelector("#minus_points").classList.remove("hide");

    document.querySelector("#minus_points").classList.add("minus");

    document.querySelector("#ost").removeEventListener("click", clickOst);

    document.querySelector("#ost").classList.add("ost_forsvind");


    this.classList.add("hide");

    this.removeEventListener("click", clickOst);

    //    få energi
}

function ostGone() {}




function timeLeftFc() {
    console.log("timeLeftFc timeleft er" + timeLeft);
    if (timeLeft > 0) {

        timeLeft--;
        setTimeout(timeLeftFc, 1000);
    } else {

        levelComplete();
    }
}
//Hvordan stopper man tiden

function gameStatus() {
    console.log("gamestatus life er" + life);
    (life == 0)
    gameOver();
}


function gameOver() {

    console.log("GAMEOVER");

    document.querySelector("#gameover").classList.remove("hide");

    document.querySelector("#spiligen").classList.remove("hide");

    document.querySelector("#spiligen").addEventListener("click", sidenVises);


}

function levelComplete() {
    console.log("level complete");

    document.querySelector("#levelcomplete").classList.remove("hide");

    document.querySelector("#spiligen").classList.remove("hide");

    document.querySelector("#spiligen").addEventListener("click", sidenVises);

    document.querySelector("#score").classList.remove("hide");
}

//Hvorfor går den alt igennem


function toggleSounds() {

    console.log("toggleSounds");

    //        document.querySelector("#sfx").classList.remove("on");

    if (showSettingsEffektSound == true) {
        console.log("true");
        showSettingsEffektSound = false;
        soundsOn();
    } else {
        console.log("false");
        showSettingsEffektSound = true;
        soundsOff();

    }

}

function soundsOff() {
    console.log("sounds off");
    document.querySelector("#lyd").classList.add("mutelydknap");
    document.querySelector("#lyd1").muted = true;
    document.querySelector("#lyd2").muted = true;

}

function soundsOn() {
    console.log("sounds on");
    document.querySelector("#lyd").classList.remove("lydknap");
    document.querySelector("#lyd1").muted = false;
    document.querySelector("#lyd2").muted = false;

}

function toggleMusic() {
    console.log("toggleMusic");

    document.querySelector("#myMusic").play();

    if (showSettingsMusic == true) {
        console.log("true");
        showSettingsMusic = false;
        musicOn();
    } else {
        console.log("false");
        showSettingsMusic = true;
        musicOff();

    }
}

function musicOff() {
    console.log("mute musik");

    document.querySelector("#mutemusikknap").classList.remove("hide");

    document.querySelector("#musikknap").classList.add("hide");

    document.querySelector("#myMusic").pause();



}

function musicOn() {
    console.log("music on");

    document.querySelector("#myMusic").play();
    document.querySelector("#music").classList.remove("off");
}
