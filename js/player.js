class Player {
    constructor(){
        this.index = null ;
        this.name = null ;
        this.distance = 0;
    }

getCount (){
    var playerCountRef = database.ref ('playerCount');
    playerCountRef.on ("value",(data)=>{
        playerCount = data.val ()
    })
}

updateCount (count){
    database.ref ('/').update ({
        playerCount: count
    })
}

update (){
    var playerIndex = "players/player" + this.index  ;
    database.ref (playerIndex).set({
        distance : this.distance ,
        name : this.name
    })
}

static getPlayersInfo (){
    var playerInfoRef = database.ref ('players');
    playerInfoRef.on ("value", (data)=> {
    allPlayers = data.val ();
    })
}
}     