// Chatbot Functionality
const chatBtn = document.getElementById("chatbot-button");
const chatModal = document.getElementById("chatbot-modal");
const closeBtn = document.getElementById("close-chat");
const chatBody = document.getElementById("chat-body");
const chatInput = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");

chatBtn.addEventListener("click", () => {
    chatModal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    chatModal.style.display = "none";
});

sendBtn.addEventListener("click", sendMessage);
chatInput.addEventListener("keypress", function(e){
    if(e.key === 'Enter') sendMessage();
});

function sendMessage() {
    const message = chatInput.value.trim();
    if(!message) return;

    // Display user message
    const userMsg = document.createElement("div");
    userMsg.textContent = "You: " + message;
    userMsg.style.textAlign = "right";
    chatBody.appendChild(userMsg);

    // Simple AI response simulation
    const aiMsg = document.createElement("div");
    aiMsg.textContent = "AI: " + getAIResponse(message);
    aiMsg.style.textAlign = "left";
    chatBody.appendChild(aiMsg);

    chatInput.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;
}

function getAIResponse(input) {
    input = input.toLowerCase();
    if(input.includes("software")) return "You could become a Software Engineer. Start learning coding and software development.";
    if(input.includes("doctor")) return "A Doctor needs medical studies and practice. Consider MBBS or related courses.";
    if(input.includes("teacher")) return "Teachers need expertise in their subject and teaching skills. Look for B.Ed courses.";
    if(input.includes("accountant")) return "Accounting requires knowledge of finance. Consider CA, B.Com or related courses.";
    if(input.includes("dance")) return "Dancers require practice, performance skills, and creativity. Look for dance academies or courses.";
    return "That's interesting! Tell me more about your career interests.";
}
