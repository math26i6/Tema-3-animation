let score = 0;
let life = 5;
let timeLeft = 30;
let timeOut;
let showSettingsEffektSound = true;
let showSettingsMusic = true;
let timeResume = 30;

window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("life er " + life);
    console.log("siden vises");
    document.querySelector("#ostemeter").classList.remove("energi5");
    document.querySelector("#ostemeter").classList.remove("energi4");
    document.querySelector("#ostemeter").classList.remove("energi3");
    document.querySelector("#ostemeter").classList.remove("energi2");
    document.querySelector("#ostemeter").classList.remove("energi1");
    lifeLeftFc();
    document.querySelector("#time").innerHTML = "0:30";
    document.querySelector("#kat_right1").classList.add("kat");
    document.querySelector("#kat_right2").classList.add("kat");
    document.querySelector("#kat_right3").classList.add("kat");
    document.querySelector("#kat_left1").classList.add("kat");
    document.querySelector("#kat_left2").classList.add("kat");
    document.querySelector("#kat_left3").classList.add("kat");
    //Hvad der skal ske
    showStart();

}


function showStart() {
    console.log("show start");

    document.querySelector("#cool").classList.add("coolstjerne");
    document.querySelector("#levelcomplete").classList.add("hide");
    document.querySelector("#gameover").classList.add("hide");
    document.querySelector("#score").classList.add("hide");

    document.querySelector("#spiligen").classList.add("hide");

    document.querySelector("#start").classList.remove("hide");

    document.querySelector("#play").classList.add("pulse");
    document.querySelector("#play").classList.remove("hide");

    document.querySelector("#play").addEventListener("click", hideStart);

    document.querySelector("#indstillinger").addEventListener("click", showSettings);
    //    document.querySelector("#indstillinger").addEventListener("click", toggleMusic);

    //    toggleMusic();

}

function showSettings() {
    console.log("show settings");

    document.querySelector("#settings").classList.remove("hide");
    document.querySelector("#settingsmenu").classList.add("hide");
    document.querySelector("#play").classList.add("hide");

    document.querySelector("#musikknap").addEventListener("click", muteMusik);

    document.querySelector("#mutemusikknap").addEventListener("click", unmuteMusik);

    document.querySelector("#lydknap").addEventListener("click", muteLyd);

    document.querySelector("#mutelydknap").addEventListener("click", unmuteLyd);

    document.querySelector("#luk").addEventListener("click", closeSettings);
}


function showIngameSettings() {
    console.log("show ingame settings");

    document.querySelector("#settings").classList.remove("hide");
    document.querySelector("#settingsmenu").classList.add("hide");



    document.querySelector("#musikknap").addEventListener("click", muteMusik);

    document.querySelector("#mutemusikknap").addEventListener("click", unmuteMusik);

    document.querySelector("#lydknap").addEventListener("click", muteLyd);

    document.querySelector("#mutelydknap").addEventListener("click", unmuteLyd);

    document.querySelector("#luk").addEventListener("click", hideIngameSettings);
    document.querySelector("#kat_right1").classList.remove("kr1_komind");
    document.querySelector("#kat_right2").classList.remove("kr2_komind");
    document.querySelector("#kat_right3").classList.remove("kr3_komind");
    document.querySelector("#kat_left1").classList.remove("kl1_komind");
    document.querySelector("#kat_left2").classList.remove("kl2_komind");
    document.querySelector("#kat_left3").classList.remove("kl3_komind");
    timeResume = timeLeft;
    clearTimeout(timeOut);

}

function hideIngameSettings() {
    console.log("close ingame settings")

    document.querySelector("#settings").classList.add("hide");

    document.querySelector("#musikknap").removeEventListener("click", muteMusik);

    document.querySelector("#mutemusikknap").removeEventListener("click", unmuteMusik);

    document.querySelector("#lydknap").removeEventListener("click", muteLyd);

    document.querySelector("#mutelydknap").removeEventListener("click", unmuteLyd);

    document.querySelector("#luk").removeEventListener("click", hideIngameSettings);

    startGame();
}


function toggleMusic() {
    console.log("toggleMusic");

    document.querySelector("#myMusic").play();

    if (showSettingsMusic == true) {
        console.log("true");
        showSettingsMusic = false;
        unmuteMusik();
    } else {
        console.log("false");
        showSettingsMusic = true;
        muteMusik();

    }
}

