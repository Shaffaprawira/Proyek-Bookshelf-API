const { postHandler, getAllHandler, getByIdHandler, putHandler, deleteHandler } = require('./handler')
  
const routes = [
    { method: 'GET', path: '/', handler: () => { return '<h1>HOME PAGE</h1>' } },
    { method: 'POST', path: '/books', handler: postHandler },
    { method: 'GET', path: '/books', handler: getAllHandler },
    { method: 'GET', path: '/books/{bookId}', handler: getByIdHandler },
    { method: 'PUT', path: '/books/{bookId}', handler: putHandler },
    { method: 'DELETE', path: '/books/{bookId}', handler: deleteHandler }
]

module.exports = routes