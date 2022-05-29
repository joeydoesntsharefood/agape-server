interface IHashResponse {
  digest: string
  digestEnc: string
  type: string
  key: string
}

interface IError {
  message: string
  erro: string
  status: boolean
}

export {
  IHashResponse,
  IError
}