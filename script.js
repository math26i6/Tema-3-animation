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

    document.querySelector("#kat_right2").classList.add("kr2_komind");

    document.querySelector("#kat_right2").addEventListener("click", clickKat);

    document.querySelector("#kat_right2").addEventListener("animationend", clickKat);

}

function clickKat() {
    console.log("kat klikket")

    document.querySelector("#kat_right2").classList.add("kr2_komind_paused");

    document.querySelector("#kat_right2").classList.add("hide");

}
