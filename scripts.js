let entryFee
let roundPoints = 0;
let killPoints = 0;
let participationPoints = 0;

const bronze4 = document.getElementById("bronze4");
const bronze3 = document.getElementById("bronze3");
const bronze2 = document.getElementById("bronze2");
const bronze1 = document.getElementById("bronze1");

const silver4 = document.getElementById("silver4");
const silver3 = document.getElementById("silver3");
const silver2 = document.getElementById("silver2");
const silver1 = document.getElementById("silver1");

const gold4 = document.getElementById("gold4");
const gold3 = document.getElementById("gold3");
const gold2 = document.getElementById("gold2");
const gold1 = document.getElementById("gold1");

const platinum4 = document.getElementById("platinum4");
const platinum3 = document.getElementById("platinum3");
const platinum2 = document.getElementById("platinum2");
const platinum1 = document.getElementById("platinum1");

const diamond4 = document.getElementById("diamond4");
const diamond3 = document.getElementById("diamond3");
const diamond2 = document.getElementById("diamond2");
const diamond1 = document.getElementById("diamond1");


bronze4.addEventListener("click", () => {
    entryFee = -10;
});

bronze3.addEventListener("click", () => {
    entryFee = -13;
});

bronze2.addEventListener("click", () => {
    entryFee = -16;
});

bronze1.addEventListener("click", () => {
    entryFee = -19;
});

silver4.addEventListener("click", () => {
    entryFee = -22;
});

silver3.addEventListener("click", () => {
    entryFee = -25;
});

silver2.addEventListener("click", () => {
    entryFee = -28;
});

silver1.addEventListener("click", () => {
    entryFee = -31;
});

gold4.addEventListener("click", () => {
    entryFee = -34;
});

gold3.addEventListener("click", () => {
    entryFee = -37;
});

gold2.addEventListener("click", () => {
    entryFee = -40;
});

gold1.addEventListener("click", () => {
    entryFee = -43;
});

platinum4.addEventListener("click", () => {
    entryFee = -46;
});

platinum3.addEventListener("click", () => {
    entryFee = -49;
});

platinum2.addEventListener("click", () => {
    entryFee = -52;
});

platinum1.addEventListener("click", () => {
    entryFee = -55;
});

diamond4.addEventListener("click", () => {
    entryFee = -58;
});

diamond3.addEventListener("click", () => {
    entryFee = -61;
});

diamond2.addEventListener("click", () => {
    entryFee = -64;
});

diamond1.addEventListener("click", () => {
    entryFee = -67;
});



var form = document.getElementById("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
})

function calculateRP() {
    


    if (parseInt(round.value) == 1){
        roundPoints = 125
        killPoints = parseInt(kp.value) * 25;
        participationPoints = parseInt(participation.value) * 12.5;
    }else if (parseInt(round.value) == 2){
        roundPoints = 95
                killPoints = parseInt(kp.value) * 23;
        participationPoints = parseInt(participation.value) * 11.5;
    }else if (parseInt(round.value) == 3){
        roundPoints = 70
                killPoints = parseInt(kp.value) * 20;
        participationPoints = parseInt(participation.value) * 10;
    }else if (parseInt(round.value) == 4){
        roundPoints = 55
                killPoints = parseInt(kp.value) * 18;
        participationPoints = parseInt(participation.value) * 9;
    }else if (parseInt(round.value) == 5){
        roundPoints = 45
                killPoints = parseInt(kp.value) * 16;
        participationPoints = parseInt(participation.value) * 8;
    }else if (parseInt(round.value) == 6){
        roundPoints = 30
                killPoints = parseInt(kp.value) * 14;
        participationPoints = parseInt(participation.value) * 7;
    }else if (parseInt(round.value) >= 7 && parseInt(round.value) <= 8){
        roundPoints = 20
                killPoints = parseInt(kp.value) * 12;
        participationPoints = parseInt(participation.value) * 6;
    }else if (parseInt(round.value) >= 9 && parseInt(round.value) <= 10){
        roundPoints = 10
                killPoints = parseInt(kp.value) * 10;
        participationPoints = parseInt(participation.value) * 5;
    }else if (parseInt(round.value) >= 11 && parseInt(round.value) <= 13){
        roundPoints = 5
                killPoints = parseInt(kp.value) * 5;
        participationPoints = parseInt(participation.value) * 2.5;
    }else if (parseInt(round.value) >= 14){
        roundPoints = 0
                killPoints = parseInt(kp.value) * 1;
        participationPoints = parseInt(participation.value) * .5;
    }

    let totalRP = Math.floor(entryFee + roundPoints + killPoints + participationPoints);

    const rpDiv = document.getElementById("rp");
    rpDiv.innerHTML = "RP Gained = " + totalRP;

    console.log(totalRP);
}