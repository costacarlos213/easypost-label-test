import Easypost from '@easypost/api'

const api = new Easypost(process.env.DEVELOPMENT_KEY)

export { api }