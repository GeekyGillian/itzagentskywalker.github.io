// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json()); // Middleware to parse JSON bodies

// Sample data for news and shop items
const newsData = [
    {
        image: 'Star_wars_vision.jpeg',
        title: 'Star Wars Vision Returns with Volume 3 in 2025',
        description: 'Details about Star Wars Vision Volume 3...',
    },
    {
        image: 'newsposter2.jpeg',
        title: 'New Star Wars Celebration Japan 2025 Badge Art - Updated',
        description: 'Information about Star Wars Celebration Japan...',
    },
    {
        image: 'skeletoncrew.jpeg',
        title: 'The Inside Story of Star Wars: Skeleton Crew’s Creature Effects',
        description: 'Insights into Skeleton Crew’s Creature Effects...',
    },
];

const shopItemsData = [
    {
        name: "Coffee Table",
        image: "Table.jpeg",
        description: "A stylish coffee table made from durable wood.",
        price: 45,
    },
    {
        name: "Star Wars Mug",
        image: "mug2.jpg",
        description: "A unique Star Wars-themed mug.",
        price: 15,
    },
    {
        name: "Vader's Watch",
        image: "Darth Vader watch.jpg",
        description: "A stylish watch inspired by Darth Vader.",
        price: 30,
    },
    {
        name: "Yoda's Plush",
        image: "yoda.jpeg",
        description: "Cute Baby Yoda plush.",
        price: 25,
    },
    {
        name: "Lego Death Star",
        image: "lego1.jpg",
        description: "Lego Star Wars Set: The Death Star.",
        price: 80,
    },
];

// Define API routes
app.get('/api/news', (req, res) => {
    res.json(newsData);  // Respond with the news data
});

app.get('/api/shop-items', (req, res) => {
    res.json(shopItemsData);  // Respond with the shop items data
});

// Serve the main HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});