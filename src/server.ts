import express from 'express'
import { configs } from './config/_localConfig'
import bodyParser from 'body-parser'
import servicesSwitch from './doIt/servicesSwitch'
import { possibleServices } from './doIt/constants'
import cors from 'cors'
import routes from './const/routes'
import getOptions from './resources/getOptions'
import servicesSwitchWithSearch from './doIt/servicesSwitchWithSearch'

const app = express()

app.use(bodyParser.json())

const corstOpts = cors({ origin: true })

app.use(corstOpts);

app.get(`${routes.services}/list`, (request, response) => {
  return response.json({
    message: 'Fizemos uma listagem de services',
    data: possibleServices
  })
})

app.get(routes.optionsServices, (request, response) => {
  if (!request.query.service) return response.json({ message: 'Preciso saber qual o servico' })
  return response.json({
    message: 'Essas sao as opcoes',
    data: getOptions(request.query.service)
  })
})

app.post(routes.execServiceOption, (request, response) => {
  console.log(request.query)
  return response.json({
    message: 'Executando o Pedido'
  })
})

app.post(`${routes.execServiceOption}/search`, (request, response) => {
  if (!request.body) return response.json({
    message: 'Preciso dos argumentos'
  })
  servicesSwitchWithSearch(request.body)
  return response.json({
    message: 'Executando o Pedido'
  })
})

app.post(routes.services, (request, response) => {
  servicesSwitch(request.body)
  return response.json({ message: 'Fazendo o solicitado' })
})

app.listen(configs.port)