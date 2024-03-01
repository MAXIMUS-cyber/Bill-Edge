const jsonServer = require('json-server');
const auth = require('json-server-auth');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.db = router.db;
server.use(auth);
server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});

server.post('/register', (req, res, next) => {
    const { username, password } = req.body;
    // Validate and register user
  });
  
  server.post('/login', (req, res, next) => {
    const { username, password } = req.body;
    // Authenticate user and generate JWT token
  });
  
  server.get('/health', (req, res) => {
    res.json({
      status: 'OK',
      version: '1.0.0'
    });
  });
  
