function validarFormulario() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmaSenha = document.getElementById("confirmaSenha").value;

    // Validação de campos vazios
    if(nome == '' || email == '' || senha == '' || confirmaSenha == ''){
        alert("Por favor, preencha todos os campos vazios")
        return
    } 

    // Validação do campo de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(!emailRegex.test(email)){
        alert("Digite um e-mail válido!")
        return
    }

    // Validação tamanho da senha
    if(senha.length < 8){
        alert("A senha não pode ter menos que 8 caracteres!")
        return
    }

    if(confirmaSenha != senha){
        alert("Confirme sua senha!")
        return
    }

    alert("O cadastro foi realizado com sucesso")
}

function alternaModoEscuro(){
    const page = document.body
    const formulario = document.getElementById("formulario")

    formulario.classList.toggle("rosa")
    page.classList.toggle("alternaModoEscuro")

    const botao = document.getElementById("dark-mode")
    const isDarkMode = document.body.classList.contains("alternaModoEscuro")

    if(isDarkMode == true){
        botao.textContent = "Light Mode"
    }else{
        botao.textContent = "Dark Mode"
    }

}
