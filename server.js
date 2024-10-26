const express = require('express');
const app = express();
app.use(express.json());

// Example data structure to track EMI payments
const users = [
    { userId: 1, emiPaid: true },
    { userId: 2, emiPaid: false }
];

app.post('/api/checkPaymentStatus', (req, res) => {
    const { userId } = req.body;
    const user = users.find(user => user.userId === userId);

    if (user) {
        res.json({ emiPaid: user.emiPaid });
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});


