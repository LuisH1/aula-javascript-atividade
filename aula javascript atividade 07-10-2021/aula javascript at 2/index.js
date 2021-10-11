var botao = document.getElementById("botao");

botao.addEventListener("click", () =>{

    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if(usuario == "" && senha == ""){
        document.getElementById("mensagem").innerHTML = "Preencha os campos que estão vazios."
    } else{
        document.getElementById("mensagem").innerHTML = "Fazendo Login."
    }
})