import axios from 'axios'

const hash = {
  genHash: async (value: string) => {
    try {
      const response = await axios(`http://api.hashify.net/hash/md4/hex?value=${value}`)
      return response
    }
    catch (err) {
      console.log(err)
    }
  }
}

export default hash