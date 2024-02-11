const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const logger = require('./middlewares/logger');
require('dotenv').config();
const multer = require('multer');
const path = require('path');

// Variables
const app = express();
const PORT = process.env.PORT || 5001;


// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(logger);

// Multer Config
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        const fileName = Date.now() + path.extname(file.originalname);
        cb(null, fileName);
    },
});

const upload = multer({storage});

// make uploads folder public
app.use('/public', express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// try to connect to the database
mongoose.connect(process.env.DB_URL).then(() => {
    console.log('Connected to the database');
}).catch((err) => {
    console.log('Failed to connect to the database', err);
});


// Import Routes
const AuthRoute = require('./routes/Auth.route');
const AdminRoute = require('./routes/Admin.route');
const AdminRestoRoute = require('./routes/AdminResto.route');
const UserRoute = require('./routes/User.route');
const CategoryRoute = require('./routes/Category.route');
const ContactRoute = require('./routes/Contact.route');
const CommandeRoute = require('./routes/Commande.route');

// Use Routes
app.use('/api/auth', AuthRoute);
app.use('/api/admin', AdminRoute);
app.use('/api/adminresto', AdminRestoRoute);
app.use('/api/users', UserRoute);
app.use('/api/category', CategoryRoute);
app.use('/api/contact', ContactRoute);
app.use('/api/commande', CommandeRoute);


// Upload Route
app.post('/api/upload', upload.single('file'), (req, res) => {
    const filePath = req.file.path;
    res.send({ filePath: filePath });
});
