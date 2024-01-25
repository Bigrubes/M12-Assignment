class Jukebox {
    constructor(albums) {
        this.albums = []
    }
    addAlbum = function(album) {
        this.albums.push(album)
    }
    favoriteAlbum = function() {
        let max = -1, fav
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played
                fav = this.albums[i]
            }
        }
        return fav.display()
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist
        this.title = title
        this.played = 0
    }
    play = function() {
        this.played += 1
    }
    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`
    }
}
const $ = ()
let jbox = new Jukebox()
const array = [
{album: 'Energy by Operation Ivy'},
{album:'Dude Ranch by Blink 182,'},
{album:'Sticks and Stones by New Found Glory'}
]
// jbox.addAlbum(album1)
// jbox.addAlbum(album2)
// jbox.addAlbum(album3)

// album1.play()
// album2.play()
// album2.play()
// album2.play()
// album2.play()
// album2.play()
// album3.play()
const albumsDrop = document.getElementById('albums')
array.forEach(albums =>{

})

console.log(`Your favorite album is: ${jbox.favoriteAlbum()}`)