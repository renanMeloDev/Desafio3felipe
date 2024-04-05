class magos{
    constructor(nome, age, type,ataque){
        this.nome=nome
        this.age=age
        this.type=type 
          
    }
    atack (){
        console.log (` o `+ this.type)
    }
}
         
    let mestreDosMagos = new magos (`Mestre dos Magos`, 85, `Mago`)

 mestreDosMagos.atack()
 
 let ataque = mestreDosMagos.type
    if (ataque === `Mago`)
    console.log (`atacou usando a Magia dos Lagos Azuis`)
        else if (ataque === `guerreiro`)
        console.log(` `)
        else if (ataque === `monge`)
        console.log(` `)
        else if (ataque === `ninja`)
        console.log(` `)
