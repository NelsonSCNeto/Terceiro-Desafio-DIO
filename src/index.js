class Heroi{
    constructor(Nome, Idade, Tipo){
        this.Nome = Nome
        this.Idade = Idade
        this.Tipo = Tipo
    }
}

let Guerreiro = new Heroi("Garen", 25, "Guerreiro")
let Mago = new Heroi("Annie", 8, "Mago")
let Monge = new Heroi("Lee sin", 32, "Monge")
let Ninja = new Heroi("Zed", 34, "Ninja")

console.log(Guerreiro)
console.log(Mago)
console.log(Monge)
console.log(Ninja)

const tipo = ["Guerreiro", "Mago", "Monge", "Ninja"];
const ataque = ["Espada", "Magia", "Artes marciais", "Shuriken"]

for(let i = 0; i < tipo.length; i++) {
    console.log(`O ${tipo[i]} atacou usando ${ataque[i]}`)
}
