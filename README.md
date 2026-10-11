# Epic Duel Online

A browser-based, turn-based sci-fi arena game served by a small Node.js/Express app.

## Local run

- Install Node.js (LTS).
- Run `npm install`.
- Run `npm start`.
- Open `http://localhost:3000`.

The server binds to `0.0.0.0` and uses the host-provided `PORT` environment variable when present. `GET /health` returns a JSON health response.

## Game features

- AI matches: 1v1, 2v2, 3v3, and Juggernaut (one fighter versus two challengers).
- Character builds using 30 points, with damage, health, shield, lifesteal, mana, and defense.
- A merchant with 10 swords, 10 pistols, and 10 bazookas; owned equipment and gold are stored in the browser.
- Responsive arena and a manually selectable portrait layout.
- Turn-based attacks, skills, weapon cooldowns, Rage, critical hits, shield absorption, and victory/defeat rewards.

## Online rooms: important limitation

The Node service hosts PeerJS signaling at `/peerjs`; the browser then connects directly to the other player's browser. The current online room flow is **1v1 only**. The room host's browser calculates the combat and sends state snapshots to the guest.

This is a **host-authoritative browser implementation, not an authoritative game server**. A modified host client can potentially manipulate combat outcomes, and gold/equipment saved in local storage are not secure competitive progression. Do not use this as a cheat-resistant ranked or real-money game without moving state validation and rewards to a trusted server.

## Render deployment

- Runtime: Node
- Build command: `npm install`
- Start command: `npm start`
- Health check path: `/health`

Use the deployed HTTPS origin for both players so PeerJS can use the same host and `/peerjs` path.

## Verification status

The source's five inline JavaScript blocks were syntax-checked after the latest game-client changes. This does not replace browser-based gameplay tests. The public deployment health check, two-browser room handshake, and live multiplayer turn flow have not been independently verified in this update.
