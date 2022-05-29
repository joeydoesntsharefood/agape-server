import hash from "../consumers/hash"
import { IHashResponse } from "../utils/interfaces"

async function getHash (value: string) {
  try {
    const response = await hash.genHash(value)
    const hashDoc = {
      digest: response?.data.Digest,
      key: response?.data.Key,
      digestEnc: response?.data.DigestEnc,
      type: response?.data.Type
    }
    return hashDoc
  } catch (err) {
    return err
  }
}

export default getHash