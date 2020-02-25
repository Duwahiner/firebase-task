const express = require('express')
const bodyParser = require('body-parser')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const { adds, initAdmin, read, update, remove } = require('./crud-events/events');

  initAdmin();

app.prepare().then(() => {

  const server = express()
  server.use( bodyParser.json() )

  server.get( '/', async (req, res, next) => {
    let task = await read();
    app.render( req, res, '/', { task: task } );
  }) 

  server.post( '/add', async (req, res) => {
    const taskClient = req.body.task;
    let task = await adds( taskClient );
      res.json( { task } );
  })

  server.put( '/update', async (req, res) => {
    const target = req.body,
        task = await update( target );
      res.json( { task } );
  }) 

  server.delete( '/remove', async (req, res) => {
    const target = req.body,
      task = await remove( target );
      res.json( { task } );
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
