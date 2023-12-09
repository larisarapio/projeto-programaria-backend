const express = require("express")
const router = express.Router()

const app = express ()
const porta = 3333

const mulheres = [
    {
        nome: 'Larissa Sarapio',
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fveja.abril.com.br%2Fcoluna%2Fveja-gente%2Fo-acordo-de-larissa-manoela-com-os-pais-apos-batalha-na-justica&psig=AOvVaw0efL4SQ3Td-Ro1yTR3IYsY&ust=1702205123200000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNDrkrCWgoMDFQAAAAAdAAAAABAD',
        minibio: 'Desenvolvedora backend - java e python'
    },
    {
        nome: 'Iana Chan',
        imagem: 'https://bit.ly/3JCWBqP',
        miniobio: 'Programadora da PrograMaria'
    },
    {
        nome: 'Nina da hora',
        imagem: 'https://bit.ly/3FKpFaz',
        miniobio: 'Hacker antirracista'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres'), mostraMulheres)
app.listen(porta, mostraPorta)