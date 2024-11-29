
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const AuthRouter = require('./Routes/AuthRoutes'); 
// // const ProductRoutes = require ('./Routes/ProductRoutes');

// require('./Models/db');

// const PORT = process.env.PORT || 8080; 

// const app = express();


// app.use(bodyParser.json());
// app.use(cors());


// app.get('/ping', (req, res) => {
//     res.send('PONG');
// });


// app.use('/rbac', AuthRouter);
// // app.use('/products', ProductRoutes);



// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });



const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRoutes');
const ProductRouter = require('./Routes/ProductRoutes');

require('dotenv').config();
require('./Models/db');
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors({
    origin: '*'
}));


app.get('/ping', (req, res) => {
    res.send('PONG');
});

app.use('/auth', AuthRouter);
// app.use('/products', ProductRouter);


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})