///////////////////////////////////////////////////
// Build a Tamagotchi
// What is a tamagotchi? According to wikipedia, the name is a portmanteau combining the Japanese word tamago (たまご), which means "egg", and the English word "watch". Most Tamagotchi characters' names end in tchi (っち) in Japanese, with few exceptions.

// properties  
// states - boolean
// behaviors - function


const tamagotchi = {
    name: "Yoshi",
    weight: " 30lbs",
    age: "10",
    birthday: "Jan,1,2010",
    description: "turtle",
    hungerLevel: "10",
    happinessLevel: "10",
    attentionLevel: "1",
    lifeStage: "child",

    isHungry: false,
    wantsToPlay: true,
    isHappy: true,
    needsAttention: false,

}

const food = ["grass", "meat", "tofu", "bread","candy"]
const grass = 2;
const meat = 6;
const tofu = 3;
const bread = 4;
const candy = 1;

function eat(){
    let hungerLevel = 7;
    if(hungerLevel > 7){
        eat();
        } else { 
            console.log(`goplay`)}
    }


function speak(){
    console.log("Yoooshii")
}

function play(){
    console.log("runnnnnnnnn")
}

console.log(tamagotchi)
console.table(food)
eat()
play()
speak()

