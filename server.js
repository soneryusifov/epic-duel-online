const express = require('express');
const http = require('http');
const path = require('path');
const { ExpressPeerServer } = require('peer');

const app = express();
const server = http.createServer(app);
const peerServer = ExpressPeerServer(server, {
  path: '/',
  allow_discovery: false,
  proxied: true,
  alive_timeout: 60000,
  expire_timeout: 5000,
  concurrent_limit: 100
});

app.get('/health', (_req, res) => res.status(200).json({ ok: true, service: 'epic-duel-signaling' }));
app.use('/peerjs', peerServer);
app.use(express.static(__dirname, { extensions: ['html'] }));
app.get('*', (_req, res) => res.sendFile(path.join(__dirname, 'index.html')));

const port = process.env.PORT || 3000;
server.listen(port, '0.0.0.0', () => console.log(`Epic Duel online server listening on ${port}`));
