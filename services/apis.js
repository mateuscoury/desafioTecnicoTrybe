const fetch = require('node-fetch')

const requestCorreio = async (endereço) => {

  const { logradouro, complemento, bairro, localidade } = await fetch(`https://viacep.com.br/ws/${endereço}/json/`).then(data => data.json()).then(data => data)
  const endereço1 = `${logradouro}/${complemento}/${bairro}/${localidade}`
  return endereço1
}


module.exports = requestCorreio