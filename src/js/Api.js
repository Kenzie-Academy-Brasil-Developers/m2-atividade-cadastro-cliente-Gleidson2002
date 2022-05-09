class Api {

    static async listarClientes(){

        const response = await fetch("https://atividade-api-clientes.herokuapp.com/clientes")
        const data     = await response.json()
    
        return data

    }

    static async cadastrarCliente(data){

        const baseUrl = "https://atividade-api-clientes.herokuapp.com/clientes"
        const response = await fetch(baseUrl,{
            method: "PATCH",
            headers:{
                "Content-Type": "application/json",

            },
            body: JSON.stringify(data)
            
        })
        console.log(data)
        

    }
    

    static async editarCliente(id, data){
        let response = await fetch("https://atividade-api-clientes.herokuapp.com/clientes/"+id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(data)
  })

    }

    static async deletarCliente(id){

    }

}

export {Api}


  
  