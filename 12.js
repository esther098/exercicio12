function verificar(){
    let selecionado= document.querySelector('input[name="resposta"]:checked')
    if(!selecionado){
        document.getElementById("resposta").textContent="Geralmente se responde a pergunta feita educadamente ao usuário"
    }
    if(selecionado.value==="Sim"){
        document.getElementById("resposta").textContent="O mínimo depois de tanto estresse"
    }else{
        document.getElementById("resposta").textContent="Resposta ERRADA"}}

