/* Alias */

type Numero = number

let n: Numero = 5

type LoginCredentials = {
    username: string,
    password: string
}

function login(data: LoginCredentials){
    console.log('Usiario: ' + data.username)
    console.log('Contrasenia: ' + data.password)
}

login({
    username: 'jcmarchesini', 
    password: 'Pl33nkmldr7wx'
    })