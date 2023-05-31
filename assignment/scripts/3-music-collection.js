console.log('***** Music Collection *****')


function addToCollection(title, artist, yearPublished){
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    };

}

let Collection = [
    {
        title: "Arcstrumentals",
        artist: "Erick the Arichitect",
        yearPublished: 2018
    },
    {
        title: "Oxymoron",
        artist: "Schoolboy Q",
        yearPublished: 2014   
    },
    {
        title: "Redemption",
        artist: "Jay Rock",
        yearPublished: 2018
    },
    {
        title: "The Last Rocket",
        artist: "Takeoff",
        yearPublished: 2018
    },
    {
        title: "HEROS & VILLAINS",
        artist: "Metro Boomin",
        yearPublished: 2022
    },
    {
        title: "My Name is My Name",
        artist: "Pusha T",
        yearPublished: 2013
    }
];

addToCollection("Arcstrumentals", "Erick the Arichitect", 2018)
addToCollection("Oxymoron", "Schoolboy Q", 2014)
addToCollection("Redemption","Jay Rock", 2018)
addToCollection("The Last Rocket","Takeoff", 2018)
addToCollection("HEROES & VILLAINS", "Metro Boomin", 2022)
addToCollection("My Name is My Name", "Pusha T", 2013)

console.log(Collection);


function showCollection() {
    for (let album of Collection) {
        console.log('Title: ${album.title}');
        console.log('Artist: ${album.artist}');
        console.log('Year Published: ${album.yearPublished}');
    }
}

function findByArtist(artist) {
    let results = [];

    for (let album of Collection) {
        if (album.artist === artist) {
            results.push(album);
        }
    }
}
