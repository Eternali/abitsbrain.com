import app from './app'

const router = app.$router
const meta = app.$meta()

export default (context) => {
  router.push(context.url)
  context.meta = meta
  return app
}