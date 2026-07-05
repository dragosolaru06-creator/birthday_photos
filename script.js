// JavaScript Logic
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Image dictionary for the specific names
const imageResponses = {
    "andrei": "c:\\Users\\Multi\\OneDrive\\Pictures\\Saved Pictures\\andrei_final_photo.jpg", // REPLACE WITH ANDREI'S IMAGE URL
    "edi": "c:\\Users\\Multi\\OneDrive\\Pictures\\Saved Pictures\\edi_final_photo.jpg",       // REPLACE WITH EDI'S IMAGE URL
    "mihai": "c:\\Users\\Multi\\OneDrive\\Pictures\\Saved Pictures\\mihai_final_photo.jpg"    // REPLACE WITH MIHAI'S IMAGE URL
};

// Allow pressing "Enter" to send the message
userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

// Allow clicking the "Send" button to send the message
sendBtn.addEventListener("click", sendMessage);

function sendMessage() {
    const text = userInput.value.trim();
    if (text === "") return;

    // 1. Display User Message
    appendMessage(text, 'user-message');
    userInput.value = ''; // Clear input field

    // 2. Process Bot Response (Simulate a short delay for realism)
    setTimeout(() => {
        const nameKey = text.toLowerCase(); // Convert to lowercase to make it case-insensitive
        
        if (imageResponses[nameKey]) {
            // Name matches one of the 3 cases, send the image
            appendImage(imageResponses[nameKey]);
        } else {
            // Name doesn't match
            appendMessage(`Nice to meet you, ${text}! But I only have images for Andrei, Edi, and Mihai.`, 'bot-message');
        }
    }, 500);
}

function appendMessage(text, className) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${className}`;
    messageDiv.textContent = text;
    chatBox.appendChild(messageDiv);
    scrollToBottom();
}

function appendImage(imageUrl) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message bot-message';
    
    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    imgElement.alt = "Response Image";
    
    messageDiv.appendChild(imgElement);
    chatBox.appendChild(messageDiv);
    
    // Wait for image to load before scrolling to bottom
    imgElement.onload = scrollToBottom;
}

function scrollToBottom() {
    chatBox.scrollTop = chatBox.scrollHeight;
}