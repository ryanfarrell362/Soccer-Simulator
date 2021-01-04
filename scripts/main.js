const NUM_TEAMS = 20;
const NUM_OCCURRENCES = 2;
const SCORING = 70;
const VARIATION = 30;

let i;
let j;
let k;

const button = document.getElementById ('button');

let matchResults = new Array ();

matchResults.push (document.getElementById ('results1'));
matchResults.push (document.getElementById ('results2'));
matchResults.push (document.getElementById ('results3'));
matchResults.push (document.getElementById ('results4'));
matchResults.push (document.getElementById ('results5'));
matchResults.push (document.getElementById ('results6'));
matchResults.push (document.getElementById ('results7'));
matchResults.push (document.getElementById ('results8'));
matchResults.push (document.getElementById ('results9'));
matchResults.push (document.getElementById ('results10'));

let upcomingMatches = new Array ();

upcomingMatches.push (document.getElementById ('upcoming1'));
upcomingMatches.push (document.getElementById ('upcoming2'));
upcomingMatches.push (document.getElementById ('upcoming3'));
upcomingMatches.push (document.getElementById ('upcoming4'));
upcomingMatches.push (document.getElementById ('upcoming5'));
upcomingMatches.push (document.getElementById ('upcoming6'));
upcomingMatches.push (document.getElementById ('upcoming7'));
upcomingMatches.push (document.getElementById ('upcoming8'));
upcomingMatches.push (document.getElementById ('upcoming9'));
upcomingMatches.push (document.getElementById ('upcoming10'));

let standings = new Array ();

for (i = 0; i < NUM_TEAMS; i ++) {
    standings [i] = new Array ();
}

standings [0].push (document.getElementById ('teamname1'));
standings [0].push (document.getElementById ('teamname2'));
standings [0].push (document.getElementById ('teamname3'));
standings [0].push (document.getElementById ('teamname4'));
standings [0].push (document.getElementById ('teamname5'));
standings [0].push (document.getElementById ('teamname6'));
standings [0].push (document.getElementById ('teamname7'));
standings [0].push (document.getElementById ('teamname8'));
standings [0].push (document.getElementById ('teamname9'));
standings [0].push (document.getElementById ('teamname10'));
standings [0].push (document.getElementById ('teamname11'));
standings [0].push (document.getElementById ('teamname12'));
standings [0].push (document.getElementById ('teamname13'));
standings [0].push (document.getElementById ('teamname14'));
standings [0].push (document.getElementById ('teamname15'));
standings [0].push (document.getElementById ('teamname16'));
standings [0].push (document.getElementById ('teamname17'));
standings [0].push (document.getElementById ('teamname18'));
standings [0].push (document.getElementById ('teamname19'));
standings [0].push (document.getElementById ('teamname20'));

standings [1].push (document.getElementById ('teamwins1'));
standings [1].push (document.getElementById ('teamwins2'));
standings [1].push (document.getElementById ('teamwins3'));
standings [1].push (document.getElementById ('teamwins4'));
standings [1].push (document.getElementById ('teamwins5'));
standings [1].push (document.getElementById ('teamwins6'));
standings [1].push (document.getElementById ('teamwins7'));
standings [1].push (document.getElementById ('teamwins8'));
standings [1].push (document.getElementById ('teamwins9'));
standings [1].push (document.getElementById ('teamwins10'));
standings [1].push (document.getElementById ('teamwins11'));
standings [1].push (document.getElementById ('teamwins12'));
standings [1].push (document.getElementById ('teamwins13'));
standings [1].push (document.getElementById ('teamwins14'));
standings [1].push (document.getElementById ('teamwins15'));
standings [1].push (document.getElementById ('teamwins16'));
standings [1].push (document.getElementById ('teamwins17'));
standings [1].push (document.getElementById ('teamwins18'));
standings [1].push (document.getElementById ('teamwins19'));
standings [1].push (document.getElementById ('teamwins20'));

standings [2].push (document.getElementById ('teamdraws1'));
standings [2].push (document.getElementById ('teamdraws2'));
standings [2].push (document.getElementById ('teamdraws3'));
standings [2].push (document.getElementById ('teamdraws4'));
standings [2].push (document.getElementById ('teamdraws5'));
standings [2].push (document.getElementById ('teamdraws6'));
standings [2].push (document.getElementById ('teamdraws7'));
standings [2].push (document.getElementById ('teamdraws8'));
standings [2].push (document.getElementById ('teamdraws9'));
standings [2].push (document.getElementById ('teamdraws10'));
standings [2].push (document.getElementById ('teamdraws11'));
standings [2].push (document.getElementById ('teamdraws12'));
standings [2].push (document.getElementById ('teamdraws13'));
standings [2].push (document.getElementById ('teamdraws14'));
standings [2].push (document.getElementById ('teamdraws15'));
standings [2].push (document.getElementById ('teamdraws16'));
standings [2].push (document.getElementById ('teamdraws17'));
standings [2].push (document.getElementById ('teamdraws18'));
standings [2].push (document.getElementById ('teamdraws19'));
standings [2].push (document.getElementById ('teamdraws20'));

