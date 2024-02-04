// 1) How will you access Sophia’s secondary school location?

let data = {
    Sophia: {
        id: 33,
        study: [
            {
                primary:
                    [
                        {school_name: "ABC primary school"},
                        {location: "Peters burg"}
                    ]
            },

            {
                secondary:
                    [
                        {school_name: "ABC secondary school"},
                        {location: "St Lorence"}
                    ]
            }
        ]
    }
}

const secondarySchool = data.Sophia.study[1].secondary[1].location;
console.log(secondarySchool);


// ------------------- 2D Array -----------------------

/* Create a function called highestRunScorer that will * Receive a 2d array called playersInfo, * Based on highest score, return the name of the player

** Things Required
* variable
* if-else
* loop
* function
* array

*/
//  2D Array count korte hoy [row number][column number]
function highestRunScorer(playersInfo) {
    // console.log(playersInfo);
    let highestScorer = playersInfo[0][0];  // highest scorer k dhore nilam row is 0, column is 0
    let highestScore = playersInfo[0][1];

    for (let x = 1; x < playersInfo.length; x++){  // index 1 theke check korbo largest value tai x = 1 dhorechi.
        if (highestScore < playersInfo[x][1]) { //ekhane row always 0 index & column always 1 index e thakbe thake cause number count er shomoy only row ta change hochhe r column ta same e ache tai
            highestScore = playersInfo[x][1];
            highestScorer = playersInfo[x][0];
        }
    }
    return highestScorer;
}
let playersInfo = [
    ["Ashraful", 95],
    ["Mizan", 25],
    ["Rakib", 45],
    ["lu", 105]
];
let name = highestRunScorer(playersInfo);
console.log(name);

// -------------------------------------------------------