function muteMusik() {
    console.log("mute musik");

    document.querySelector("#mutemusikknap").classList.remove("hide");

    document.querySelector("#musikknap").classList.add("hide");

    document.querySelector("#myMusic").muted = true;


}

function unmuteMusik() {
    console.log("unmute musik");

    document.querySelector("#mutemusikknap").classList.add("hide");

    document.querySelector("#musikknap").classList.remove("hide");

    document.querySelector("#myMusic").muted = false;
    document.querySelector("#music").classList.remove("off");




}

function toggleSounds() {

    console.log("toggleSounds");


    if (showSettingsEffektSound == true) {
        console.log("true");
        showSettingsEffektSound = false;
        unmuteLyd();
    } else {
        console.log("false");
        showSettingsEffektSound = true;
        muteLyd();

    }

}

function muteLyd() {
    console.log("mute lyd");

    document.querySelector("#mutelydknap").classList.remove("hide");

    document.querySelector("#lydknap").classList.add("hide");

    document.querySelector("#lyd1").muted = true;
    document.querySelector("#lyd2").muted = true;
    document.querySelector("#vand").muted = true;



}

function unmuteLyd() {
    console.log("unmute lyd");

    document.querySelector("#mutelydknap").classList.add("hide");

    document.querySelector("#lydknap").classList.remove("hide");
    document.querySelector("#lyd1").muted = false;
    document.querySelector("#lyd2").muted = false;
    document.querySelector("#vand").muted = false;




}

function closeSettings() {
    console.log("close settings")

    document.querySelector("#settings").classList.add("hide");

    document.querySelector("#musikknap").removeEventListener("click", muteMusik);

    document.querySelector("#mutemusikknap").removeEventListener("click", unmuteMusik);

    document.querySelector("#lydknap").removeEventListener("click", muteLyd);

    document.querySelector("#mutelydknap").removeEventListener("click", unmuteLyd);

    document.querySelector("#luk").removeEventListener("click", closeSettings);
    document.querySelector("#play").classList.remove("hide");


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
    document.querySelector("#myMusic").play();

    document.querySelector("#cool").classList.add("hide");

    document.querySelector("#intro").classList.remove("hide");

    document.querySelector("#introplayknap").classList.remove("hide");

    document.querySelector("#introplayknap").addEventListener("click", hideIntro);
}

function hideIntro() {
    console.log("hideIntro");

    document.querySelector("#introplayknap").removeEventListener("click", hideIntro);

    document.querySelector("#intro").classList.add("fade_out");

    document.querySelector("#introplayknap").classList.add("hide");

    document.querySelector("#intro").addEventListener("animationend", showIntro2);
}

function showIntro2() {
    console.log("show intro2");
    document.querySelector("#intro").classList.add("hide");
    document.querySelector("#intro").removeEventListener("animationend", showIntro2);
    document.querySelector("#game_background").classList.add("blur");
    document.querySelector("#mus").classList.add("blur");
    document.querySelector("#time").classList.add("blur");
    document.querySelector("#intro2").classList.remove("hide");


    document.querySelector("#introplayknap").classList.remove("hide");

    document.querySelector("#introplayknap").addEventListener("click", hideIntro2);

    document.querySelector("#pil").classList.remove("hide");

}

function hideIntro2() {
    console.log("hideIntro2");
    document.querySelector("#introplayknap").removeEventListener("click", hideIntro2);
    document.querySelector("#game_background").classList.remove("blur");
    document.querySelector("#mus").classList.remove("blur");
    document.querySelector("#time").classList.remove("blur");;
    document.querySelector("#introplayknap").removeEventListener("click", hideIntro);
    document.querySelector("#pil").classList.remove("hide")
    document.querySelector("#pil").classList.add("fade_out");
    document.querySelector("#intro2").classList.add("fade_out");

    document.querySelector("#introplayknap").classList.add("hide");

    document.querySelector("#intro2").addEventListener("animationend", startGame);

    document.querySelector("#lyd3").currentTime = 0;
    document.querySelector("#lyd3").play();
}


