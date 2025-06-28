const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const apiRoutes = require('./routes/apiRoutes');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api', apiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
