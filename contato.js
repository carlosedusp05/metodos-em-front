'use strict'

async function mostrarContatos() {
    const url = 'https://bakcend-fecaf-render.onrender.com/contatos/'

    const response = await fetch (url)
    const contatos = await response.json()

    console.log(contatos)
    return contatos
}

async function criarContato(contato) {
    const url = 'https://bakcend-fecaf-render.onrender.com/contatos/'

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(contato)
    } 

    const response = await fetch(url, options)

    console.log(response.ok)
    return response.ok
}

async function atualizarContato(id, contato) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`

    const options = {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(contato)
    } 

    const response = await fetch(url, options)

    console.log(response.ok)
    return response.ok
}

async function excluirContato(id) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`

    const options = {
        method: 'DELETE'
    }

    const response = await fetch(url, options)

    console.log(response.ok)
    return response.ok


}

mostrarContatos()

const novoContato = {
    "nome": "Carlos Eduardo Atualizado",
    "celular": "11 9 9030-7564",
    "foto": "https://img.freepik.com/psd-gratuitas/renderizacao-3d-do-estilo-de-cabelo-para-o-design-do-avatar_23-2151869121.jpg",
    "email": "carlos.edu@gmail.com",
    "endereco": "Av. São Benedito, 154",
    "cidade": "Valinhos"
}