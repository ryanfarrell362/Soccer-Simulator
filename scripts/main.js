const button = document.getElementById ('button');

const NUM_TEAMS = 20;
const NUM_OCCURRENCES = 2;
const SCORING = 70;
const VARIATION = 30;

let clubs = new Array ();
let fixtures = new Array ();
let clubStandings = new Array ();

let currentWeek = 0;
let currentSeason = 1;

let i;
let j;
let k;

for (i = 0; i < (NUM_TEAMS - 1) * NUM_OCCURRENCES; i ++) {
    fixtures [i] = new Array ();

    for (j = 0; j < NUM_TEAMS / 2; j ++) {
        fixtures [i][j] = new Array ();
    }
}

for (i = 0; i < NUM_TEAMS; i ++) {
    clubStandings [i] = i;
}

clubs = generateClubs (clubs);
fixtures = generateFixtures (fixtures);

function generateClubs (clubs) {
    for (i = 0; i < NUM_TEAMS; i ++) {
        clubs [i] = {
            id: i,
            name: 'Team ' + (i + 1),
            currentWins: 0,
            currentDraws: 0,
            currentLosses: 0,
            currentGoalsFor: 0,
            currentGoalsAgainst: 0,
            sway: ((Math.random () * VARIATION) + 100 - (VARIATION / 2))
        };
    }

    return clubs;
}

function generateFixtures (fixtures) {
    let firstTeam = 0;
    let teamRotation = new Array ();

    for (i = 0; i < NUM_TEAMS - 1; i ++) {
        teamRotation [i] = i + 1;
    }

    for (i = 0; i < (NUM_TEAMS - 1) * NUM_OCCURRENCES; i ++) {
        fixtures [i][0][0] = firstTeam;
        fixtures [i][0][1] = teamRotation [0];

        for (j = 1; j < NUM_TEAMS / 2; j ++) {
            fixtures [i][j][0] = teamRotation [j];
            fixtures [i][j][1] = teamRotation [NUM_TEAMS - j - 1];
        }

        let last = teamRotation [teamRotation.length - 1];

        for (k = teamRotation.length - 2; k >= 0; k --) {
            teamRotation [k + 1] = teamRotation [k];
        }

        teamRotation [0] = last;
    }

    return fixtures;
}

button.addEventListener ("click", function () {
    if (currentWeek < (NUM_TEAMS - 1) * NUM_OCCURRENCES) {
        simMatches (clubs, fixtures, currentWeek, currentSeason);
        clubStandings = sortClubs (clubs, clubStandings);
        printFixtures (fixtures, currentWeek, clubs, currentSeason);
        printStandings (clubs, clubStandings, currentWeek, currentSeason);
        currentWeek ++;

        document.getElementById ('week').textContent = 'Current Week: ' + (currentWeek + 1);
    } else {

    }
});

function simMatches (clubs, fixtures, currentWeek, currentSeason) {
    let goals1;
    let goals2;

    for (i = 0; i < NUM_TEAMS / 2; i ++) {
        goals1 = generateScore ((Math.random (SCORING) + clubs [fixtures [currentWeek][i][0]].sway - 100) - (clubs [fixtures [currentWeek][i][1]].sway - 100));
        goals2 = generateScore ((Math.random (SCORING) + clubs [fixtures [currentWeek][i][1]].sway - 100) - (clubs [fixtures [currentWeek][i][0]].sway - 100));
        
        clubs [fixtures [currentWeek][i][0]].currentGoalsFor += goals1;
        clubs [fixtures [currentWeek][i][1]].currentGoalsFor += goals2;

        clubs [fixtures [currentWeek][i][0]].currentGoalsAgainst += goals2;
        clubs [fixtures [currentWeek][i][1]].currentGoalsAgainst += goals1;

        if (goals1 > goals2) {
            clubs [fixtures [currentWeek][i][0]].currentWins ++;
            clubs [fixtures [currentWeek][i][1]].currentLosses ++;
        } else if (goals1 === goals2) {
            clubs [fixtures [currentWeek][i][0]].currentDraws ++;
            clubs [fixtures [currentWeek][i][1]].currentDraws ++;
        } else {
            clubs [fixtures [currentWeek][i][0]].currentLosses ++;
            clubs [fixtures [currentWeek][i][1]].currentWins ++;
        }
    }
}

function generateScore (result) {
    if (result > 99) {
        return 7;
    } else if (result > 96) {
        return 6;
    } else if (result > 90) {
        return 5;
    } else if (result > 80) {
        return 4;
    } else if (result > 65) {
        return 3;
    } else if (result > 40) {
        return 2;
    } else if (result > 15) {
        return 1;
    } else {
        return 0;
    }
}

function sortClubs (clubs, clubStandings) {
    let sortDone = true;

    while (sortDone) {
        sortDone = false;

        for (i = 0; i < NUM_TEAMS - 1; i ++) {
            if ((clubs [clubStandings [i]].currentWins * 3 + clubs [clubStandings [i]].currentDraws) < (clubs [clubStandings [i + 1]].currentWins * 3 + clubs [clubStandings [i + 1]].currentDraws)) {
                let temp = clubStandings [i];
                clubStandings [i] = clubStandings [i + 1];
                clubStandings [i + 1] = temp;

                sortDone = true;
            } else if ((clubs [clubStandings [i]].currentWins * 3 + clubs [clubStandings [i]].currentDraws) === (clubs [clubStandings [i + 1]].currentWins * 3 + clubs [clubStandings [i + 1]].currentDraws)) {
                if ((clubs [clubStandings [i]].currentGoalsFor - clubs [clubStandings [i]].currentGoalsAgainst) < (clubs [clubStandings [i + 1]].currentGoalsFor - clubs [clubStandings [i + 1]].currentGoalsAgainst)) {
                    let temp = clubStandings [i];
                    clubStandings [i] = clubStandings [i + 1];
                    clubStandings [i + 1] = temp;

                    sortDone = true;
                } else if ((clubs [clubStandings [i]].currentGoalsFor - clubs [clubStandings [i]].currentGoalsAgainst) === (clubs [clubStandings [i + 1]].currentGoalsFor - clubs [clubStandings [i + 1]].currentGoalsAgainst)) {
                    if ((clubs [clubStandings [i]].currentGoalsFor) < (clubs [clubStandings [i]].currentGoalsFor)) {
                        let temp = clubStandings [i];
                        clubStandings [i] = clubStandings [i + 1];
                        clubStandings [i + 1] = temp;

                        sortDone = true;
                    }
                }
            }
        }
    }

    return clubStandings;
}

function printFixtures (fixtures, currentWeek, clubs, currentSeason) {

}

function printStandings (clubs, clubStandings, currentWeek, currentSeason) {

}
