const express = require('express');
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const connectDB = require('./config/db');

dotenv.config();

const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'))

//Connecting Database
connectDB();

//Routes
app.use('/api/v1/lead', require('./routes/leadRoutes'));

app.get('/', (req, res) => {
    res.send('API is working! 🚀');
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