standings [3].push (document.getElementById ('teamlosses1'));
standings [3].push (document.getElementById ('teamlosses2'));
standings [3].push (document.getElementById ('teamlosses3'));
standings [3].push (document.getElementById ('teamlosses4'));
standings [3].push (document.getElementById ('teamlosses5'));
standings [3].push (document.getElementById ('teamlosses6'));
standings [3].push (document.getElementById ('teamlosses7'));
standings [3].push (document.getElementById ('teamlosses8'));
standings [3].push (document.getElementById ('teamlosses9'));
standings [3].push (document.getElementById ('teamlosses10'));
standings [3].push (document.getElementById ('teamlosses11'));
standings [3].push (document.getElementById ('teamlosses12'));
standings [3].push (document.getElementById ('teamlosses13'));
standings [3].push (document.getElementById ('teamlosses14'));
standings [3].push (document.getElementById ('teamlosses15'));
standings [3].push (document.getElementById ('teamlosses16'));
standings [3].push (document.getElementById ('teamlosses17'));
standings [3].push (document.getElementById ('teamlosses18'));
standings [3].push (document.getElementById ('teamlosses19'));
standings [3].push (document.getElementById ('teamlosses20'));

standings [4].push (document.getElementById ('teamgoalsfor1'));
standings [4].push (document.getElementById ('teamgoalsfor2'));
standings [4].push (document.getElementById ('teamgoalsfor3'));
standings [4].push (document.getElementById ('teamgoalsfor4'));
standings [4].push (document.getElementById ('teamgoalsfor5'));
standings [4].push (document.getElementById ('teamgoalsfor6'));
standings [4].push (document.getElementById ('teamgoalsfor7'));
standings [4].push (document.getElementById ('teamgoalsfor8'));
standings [4].push (document.getElementById ('teamgoalsfor9'));
standings [4].push (document.getElementById ('teamgoalsfor10'));
standings [4].push (document.getElementById ('teamgoalsfor11'));
standings [4].push (document.getElementById ('teamgoalsfor12'));
standings [4].push (document.getElementById ('teamgoalsfor13'));
standings [4].push (document.getElementById ('teamgoalsfor14'));
standings [4].push (document.getElementById ('teamgoalsfor15'));
standings [4].push (document.getElementById ('teamgoalsfor16'));
standings [4].push (document.getElementById ('teamgoalsfor17'));
standings [4].push (document.getElementById ('teamgoalsfor18'));
standings [4].push (document.getElementById ('teamgoalsfor19'));
standings [4].push (document.getElementById ('teamgoalsfor20'));

standings [5].push (document.getElementById ('teamgoalsagainst1'));
standings [5].push (document.getElementById ('teamgoalsagainst2'));
standings [5].push (document.getElementById ('teamgoalsagainst3'));
standings [5].push (document.getElementById ('teamgoalsagainst4'));
standings [5].push (document.getElementById ('teamgoalsagainst5'));
standings [5].push (document.getElementById ('teamgoalsagainst6'));
standings [5].push (document.getElementById ('teamgoalsagainst7'));
standings [5].push (document.getElementById ('teamgoalsagainst8'));
standings [5].push (document.getElementById ('teamgoalsagainst9'));
standings [5].push (document.getElementById ('teamgoalsagainst10'));
standings [5].push (document.getElementById ('teamgoalsagainst11'));
standings [5].push (document.getElementById ('teamgoalsagainst12'));
standings [5].push (document.getElementById ('teamgoalsagainst13'));
standings [5].push (document.getElementById ('teamgoalsagainst14'));
standings [5].push (document.getElementById ('teamgoalsagainst15'));
standings [5].push (document.getElementById ('teamgoalsagainst16'));
standings [5].push (document.getElementById ('teamgoalsagainst17'));
standings [5].push (document.getElementById ('teamgoalsagainst18'));
standings [5].push (document.getElementById ('teamgoalsagainst19'));
standings [5].push (document.getElementById ('teamgoalsagainst20'));