function startGame() {
    console.log("start game");
    console.log("start kat animation");
    console.log("start ost animation");
    document.querySelector("#pil").classList.add("hide");
    document.querySelector("#pil").classList.remove("fade_out");
    document.querySelector("#indstillinger").addEventListener("click", showIngameSettings);
    document.querySelector("#start").removeEventListener("animationend", startGame);

    document.querySelector("#start").classList.remove("fade_out");

    document.querySelector("#start").classList.add("hide");
    document.querySelector("#intro").classList.add("hide");
    document.querySelector("#intro2").classList.add("hide");

    //    document.querySelector("#death1").addEventListener("click", clickKat);
    document.querySelector("#kat_right1").addEventListener("click", clickKat);
    document.querySelector("#kat_right1").addEventListener("click", katGone);
    document.querySelector("#kat_right1").addEventListener("animationend", gameOver);
    document.querySelector("#kat_right1").classList.add("kr1_komind");

    document.querySelector("#kat_right2").addEventListener("animationend", gameOver);
    document.querySelector("#kat_right2").classList.add("kr2_komind")
    document.querySelector("#kat_right2").addEventListener("click", clickKat);
    document.querySelector("#kat_right2").addEventListener("click", katGone);

    document.querySelector("#kat_right3").addEventListener("animationend", gameOver);
    document.querySelector("#kat_right3").classList.add("kr3_komind")
    document.querySelector("#kat_right3").addEventListener("click", clickKat);
    document.querySelector("#kat_right3").addEventListener("click", katGone);
    //
    document.querySelector("#kat_left1").addEventListener("animationend", gameOver);
    document.querySelector("#kat_left1").classList.add("kl1_komind")
    document.querySelector("#kat_left1").addEventListener("click", clickKat);
    document.querySelector("#kat_left1").addEventListener("click", katGone);

    document.querySelector("#kat_left2").addEventListener("animationend", gameOver);
    document.querySelector("#kat_left2").classList.add("kl2_komind")
    document.querySelector("#kat_left2").addEventListener("click", clickKat);
    document.querySelector("#kat_left2").addEventListener("click", katGone);

    document.querySelector("#kat_left3").addEventListener("animationend", gameOver);
    document.querySelector("#kat_left3").classList.add("kl3_komind")
    document.querySelector("#kat_left3").addEventListener("click", clickKat);
    document.querySelector("#kat_left3").addEventListener("click", katGone);

    document.querySelector("#ost").classList.add("ost_komind");
    document.querySelector("#ost").classList.remove("hide");
    document.querySelector("#ost").addEventListener("click", clickOst);
    document.querySelector("#ost").addEventListener("click", ostGone);

    //
    document.querySelector("#ost2").classList.add("ost_komind");
    document.querySelector("#ost2").classList.remove("hide")
    document.querySelector("#ost2").addEventListener("click", clickOst);
    document.querySelector("#ost2").addEventListener("click", ostGone);

    document.querySelector("#ost3").classList.add("ost_komind");
    document.querySelector("#ost3").classList.remove("hide")
    document.querySelector("#ost3").addEventListener("click", clickOst);
    document.querySelector("#ost3").addEventListener("click", ostGone);



    timeLeft = timeResume;
    timeLeftFc();
}



function clickKat() {


    console.log(this);

    //    this.addEventListener()

    //    if (this.querySelector(".kat").contains("kat")) {
    if (this.classList.contains("kat")) {
        console.log("kat klikket");

        score++;
        console.log("score", score);

        document.querySelector("#score").innerHTML = score;

        document.querySelector("#mus").classList.remove("mus");
        document.querySelector("#mus").classList.add("musearm");


        console.log(this);

        //        this.closest("div div").classList.add("wkr1_komind");
        this.classList.remove("kr1_komind");
        this.classList.remove("kr2_komind");
        this.classList.remove("kr3_komind");
        this.classList.remove("kl1_komind");
        this.classList.remove("kl2_komind");
        this.classList.remove("kl3_komind");

        setTimeout(nyKat, 500);
        setTimeout(nyMus, 300);



        document.querySelector("#vand").currentTime = 0;
        document.querySelector("#vand").play();
        document.querySelector("#lyd1").currentTime = 0;
        document.querySelector("#lyd1").play();

        //        //sæt våd kat ind?
        //
        //    } else if (this.classList.contains("wkr")); {
        //        //        this.classList.add("wkr1_komind");
        //        //
        //        //        setTimeout(nyKat, 1000);
        //    }


    }
}


function katGone() {
    if (this.classList.contains("kat")) {
        life--;
        console.log("life", life);
        lifeLeftFc();

    }
}

