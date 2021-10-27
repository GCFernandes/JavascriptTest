// Dados iniciais
var aData = [
    { codigo : '001001' , nome: 'Jose da Silva', email : 'jose@email.com' , telefone : '(11) 99901-1234' } ,
    { codigo : '001002' , nome: 'Marcio de Souza', email : 'marcio@email.com' , telefone : '(11) 99902-1234' },
    { codigo : '001003' , nome: 'Mauricio Cruz', email : 'mauricio@email.com' , telefone : '(11) 99903-1234' },
    { codigo : '001004' , nome: 'Fabiana Dias', email : 'fabiana@email.com' , telefone : '(11) 99904-1234' }
]

//Limpa os contatos na pagina e reescreve baseado na variavel aData
function refresh(){
    let contacts = document.getElementById('contacts')
    contacts.innerHTML = ""
    for (let contact in aData) {
        contacts.innerHTML += '<li> Codigo: ' + aData[contact].codigo + '<br>';
        contacts.innerHTML += 'Nome: ' +  aData[contact].nome + '<br>';
        contacts.innerHTML += 'email: ' + aData[contact].email + '<br>';
        contacts.innerHTML += 'telefone: ' + aData[contact].telefone + '</li><br><br>';
    }
}

//Verifica se o numero nao eh nulo e contem um '@' e um '.'
function verifyEmail(){
    let email = document.getElementById('newContactEmail').value;
    console.log(email)
    if(email == null || email == ""){
        document.getElementById('emailError').innerHTML = "Insira um email <br><br>"
        return(false)
    }
    if(!email.includes('@') || !email.includes('.')){
        document.getElementById('emailError').innerHTML = "Insira um email valido<br><br>"
        return(false)
    }
    return true;
}

//Verifica se o nome nao eh nulo e contem um espaco, indicando um nome completo
function verifyName(){
    let name = document.getElementById('newContactName').value;
    if(name == null || name == ""){
        document.getElementById('nameError').innerHTML = "Insira um nome <br><br>"
        return(false)
    }
    if(!name.includes(' ')){
        document.getElementById('nameError').innerHTML = "Insira o nome completo<br><br>"
        return(false)
    }
    return true;
}

//Verifica se o codigo digitado nao eh nulo, eh composto apenas por numeros e nao foi usado ainda
function verifyCode() {
    let code = document.getElementById('newContactCode').value;
    if(code == null || code == ""){
        document.getElementById('codeError').innerHTML = "Insira um codigo <br><br>"
        return(false)
    }
    if(code.match(/^[0-9]+$/) == null){
        document.getElementById('codeError').innerHTML = "O codigo deve conter somente numeros<br><br>"
        return(false)
    }
   
    for (let contact in aData) {
        if(aData[contact].codigo == code){
            document.getElementById('codeError').innerHTML = "O codigo inserido ja esta em uso<br><br>"
            return(false)
        }
    }
    return true;
}

//Verifica se o numero nao eh nulo
function verifyPhone(){
    let phone = document.getElementById('newContactPhone').value;
    if(phone == null || phone == ""){
        document.getElementById('phoneError').innerHTML = "Insira um telefone <br><br>"
        return(false)
    }
    return true;
}

//Apaga as mensagens de erro na pagina
function cleanErrors(){
    document.getElementById('nameError').innerHTML = '<br><br>'
    document.getElementById('emailError').innerHTML = '<br><br>'
    document.getElementById('phoneError').innerHTML = '<br><br>'
    document.getElementById('codeError').innerHTML = '<br><br>'
}

//Salva os valores dos contatos digitados na pagina na variavel aData
function saveContact(){
    cleanErrors()

    isValidInput = true;
    isValidInput = verifyEmail() && isValidInput;
    isValidInput = verifyPhone() && isValidInput;
    isValidInput = verifyCode() && isValidInput;
    isValidInput = verifyName() && isValidInput;

    //Verificacao dos dados digitados na pagina
    if(isValidInput){
        newContact = {
            codigo: document.getElementById('newContactCode').value,
            nome: document.getElementById('newContactName').value,
            email: document.getElementById('newContactEmail').value,
            telefone: document.getElementById('newContactPhone').value,
        }
        aData.push(newContact);
    }
    //Atualizando os dados na pagina
    refresh()
}

refresh()