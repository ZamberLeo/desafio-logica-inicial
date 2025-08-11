function MatchBalance(WinsMatch,LoseMatch){
    return WinsMatch - LoseMatch
};

let playerMatch = MatchBalance(100,4);

if (playerMatch < 10 ){
    heroRank = "Ferro"
} else if (playerMatch >= 11 && playerMatch < 20 ){
    heroRank = "Bronze"
} else if (playerMatch >= 21 && playerMatch < 50 ){
    heroRank = "Prata"
} else if (playerMatch >= 51 && playerMatch < 80 ){
    heroRank = "Ouro"
} else if (playerMatch >= 81 && playerMatch < 90 ){
    heroRank = "Diamante"
} else if (playerMatch >= 91 && playerMatch < 100 ){
    heroRank = "Lendário"
} else if (playerMatch >= 101){ 
    heroRank = "Imortal"
};

console.log(`O Herói tem de saldo de ${playerMatch} está no nível de ${heroRank}`);