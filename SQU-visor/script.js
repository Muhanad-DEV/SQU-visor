function sendMessage() {
    const userInput = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');
    
    const userMessage = userInput.value.trim();
    if (userMessage) {
        const userMessageElement = document.createElement('div');
        userMessageElement.className = 'chat-message user';

        // Format the time to exclude seconds
        const timeString = new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
        });

        // Detect language direction (RTL for Arabic characters)
        const isRTL = /[\u0600-\u06FF]/.test(userMessage);
        userMessageElement.innerHTML = `
            <span class="timestamp">You ${timeString}</span>
            <div class="message-bubble" style="direction: ${isRTL ? 'rtl' : 'ltr'}; text-align: ${isRTL ? 'right' : 'left'};">
                ${userMessage}
            </div>
        `;
        chatBox.appendChild(userMessageElement);
        
        const botMessageElement = document.createElement('div');
        botMessageElement.className = 'chat-message bot';
        botMessageElement.innerHTML = `
            <span class="timesBot">ASK.SQU ${timeString}</span>
            <div class="message-bubble" style="direction: ${isRTL ? 'rtl' : 'ltr'}; text-align: ${isRTL ? 'right' : 'left'};">
                This is a response to: ${userMessage}
            </div>
        `;
        chatBox.appendChild(botMessageElement);
        
        userInput.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}





// Handle button group for Student/Employee selection
document.querySelectorAll('.btn.left, .btn.right').forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from both buttons
        document.querySelectorAll('.btn.left, .btn.right').forEach(btn => {
            btn.classList.remove('active');
            btn.style.color = '#7A7669'; // Reset text color to default
        });

        // Add active class to the clicked button
        this.classList.add('active');
        this.style.color = 'skyblue'; // Highlight the selected button
    });
});


// Prevent icon buttons from affecting the state of Student/Employee buttons
document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent interaction from altering the active state of the Student/Employee buttons
    });
});


// Adjust textarea height dynamically
function adjustTextareaHeight(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = `${Math.min(textarea.scrollHeight, 96)}px`;
}