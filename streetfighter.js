const randomStat = (num) => {
    return Math.floor(Math.random() * num)
}

class Character {
    constructor(name, avoid){
        this.name = name
        this.hp= 30
        this.moves = [
            {name: 'punch', strength: randomStat(10)},
            {name: 'kick', strength: randomStat(10)},
        ]
        this.defenses = [
            {name: avoid, defense: randomStat(5)},
            {name: 'dodge', defense: randomStat(5)},
        ]
    }



attack(player){
    const move = randomStat(this.moves.length)
    const dedDmg = randomStat(this.defenses.length)

    const damage = randomStat(this.moves[move].strength)
    const d1 = randomStat(this.defenses[dedDmg].defense)

    player.hp -= damage - d1
    console.log(`${this.name} attacked ${player.name} with ${this.moves[move].name} for ${damage} damage and ${player.name} defense with ${this.defenses[dedDmg].name} for ${d1} and leaving them with ${player.hp} life`)
    }
    
}

const Ken = new Character('Ken', 'Dodge');
const Ryu = new Character('Ryu', 'Flash');

gameEnd = true
kenRyu = true

while(gameEnd){
    if(kenRyu){
        Ken.attack(Ryu)
    } else {
        Ryu.attack(Ken)
    }

    kenRyu = !kenRyu;

    if (Ken.hp <= 0){
        console.log('Ken is Dead, Ryu wins')
        gameEnd = false
    }

    if (Ryu.hp <= 0){
        console.log('Ryu is Dead, Ken wins')
        
    }
}