function nyMus() {
    console.log("mus kast");
    document.querySelector("#mus").classList.add("mus");
    document.querySelector("#mus").classList.remove("musearm");
}

function nyKat() {
    console.log("ny kat");
    document.querySelector("#kat_right1").classList.add("kr1_komind");
    //    document.querySelector("#kat_right1").classList.remove("wkr1_komind");
    document.querySelector("#kat_right2").classList.add("kr2_komind");
    //    document.querySelector("#kat_right2").classList.remove("wkr1_komind");
    document.querySelector("#kat_right3").classList.add("kr3_komind");
    //    document.querySelector("#kat_right3").classList.remove("wkr1_komind");
    document.querySelector("#kat_left1").classList.add("kl1_komind");
    //    document.querySelector("#kat_left1").classList.remove("wkr1_komind");
    document.querySelector("#kat_left2").classList.add("kl2_komind");
    //    document.querySelector("#kat_left2").classList.remove("wkr1_komind");
    document.querySelector("#kat_left3").classList.add("kl3_komind");
    //    document.querySelector("#kat_left3").classList.remove("wkr1_komind");




}



function clickOst() {
    console.log("ost klikket");

    if (this.classList.contains("ost")) {

        //        document.querySelector("#minus_points").classList.remove("hide");
        //
        document.querySelector("#minus_points").classList.add("minus");

        this.classList.remove("ost_komind");
        this.classList.add("ost_forsvind");

        document.querySelector("#lyd2").currentTime = 0;
        document.querySelector("#lyd2").play();

        // setTimeout(nyOst, 2000);
        console.log(this);
        this.addEventListener('animationend', nyOst);



    }

}

function nyOst() {
    console.log("nyOst");
    this.classList = "ost ost_komind";
    this.addEventListener("click", clickOst);

    //    document.querySelector("#ost").classList.remove("ost_forsvind");
    //    document.querySelector("#ost").classList.add("ost_komind");
    //    document.querySelector("#ost2").classList.remove("ost_forsvind");
    //    document.querySelector("#ost2").classList.add("ost_komind");
    //    document.querySelector("#ost3").classList.remove("ost_forsvind");
    //    document.querySelector("#ost3").classList.add("ost_komind");
}

function ostGone() {
    if (this.classList.contains("ost")) {
        if (life == 0) {
            document.querySelector("#kat_right1").addEventListener("click", clickKat);
            document.querySelector("#kat_right1").addEventListener("click", katGone);

            document.querySelector("#kat_right2").addEventListener("click", clickKat);
            document.querySelector("#kat_right2").addEventListener("click", katGone);

            document.querySelector("#kat_right3").addEventListener("click", clickKat);
            document.querySelector("#kat_right3").addEventListener("click", katGone);

            document.querySelector("#kat_left1").addEventListener("click", clickKat);
            document.querySelector("#kat_left1").addEventListener("click", katGone);


            document.querySelector("#kat_left2").addEventListener("click", clickKat);
            document.querySelector("#kat_left2").addEventListener("click", katGone);


            document.querySelector("#kat_left3").addEventListener("click", clickKat);
            document.querySelector("#kat_left3").addEventListener("click", katGone);
        }
        life++;
        lifeLeftFc();
        console.log("life", life);
    }

}






function timeLeftFc() {
    console.log("timeleft" + timeLeft);
    if (timeLeft > 0) {

        timeLeft--;
        timeOut = setTimeout(timeLeftFc, 1000);
        document.querySelector("#time").innerHTML = "0:" + timeLeft;
    } else {


        levelComplete();
    }
}

