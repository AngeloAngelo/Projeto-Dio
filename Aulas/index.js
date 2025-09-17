let name = "tuntuntunsahur";
let xp = 8000;
let Nivel = ""

if (xp < 1000) {Nivel = "Ferro"}
else if (xp >= 1001 && xp < 2000) {Nivel = "Bronze"}
else if (xp >= 2001 && xp < 3000) {Nivel = "Prata"}
else if (xp >= 3001 && xp < 4000) {Nivel = "Ouro"}
else if (xp >= 4001 && xp < 5000) {Nivel = "Platina"}
else if (xp >= 5001 && xp < 6000) {Nivel = "Esmeralda"}
else if (xp >= 6001 && xp < 7000) {Nivel = "Imortal"}
else if (xp >= 7001) {Nivel = "Radiante"}

console.log (`O heroi de nome ${name} está no nivel ${Nivel}`);