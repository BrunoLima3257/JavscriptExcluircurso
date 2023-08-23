const caixa = document.querySelector("#caixa");
let cursos = [];



let resposta = "";

//incluindo curso na matriz
while(resposta !="N"){
    let curso = prompt("Digite o nome do curso :")
    cursos.push(curso.toUpperCase());
    resposta = prompt("Cadastrar outro curso S/N");
    if(resposta.toUpperCase()=="N"){
        cursos.forEach((aula)=>{
            let p = document.createElement("p");
            p.innerHTML = aula + "<br>---------------------<br>";
            caixa.appendChild(p);
        });
        break;
    }
}

//excluir 
 let reposta = prompt("Excluir curso S/N");
if(reposta.toUpperCase()=="S"){
    let curso = prompt("Digite o nome do curso para excluir")
    //pegando posição do elemnto dentro da matriz
    alert("posição do curso" + cursos.indexOf(curso.toUpperCase(),1))
    let posicao =  cursos.indexOf(curso.toUpperCase(),1)
    //apagando o curso com método .splice 
    cursos.splice(posicao);
    cursos.forEach((aula)=>{
        let p = document.createElement("p");
        p.innerHTML = aula + "<br>---------------------<br>";
        caixa.appendChild(p);
    });
    
}