function lifeLeftFc() {
    console.log("enegeribar=");
    if (life == 0) {
        document.querySelector("#kat_right1").removeEventListener("click", clickKat);
        document.querySelector("#kat_right2").removeEventListener("click", clickKat);
        document.querySelector("#kat_right3").removeEventListener("click", clickKat);
        document.querySelector("#kat_left1").removeEventListener("click", clickKat);
        document.querySelector("#kat_left2").removeEventListener("click", clickKat);
        document.querySelector("#kat_left3").removeEventListener("click", clickKat);
        document.querySelector("#kat_right1").removeEventListener("click", katGone);
        document.querySelector("#kat_right2").removeEventListener("click", katGone);
        document.querySelector("#kat_right3").removeEventListener("click", katGone);
        document.querySelector("#kat_left1").removeEventListener("click", katGone);
        document.querySelector("#kat_left2").removeEventListener("click", katGone);
        document.querySelector("#kat_left3").removeEventListener("click", katGone);
        document.querySelector("#ostemeter").classList.add("energi5");
        document.querySelector("#ostemeter").classList.remove("energi4");


    } else if (life == 5) {

        document.querySelector("#ostemeter").classList.add("energi");
        document.querySelector("#ostemeter").classList.remove("energi1");

    } else if (life == 4) {
        document.querySelector("#ostemeter").classList.remove("energi");
        document.querySelector("#ostemeter").classList.add("energi1");
        document.querySelector("#ostemeter").classList.remove("energi2");
    } else if (life == 3) {
        document.querySelector("#ostemeter").classList.remove("energi1");
        document.querySelector("#ostemeter").classList.add("energi2");
        document.querySelector("#ostemeter").classList.remove("energi3");
    } else if (life == 2) {
        document.querySelector("#ostemeter").classList.remove("energi2");
        document.querySelector("#ostemeter").classList.add("energi3");
        document.querySelector("#ostemeter").classList.remove("energi4");
    } else if (life == 1) {
        document.querySelector("#ostemeter").classList.remove("energi5");
        document.querySelector("#ostemeter").classList.add("energi4");
        document.querySelector("#ostemeter").classList.remove("energi3");
    }


}

function gameOver() {

    console.log("GAMEOVER");
    document.querySelector("#gameover").classList.remove("hide");
    document.querySelector("#gameover").classList.add("fade_in");
    document.querySelector("#spiligen").classList.add("fade_in");

    document.querySelector("#spiligen").classList.remove("hide");

    document.querySelector("#spiligen").addEventListener("click", resetAll);

    document.querySelector("#kat_right1").classList.add("hide");
    document.querySelector("#kat_right2").classList.add("hide");
    document.querySelector("#kat_right3").classList.add("hide");
    document.querySelector("#kat_left1").classList.add("hide");
    document.querySelector("#kat_left2").classList.add("hide");
    document.querySelector("#kat_left3").classList.add("hide");
    document.querySelector("#kat_right1").removeEventListener("animationend", gameOver);
    document.querySelector("#kat_right2").removeEventListener("animationend", gameOver);
    document.querySelector("#kat_right3").removeEventListener("animationend", gameOver);
    document.querySelector("#kat_left1").removeEventListener("animationend", gameOver);
    document.querySelector("#kat_left2").removeEventListener("animationend", gameOver);
    document.querySelector("#kat_left3").removeEventListener("animationend", gameOver);
    document.querySelector("#kat_right1").removeEventListener("click", clickKat);
    document.querySelector("#kat_right2").removeEventListener("click", clickKat);
    document.querySelector("#kat_right3").removeEventListener("click", clickKat);
    document.querySelector("#kat_left1").removeEventListener("click", clickKat);
    document.querySelector("#kat_left2").removeEventListener("click", clickKat);
    document.querySelector("#kat_left3").removeEventListener("click", clickKat);
    document.querySelector("#kat_right1").removeEventListener("click", katGone);
    document.querySelector("#kat_right2").removeEventListener("click", katGone);
    document.querySelector("#kat_right3").removeEventListener("click", katGone);
    document.querySelector("#kat_left1").removeEventListener("click", katGone);
    document.querySelector("#kat_left2").removeEventListener("click", katGone);
    document.querySelector("#kat_left3").removeEventListener("click", katGone);
    document.querySelector("#intro").classList.remove("fade_out");
    document.querySelector("#intro2").classList.remove("fade_out");


    document.querySelector("#gameoverlyd").currentTime = 0;
    document.querySelector("#gameoverlyd").play();

    clearTimeout(timeOut);





}