standings [6].push (document.getElementById ('teamgoaldifferential1'));
standings [6].push (document.getElementById ('teamgoaldifferential2'));
standings [6].push (document.getElementById ('teamgoaldifferential3'));
standings [6].push (document.getElementById ('teamgoaldifferential4'));
standings [6].push (document.getElementById ('teamgoaldifferential5'));
standings [6].push (document.getElementById ('teamgoaldifferential6'));
standings [6].push (document.getElementById ('teamgoaldifferential7'));
standings [6].push (document.getElementById ('teamgoaldifferential8'));
standings [6].push (document.getElementById ('teamgoaldifferential9'));
standings [6].push (document.getElementById ('teamgoaldifferential10'));
standings [6].push (document.getElementById ('teamgoaldifferential11'));
standings [6].push (document.getElementById ('teamgoaldifferential12'));
standings [6].push (document.getElementById ('teamgoaldifferential13'));
standings [6].push (document.getElementById ('teamgoaldifferential14'));
standings [6].push (document.getElementById ('teamgoaldifferential15'));
standings [6].push (document.getElementById ('teamgoaldifferential16'));
standings [6].push (document.getElementById ('teamgoaldifferential17'));
standings [6].push (document.getElementById ('teamgoaldifferential18'));
standings [6].push (document.getElementById ('teamgoaldifferential19'));
standings [6].push (document.getElementById ('teamgoaldifferential20'));

standings [7].push (document.getElementById ('teampoints1'));
standings [7].push (document.getElementById ('teampoints2'));
standings [7].push (document.getElementById ('teampoints3'));
standings [7].push (document.getElementById ('teampoints4'));
standings [7].push (document.getElementById ('teampoints5'));
standings [7].push (document.getElementById ('teampoints6'));
standings [7].push (document.getElementById ('teampoints7'));
standings [7].push (document.getElementById ('teampoints8'));
standings [7].push (document.getElementById ('teampoints9'));
standings [7].push (document.getElementById ('teampoints10'));
standings [7].push (document.getElementById ('teampoints11'));
standings [7].push (document.getElementById ('teampoints12'));
standings [7].push (document.getElementById ('teampoints13'));
standings [7].push (document.getElementById ('teampoints14'));
standings [7].push (document.getElementById ('teampoints15'));
standings [7].push (document.getElementById ('teampoints16'));
standings [7].push (document.getElementById ('teampoints17'));
standings [7].push (document.getElementById ('teampoints18'));
standings [7].push (document.getElementById ('teampoints19'));
standings [7].push (document.getElementById ('teampoints20'));

let clubs = new Array ();
let fixtures = new Array ();
let clubStandings = new Array ();

let currentWeek = 0;
let currentSeason = 1;

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
            sway: Math.round((Math.random () * VARIATION) + 100 - (VARIATION / 2))
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

        currentWeek ++;

        printFixtures (fixtures, currentWeek, clubs, currentSeason);
        printStandings (clubs, clubStandings, currentWeek, currentSeason);

        document.getElementById ('week').textContent = 'Current Week: ' + (currentWeek + 1);
    } else {

    }
});

function simMatches (clubs, fixtures, currentWeek, currentSeason) {
    let goals1;
    let goals2;

    for (i = 0; i < NUM_TEAMS / 2; i ++) {
        goals1 = generateScore (Math.round ((Math.random () * SCORING) + (clubs [fixtures [currentWeek][i][0]].sway - 100) - (clubs [fixtures [currentWeek][i][1]].sway - 100)));
        goals2 = generateScore (Math.round ((Math.random () * SCORING) + (clubs [fixtures [currentWeek][i][1]].sway - 100) - (clubs [fixtures [currentWeek][i][0]].sway - 100)));

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

        matchResults [i].textContent = clubs [fixtures [currentWeek][i][0]].name + ' (' + goals1 + ' - ' + goals2 + ') ' + clubs [fixtures [currentWeek][i][1]].name;
    }
}

function generateScore (result) {

    console.log (result);
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
    for (i = 0; i < NUM_TEAMS / 2; i ++) {
        upcomingMatches [i].textContent = clubs [fixtures [currentWeek + 1][i][0]].name + ' vs. ' + clubs [fixtures [currentWeek + 1][i][1]].name;
    }
}

function printStandings (clubs, clubStandings, currentWeek, currentSeason) {
    for (i = 0; i < NUM_TEAMS; i ++) {
        standings [0][i].textContent = clubs [clubStandings [i]].name;
        standings [1][i].textContent = clubs [clubStandings [i]].currentWins;
        standings [2][i].textContent = clubs [clubStandings [i]].currentDraws;
        standings [3][i].textContent = clubs [clubStandings [i]].currentLosses;
        standings [4][i].textContent = clubs [clubStandings [i]].currentGoalsFor;
        standings [5][i].textContent = clubs [clubStandings [i]].currentGoalsAgainst;
        standings [6][i].textContent = clubs [clubStandings [i]].currentGoalsFor - clubs [clubStandings [i]].currentGoalsAgainst;
        standings [7][i].textContent = clubs [clubStandings [i]].currentWins * 3 + clubs [clubStandings [i]].currentDraws;
    }
}
