let heroName = "Felipe, the Greatest";
let xpNumber = 1;
let heroRank = "Sem Ranque";

if (xpNumber < 1000 ){
    heroRank = "Ferro"
} else if (xpNumber > 1001 && xpNumber < 2000 ){
    heroRank = "Bronze"
} else if (xpNumber > 2001 && xpNumber < 5000 ){
    heroRank = "Prata"
} else if (xpNumber > 5001 && xpNumber < 7000 ){
    heroRank = "Ouro"
} else if (xpNumber > 7001 && xpNumber < 8000 ){
    heroRank = "Platina"
} else if (xpNumber > 9001 && xpNumber < 9000 ){
    heroRank = "Ascendente"
} else if (xpNumber > 10.000 ){
    heroRank = "Imortal"
} else{
    heroRank = "Imortal"
};

console.log("O Herói de nome " + heroName + " está no nível de " + heroRank );
