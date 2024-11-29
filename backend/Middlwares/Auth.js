// const jwt = require('jsonwebtoken');

// // Middleware to ensure the user is authenticated
// const ensureAuthenticated = (req, res, next) => {
//   const authHeader = req.headers['authorization'];

//   if (!authHeader) {
//     return res.status(403).json({ message: 'Unauthorized: JWT token is required' });
//   }

//   // Extract the token from the Authorization header
//   const token = authHeader.split(' ')[1];

//   if (!token) {
//     return res.status(403).json({ message: 'Unauthorized: Invalid token format' });
//   }

//   try {
//     // Verify the token using the secret key
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     // Attach the user details to the request
//     req.user = decoded;

//     // Proceed to the next middleware
//     next();
//   } catch (err) {
//     return res.status(403).json({ message: 'Unauthorized: JWT token is invalid or expired' });
//   }
// };

// module.exports = ensureAuthenticated;
