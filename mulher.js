const express = require("express")
const router = express.Router()


const app = express ()
const porta = 3333

function mostraMulher(request, response){
    response.json({
        nome: 'Larissa Sarapio',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fveja.abril.com.br%2Fcoluna%2Fveja-gente%2Fo-acordo-de-larissa-manoela-com-os-pais-apos-batalha-na-justica&psig=AOvVaw0efL4SQ3Td-Ro1yTR3IYsY&ust=1702205123200000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNDrkrCWgoMDFQAAAAAdAAAAABAD',
        minibio: 'Desenvolvedora backend - java e python'
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)