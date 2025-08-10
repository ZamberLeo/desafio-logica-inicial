let heroName = "Felipe, the Greatest";
let XPNumber = 1;
let heroRank = "Sem Ranque";

if (XPNumber < 1000 ){
    heroRank = "Ferro"
} else if (XPNumber > 1001 && XPNumber < 2000 ){
    heroRank = "Bronze"
} else if (XPNumber > 2001 && XPNumber < 5000 ){
    heroRank = "Prata"
} else if (XPNumber > 5001 && XPNumber < 7000 ){
    heroRank = "Ouro"
} else if (XPNumber > 7001 && XPNumber < 8000 ){
    heroRank = "Platina"
} else if (XPNumber > 9001 && XPNumber < 9000 ){
    heroRank = "Ascendente"
} else if (XPNumber > 10.000 ){
    heroRank = "Imortal"
} else{
    heroRank = "Imortal"
};

console.log("O Herói de nome " + heroName + " está no nível de " + heroRank );
    