function levelComplete() {
    console.log("level complete");

    document.querySelector("#levelcomplete").classList.remove("hide");
    document.querySelector("#levelcomplete").classList.add("fade_in");
    document.querySelector("#levelcomplete").classList.add("fade_in");
    document.querySelector("#spiligen").classList.remove("hide");

    document.querySelector("#spiligen").addEventListener("click", resetAll);

    document.querySelector("#score").classList.remove("hide");

    document.querySelector("#kat_right1").classList.add("hide");
    document.querySelector("#kat_right2").classList.add("hide");
    document.querySelector("#kat_right3").classList.add("hide");
    document.querySelector("#kat_left1").classList.add("hide");
    document.querySelector("#kat_left2").classList.add("hide");
    document.querySelector("#kat_left3").classList.add("hide");
    document.querySelector("#kat_right1").removeEventListener("animationend", gameOver);
    document.querySelector("#kat_right2").removeEventListener("animationend", gameOver);
    document.querySelector("#kat_right3").removeEventListener("animationend", gameOver);
    document.querySelector("#kat_left1").removeEventListener("animationend", gameOver);
    document.querySelector("#kat_left2").removeEventListener("animationend", gameOver);
    document.querySelector("#kat_left3").removeEventListener("animationend", gameOver);
    document.querySelector("#kat_right1").removeEventListener("click", clickKat);
    document.querySelector("#kat_right2").removeEventListener("click", clickKat);
    document.querySelector("#kat_right3").removeEventListener("click", clickKat);
    document.querySelector("#kat_left1").removeEventListener("click", clickKat);
    document.querySelector("#kat_left2").removeEventListener("click", clickKat);
    document.querySelector("#kat_left3").removeEventListener("click", clickKat);
    document.querySelector("#kat_right1").removeEventListener("click", katGone);
    document.querySelector("#kat_right2").removeEventListener("click", katGone);
    document.querySelector("#kat_right3").removeEventListener("click", katGone);
    document.querySelector("#kat_left1").removeEventListener("click", katGone);
    document.querySelector("#kat_left2").removeEventListener("click", katGone);
    document.querySelector("#kat_left3").removeEventListener("click", katGone);
    document.querySelector("#intro").classList.remove("fade_out");
    document.querySelector("#intro2").classList.remove("fade_out");


    document.querySelector("#levelcompletelyd").currentTime = 0;
    document.querySelector("#levelcompletelyd").play();

}

function resetAll() {

    console.log("reset all");


    document.querySelector("#kat_right1").classList.remove("hide");
    document.querySelector("#kat_right2").classList.remove("hide");
    document.querySelector("#kat_right3").classList.remove("hide");
    document.querySelector("#kat_left1").classList.remove("hide");
    document.querySelector("#kat_left2").classList.remove("hide");
    document.querySelector("#kat_left3").classList.remove("hide");
    document.querySelector("#kat_left1").removeAttribute("class");
    document.querySelector("#kat_left2").removeAttribute("class");
    document.querySelector("#kat_left3").removeAttribute("class");
    document.querySelector("#kat_right1").removeAttribute("class");
    document.querySelector("#kat_right2").removeAttribute("class");
    document.querySelector("#kat_right3").removeAttribute("class");
    document.querySelector("#kat_right1").removeEventListener("click", clickKat);
    document.querySelector("#kat_right2").removeEventListener("click", clickKat);
    document.querySelector("#kat_right3").removeEventListener("click", clickKat);
    document.querySelector("#kat_left1").removeEventListener("click", clickKat);
    document.querySelector("#kat_left2").removeEventListener("click", clickKat);
    document.querySelector("#kat_left3").removeEventListener("click", clickKat);
    document.querySelector("#kat_right1").removeEventListener("click", katGone);
    document.querySelector("#kat_right2").removeEventListener("click", katGone);
    document.querySelector("#kat_right3").removeEventListener("click", katGone);
    document.querySelector("#kat_left1").removeEventListener("click", katGone);
    document.querySelector("#kat_left2").removeEventListener("click", katGone);
    document.querySelector("#kat_left3").removeEventListener("click", katGone);
    document.querySelector("#intro").classList.remove("fade_out");
    document.querySelector("#intro2").classList.remove("fade_out");
    document.querySelector("#cool").classList.remove("hide");
    document.querySelector("#ost").classList.add("hide");
    document.querySelector("#ost2").classList.add("hide");
    document.querySelector("#ost3").classList.add("hide");
    document.querySelector("#cool").classList.remove("hide")
    document.querySelector("#myMusic").pause();
    document.querySelector("#myMusic").currentTime = 0;
    document.querySelector("#indstillinger").removeEventListener("click", showSettings);
    document.querySelector("#indstillinger").removeEventListener("click", showIngameSettings);




    timeResume = 30;
    score = 0;
    life = 5;
    timeLeft = 30;
    timeOut;
    sidenVises();
}
