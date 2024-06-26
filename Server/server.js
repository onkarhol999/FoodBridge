// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./Models/User.js');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1/FoodBridge', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.post("/", async (req, res) => {
    try {
        let user = new User(req.body);
        let result = await user.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/getUsers', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ error: 'Error fetching user data' });
    }
});

app.post("/addCompletedDelivery", async (req, res) => {
    try {
        let delivery = new CompletedDelivery(req.body); // Assuming you have a CompletedDelivery model
        let result = await delivery.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.delete("/removeDelivery/:id", async (req, res) => {
    try {
        const removedDelivery = await User.findByIdAndRemove(req.params.id);
        res.json(removedDelivery);
    } catch (error) {
        console.error('Error removing delivery:', error);
        res.status(500).json({ error: 'Error removing delivery' });
    }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
