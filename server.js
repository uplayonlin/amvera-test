const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

console.log('🔍 Starting server...');
console.log('🔍 PORT:', PORT);

app.get('/', (req, res) => {
    console.log('📥 GET / request received!');
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/health', (req, res) => {
    console.log('📥 GET /health request received!');
    res.json({
        status: 'ok',
        port: PORT,
        message: 'Amvera is working!',
        timestamp: new Date().toISOString()
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ Server running on http://0.0.0.0:${PORT}`);
});