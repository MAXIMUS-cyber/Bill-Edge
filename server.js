import { create, router as _router, defaults } from 'json-server';
import auth from 'json-server-auth';
const server = create();
const router = _router('db.json');
const middlewares = defaults();


// Parse JSON request body
server.use(express.json());

server.post('/register', (req, res) => {
    const { username, password } = req.body;

    // Check if the credentials are both present in the request or not
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required.' });
      }
    
      // Check if username already exists in the mock database
      const existingUser = server.db.get('users').find({ username }).value();
      if (existingUser) {
        return res.status(400).json({ error: 'Username already exists.' });
      }
    
      // Add new user to the mock database
      const newUser = { username, password };
      server.db.get('users').push(newUser).write();
    
      // Respond with success message
      res.status(200).json({ message: 'User registered successfully.' });
    
});
  
const jwt = require('jsonwebtoken');

server.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Find user in the mock database
  const user = server.db.get('users').find({ username, password }).value();

  // Check if user exists and password matches
  if (!user || !password) {
    return res.status(401).json({ error: 'Invalid username or password.' });
  }

  // Generate JWT token with user's username
  const token = jwt.sign({ username: user.username }, 'secretKey', { expiresIn: '1h' });

  // Respond with JWT token
  res.status(200).json({ token });
});

  
server.get('/health', (res) => {
    res.json({
      status: 'OK',
      version: '1.0.0'
    });
});

server.use(middlewares);
server.db = router.db;
server.use(auth);
server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});


  
