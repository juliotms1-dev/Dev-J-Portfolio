import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

// Pusher-js é necessário como transport para o Laravel Echo/Reverb
window.Pusher = Pusher;

const echo = new Echo({
    broadcaster: 'reverb',
    key: '47xq53ypidthfuwqmhkd',       // REVERB_APP_KEY do .env do Laravel
    wsHost: 'localhost',
    // wsPort: 8080,
    // wssPort: 8080,
    wsPort: 8081,
    wssPort: 8081,
    forceTLS: false,
    enabledTransports: ['ws', 'wss'],
    disableStats: true,
});

export default echo;
