function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            // Add a record here
            artist: "Billy Idol",
            title: "White Weddings",
            release_year: 1981,
            id: 02,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            }
        }
    };
    return myMusic;
}
myFunction()[2];

module.exportS = myFunction;