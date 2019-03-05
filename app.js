// create Ship class to use as prototype of all ships in game
class Ship {
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    attack(enemy) {
        if (Math.random() > this.accuracy) {
            console.log("==============================")
            console.log(`${this.name} missed`);
            console.log("==============================")
            return `${enemy.name} hull: ${enemy.hull}`
        } else {
            enemy.hull -= this.firepower;
            console.log("==============================")
            console.log(`${this.name} dealt ${this.firepower} damage.`);
            console.log("==============================")
            return `${enemy.name} hull: ${enemy.hull}`
        }
    }
    update() {
        console.log(`*${this.name}'s hull: ${this.hull}, `);
    }
}

// create USS Assembly ship with pre-determined parameters
let USSA = new Ship("USS Assembly", 20, 5, 0.7);

// create array to hold 6 alien ships with randomly generated parameter values that fit within pre-determined range
let alienFleet = [];

// create for loop to create 6 alien ship objects and push them into the
for (let i = 0; i < 6; i++) {
    alienFleet[i] = new Ship(`Alien Ship ${i+1}`, (Math.floor(Math.random() * (7 - 3) + 3)), (Math.floor(Math.random() * (5 - 2) + 2)), (Math.random() * (0.8 - 0.6) + 0.6))
}

// set boolean variable for controlling loops
let choice = true

// create button to start first loop
$("#attack").click(function() {
    choice = false;
    // loop for whole game: while USSA hull >0 and alienFleet.length > 0
    if (USSA.hull > 0 && alienFleet.length > 0 && choice === false) {

        USSA.attack(alienFleet[0]);
        USSA.update();
        alienFleet[0].update();

        // check whether USSA.attack destroyed alienFleet[0]
        if (alienFleet[0].hull > 0) {

            // alienFleet[0] attacks USSA
            alienFleet[0].attack(USSA);
            USSA.update();
            alienFleet[0].update();
            choice = true;
            // check if alien attack destroyed USS Assembly
            if (USSA.hull <= 0) {
                $("#player").replaceWith("<img id = 'player' src ='./explosion.png'/>");
                $("#attack").remove();
                $("#retreat").remove();
                window.setTimeout(function() {
                    // remove current .ship element from DOM
                    $("#player").remove();
                    // console log game over
                    $("#fleet").after("<h1 class='message'>GAME OVER</h1><h2>Refresh the page to play again</h2>");
                }, 1000)


            }

        } else {
            $(".ship:eq(0)").replaceWith("<img class = 'ship' src ='./explosion.png'/>");
            window.setTimeout(function() {
                // remove 1st alien ship from alienFleet
                alienFleet.shift();
                console.log(`Alien Ships left: ${alienFleet.length}`);
                // remove current .ship element from DOM
                $(".ship:eq(0)").remove();
                // console log victory if the while loop completes due to all alien ships being destroyed, not USSA.hull < 0
                if (USSA.hull > 0 && alienFleet.length === 0) {
                    $("#attack").remove();
                    $("#retreat").remove();
                    $("#player").before("<h1 class='message'>Victory!</h1><h2>Refresh the page to play again</h2>");
                }
            }, 1000)
            // switch value of choice to true in order to stop the while loop and await user input (button click event)
            choice = true;

        }

    }

})

$("#retreat").click(function() {
    $("#player").remove();
    $("#attack").remove();
    $("#retreat").remove();
    $("#fleet").after("<h1 class='message'>GAME OVER</h1>");
})