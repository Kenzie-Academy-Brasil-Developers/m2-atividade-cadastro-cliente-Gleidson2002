
import { Api } from "../js/Api.js";
  
 

let fcadastro=document.getElementById("cadastro")
console.log(fcadastro)
fcadastro.addEventListener("submit",(event)=>{
    event.preventDefault()
    let nome = document.getElementsByName("nome")[0].value
    let dnasci = document.getElementsByName("data_nasc")[0].value
    
    //let inicial = new Date(dnasci)
    //let final = new Date()
    //let idade= Math.floor((final- inicial)/31536000000)
    let sexo = document.getElementsByName("sexo")[0].value
    let email = document.getElementsByName("email")[0].value
  
    let cep = document.getElementsByName("cep")[0].value
    let rua = document.getElementsByName("rua")[0].value
    let numero = document.getElementsByName("numero")[0].value
    let bairro = document.getElementsByName("bairro")[0].value
    let cidade = document.getElementsByName("cidade")[0].value
    let estado = document.getElementsByName("estado")[0].value
    let telefone = document.getElementsByName("telefone_fixo")[0].value
    let endereco= {
        bairro: bairro,
        cep: cep,
        cidade: cidade,
        estado: estado,
        numero:numero,
        rua: rua
    }


    
    const data = {
        nome: nome,
        idade: dnasci,
        data_nasc: dnasci,
        email:email,
        sexo: sexo,
        endereco: endereco,
        telefone: telefone


    }

cadastrar(data)
})
async function cadastrar(data){
    await Api.cadastrarCliente(data)
}

