const readline = require('readline-sync')

var listas = []
var i = 0
var escolha = 0
var escolha_opções 

    do{
   console.clear()
  var escolha_opções = parseInt(readline.question(`Escolha uma das opcoes: \n [1]Inserir , [2]Apagar, [3]Listar [4]Sair: `))
  
  while(escolha_opções < 1 || escolha_opções > 4 ){ /*Caso o valor n seja possivel*/
    console.clear()
    console.log("Você precisa digitar um numero possivel \n ")
    var escolha_opções = readline.question(`Escolha uma das opçoes: \n [1]Inserir , [2]Apagar, [3]Listar [4]Sair: `)
  }

switch(escolha_opções){
    case 1:
        console.clear()
        if(listas.length == 0){
        console.log("A lista esta atualmente vazia")
    }
        for(i = 0; i < listas.length; i ++){
        console.log(`[${i+1}] ` +listas[i])
        }
        let resposta1 = readline.question(`O que deseja inserir? \n `)
        listas.push(resposta1)
        console.clear()
        for(i = 0; i < listas.length; i ++){
            console.log(`[${i+1}] ` +listas[i])
            }
        let confirm1 = readline.question(`Presione enter para continuar `)
            break
        /*fim inserir*/
    
    case 2:
        if(listas.length == 0){
            console.clear()
            console.log("A lista esta atualmente vazia")
            let confirm2 = readline.question(`Pressione enter para continuar `)
            }else{
        console.clear()
        for(i = 0; i < listas.length; i ++){
       console.log(`[${i+1}] ` +listas[i])
       }
       var resposta2 = readline.question(`Qual numero deseja apgar? `)
       while(resposta2 < 0 ||  resposta2 > listas.length){
        if(listas.length == 1){
        
        var resposta2 = readline.question(`O numero digitado não esta nos indices da lisa atualmente, digite um numero possivel` + "\n")
       }else{
        
        var resposta2 = readline.question(`O numero digitado não esta nos indices da lisa atualmente, digite um numero entre 1 e ${listas.length} ` + "\n")
       }
    }
       listas.splice(resposta2 - 1,1)
       console.clear()
       for(i = 0; i < listas.length; i ++){
           console.log(`[${i+1}] ` +listas[i])
           }
           if(listas.length == 0){
            console.log("A lista agora esta vazia")
           }
       let confirm2 = readline.question(`Pressione enter para continuar `)
           /*fim apagar*/
        }
    break

    case 3:
        if(listas.length == 0){
        console.clear()
        console.log("A lista esta atualmente vazia")
        let confirm3 = readline.question(`Pressione enter para continuar `)
        }else{
        console.clear()
            
        for(i = 0; i < listas.length; i ++){
         console.log(`[${i+1}] ` ,listas[i])
        }
        let confirm3 = readline.question(`Presione enter para continuar `)
    }
        /*fim listar*/
    break
}
    
}while(escolha_opções != 4)

    console.clear()
    console.log("programa finalizado")



  




