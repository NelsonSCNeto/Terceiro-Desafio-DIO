class Heroi{
    constructor(Nome, Idade, Tipo){
        this.Nome = Nome
        this.Idade = Idade
        this.Tipo = Tipo
    }
    classe(){
        return this.Tipo
    }
}
let heroi = new Heroi("Nelson", 23, "Ninja") 

let ataque 

if(heroi.classe() == "Guerreiro"){
    ataque = ("Espada")
}else if(heroi.classe() == "Mago"){
    ataque = ("Magia")
}else if(heroi.classe() == "Monge"){
    ataque = ("Artes marciais")
}else{
    ataque = ("Shuriken")
}

console.log(`O ${heroi.classe()} atacou usando ${ataque}`)
