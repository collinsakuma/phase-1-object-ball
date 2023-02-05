function gameObject() {
    const theObject = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    "number": 0,
                    "shoe": 16,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 1
                },
                "Reggie Evans": {
                    "number": 30,
                    "shoe": 14,
                    "points": 12,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 12,
                    "blocks": 12,
                    "slamDunks": 7
                },
                "Brook Lopez": {
                    "number": 11,
                    "shoe": 17,
                    "points": 17,
                    "rebounds": 19,
                    "assists": 10,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 15
                },
                "Mason Plumlee": {
                    "number": 1,
                    "shoe": 19,
                    "points": 26,
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3,
                    "blocks": 8,
                    "slamDunks": 5
                },
                "Jason Terry": {
                    "number": 31,
                    "shoe": 15,
                    "points": 19,
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4,
                    "blocks": 11,
                    "slamDunks": 1
                }

            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    "number": 4,
                    "shoe": 18,
                    "points": 10,
                    "rebounds": 1,
                    "assists": 1,
                    "steals": 2,
                    "blocks": 7,
                    "slamDunks": 2
                },
                "Bismak Biyombo": {
                    "number": 0,
                    "shoe": 16,
                    "points": 12,
                    "rebounds": 4,
                    "assists": 7,
                    "steals": 7,
                    "blocks": 15,
                    "slamDunks": 10
                },
                "DeSangna Diop": {
                    "number": 2,
                    "shoe": 14,
                    "points": 24,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 4,
                    "blocks": 5,
                    "slamDunks": 5
                },
                "Ben Gordon": {
                    "number": 8,
                    "shoe": 15,
                    "points": 33,
                    "rebounds": 3,
                    "assists": 2,
                    "steals": 1,
                    "blocks": 1,
                    "slamDunks": 0
                },
                "Brendan Haywood": {
                    "number": 33,
                    "shoe": 15,
                    "points": 6,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 22,
                    "blocks": 5,
                    "slamDunks": 12
                }
            }
        }
    }
    return theObject
}

function allPlayers() {
    const object = gameObject()
    return {...object.home.players, ...object.away.players}
  }


function homeTeamName() {
    let object = gameObject()
    return object["home"]["teamName"]
}

function numPointsScored(player) {
    let object = gameObject()
    if (object.home.players[player] !== undefined) {
        return object.home.players[player].points;
    } else {
        return object.away.players[player].points;
    }
}

function shoeSize(player) {
    let object = gameObject()
    if (object.home.players[player] !== undefined) {
        return object.home.players[player].shoe;
    } else {
        return object.away.players[player].shoe;
    }
}

function teamColors(team) {
    let object = gameObject()
    if (object.home.teamName === team) {
        return object.home.colors;
    } else {
        return object.away.colors;
    }
}

function teamNames() {
    return [gameObject().home.teamName, gameObject().away.teamName]
}

function playerNumbers(teamVar) {
    let jerseyNumbers = [];
    const homeTeam = gameObject().home.teamName === teamVar;
    const awayTeam = gameObject().away.teamName === teamVar;
    if (homeTeam === true) {
        for(player in gameObject().home.players) {
            jerseyNumbers.push(gameObject().home.players[player].number)
        }
    } else if (awayTeam === true) {
        for(player in gameObject().away.players) {
            jerseyNumbers.push(gameObject().away.players[player].number)
        }    
    }
    return jerseyNumbers
}

function playerStats(playerName) {
    if (gameObject().home.players[playerName] !== undefined) {
        return gameObject().home.players[playerName]
    } else {
        return gameObject().away.players[playerName]
    }
}

function bigShoeRebounds() {
    let largestShoe = ''
    let shoeArray = []
    let playerArray = []
    let playerObj = allPlayers()
    const homeTeam = gameObject().home.players
    const awayTeam = gameObject().away.players
    for(let player in homeTeam) {
        shoeArray.push(homeTeam[player].shoe)
        playerArray.push(player)
    }
    for(let player in awayTeam) {
        shoeArray.push(awayTeam[player].shoe)
        playerArray.push(player)
    }
    largestShoe = Math.max(...shoeArray)
    largestPlayer = playerArray[shoeArray.indexOf(largestShoe)]
    return playerObj[largestPlayer].rebounds
}
