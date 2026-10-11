# Epic Duel Online

Node.js + PeerJS signaling server for the Epic Duel browser game.

## Deploy on Render
- Runtime: Node
- Build command: `npm install`
- Start command: `npm start`
- Health check: `/health`

The browser client should connect to the same HTTPS host using the `/peerjs` path.

**Status:** Signaling only. Real-time combat-state synchronization must be implemented separately.
