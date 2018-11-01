let score = 0;

window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    //Hvad der skal ske
    showStart();

}


function showStart() {
    console.log("show start");

    document.querySelector("#start").classList.remove("hide");

    document.querySelector("#play").classList.add("pulse");

    document.querySelector("#play").addEventListener("click", hideStart);

    document.querySelector("#indstillinger").addEventListener("click", showSettings);
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

    document.querySelector("#start").addEventListener("animationend", startGame);
}

function startGame() {
    console.log("start game");
    console.log("start kat animation");

    document.querySelector("#start").removeEventListener("animationend", startGame);

    document.querySelector("#start").classList.remove("fade_out");

    document.querySelector("#start").classList.add("hide");


    document.querySelector("#kat_right1").addEventListener("click", clickKat);
    document.querySelector("#kat_right1").classList.add("kr1_komind");
    document.querySelector("#kat_right1").addEventListener("animationend", clickKat);

    //    document.querySelector("#kat_right1").addEventListener("animationend", endKat);


    document.querySelector("#kat_right2").classList.add("kr2_komind")
    document.querySelector("#kat_right2").addEventListener("click", clickKat);
    document.querySelector("#kat_right2").addEventListener("animationend", clickKat);
    //    document.querySelector("#kat_right2").addEventListener("animationend", startKat);

    document.querySelector("#kat_right3").classList.add("kr3_komind")
    document.querySelector("#kat_right3").addEventListener("click", clickKat);
    document.querySelector("#kat_right3").addEventListener("animationend", clickKat);

    document.querySelector("#kat_left1").classList.add("kl1_komind")
    document.querySelector("#kat_left1").addEventListener("click", clickKat);
    document.querySelector("#kat_left1").addEventListener("animationend", clickKat);

    document.querySelector("#kat_left2").classList.add("kl2_komind")
    document.querySelector("#kat_left2").addEventListener("click", clickKat);
    document.querySelector("#kat_left2").addEventListener("animationend", clickKat);

    document.querySelector("#kat_left3").classList.add("kl3_komind")
    document.querySelector("#kat_left3").addEventListener("click", clickKat);
    document.querySelector("#kat_left3").addEventListener("animationend", clickKat);

    document.querySelector("#ost").classList.add("ost_komind");
    document.querySelector("#ost").addEventListener("click", clickOst);


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
    console.log("kat klikket");

    score++;
    console.log(score);

    document.querySelector("#score").innerHTML = "score: " + score;

    console.log(this);

    document.querySelector("#points").classList.add("plus");

    this.classList.add("hide");

    this.removeEventListener("click", clickKat);

}

function clickOst() {
    console.log("ost klikket");

    score--;
    console.log(score);

    document.querySelector("#score").innerHTML = "score: " + score;

    console.log(this);

    document.querySelector("#minus_points").classList.remove("hide");

    document.querySelector("#minus_points").classList.add("minus");

    document.querySelector("#ost").removeEventListener("click", clickOst);

    document.querySelector("#ost").classList.add("ost_forsvind");


    this.classList.add("hide");

    this.removeEventListener("click", clickOst);

}
