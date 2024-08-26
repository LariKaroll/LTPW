function validarCadastro() {
    var nome_cadastro = formCadastro.nome_cad.value;
    var email_cadastro = formCadastro.email_cad.value;
    var senha_cadastro = formCadastro.senha_cad.value;
    
    if (nome_cadastro == "") {
        alert('Preencha o campo com seu nome !!!!');
        formCadastro.nome_cad.focus();
        return false;
    }else if (email_cadastro == "") {
        alert('Preencha o campo com seu email !!!!');
        formCadastro.email_cad.focus();
        return false;
    }else if (senha_cadastro == ""|| senha_cadastro.length < 6) {
        alert('Preencha o campo com sua senha! (mínimo de 6 e no máximo de 8 caracteres)');
        formCadastro.senha_cad.focus();
        return false;
    }else{
        alert("Usuário cadastrado com sucesso \nO e-mail do cadastro "+email_cadastro+ " terá que ser validado! \nFavor confirmar o cadastro no seu e-mail!");
    }
}

function validarLogin() {
    var email_login = formLogin.email_login.value;
    var senha_login = formLogin.senha_login.value;

    if (email_login == "") {
        alert('Preencha o campo com seu email !!!!');
        formCadastro.email_login.focus();
        return false;
    }else if (senha_login == ""|| senha_login.length < 6) {
        alert('Preencha o campo com sua senha! (mínimo de 6 e no máximo de 8 caracteres)');
        formCadastro.senha_login.focus();
        return false;
    }else{
        alert("Bem vindo ao sistema" + email_login);
    }
    
}