
import { Api } from "../js/Api.js";

let select = document.getElementById("buscarCliente")

const clientes = await Api.listarClientes()
let botaodeletar = document.getElementById("botaodeletar")




botaodeletar.addEventListener("click", async(event)=>{
event.preventDefault()
let outro = select.value

await Api.deletarCliente(outro)
exibirNome(clientes)
})



function exibirNome(clientes){
    select.innerHTML=""
 clientes.forEach(cliente => {
     let option = document.createElement("option")
     option.value= cliente.id
     option.innerText = cliente.nome
     select.appendChild(option)

    });
} 
exibirNome(clientes)

