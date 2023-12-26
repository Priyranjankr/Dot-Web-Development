//  For Home BitScripture

const siteName = document.getElementById("site-name");
const text = "BitScripture";
let index = 0;

function type() {
    if (index < text.length) {
        const span = document.createElement("span");
        span.style.color = "#ff9900"; // Set text color to #ff9900
        span.textContent = text.charAt(index);
        siteName.appendChild(span); 
        index++;
        setTimeout(type, 100);
    }
}

type();
//  for Paragraph of Home Section

const typingText = `BitScripture is your digital gateway to wisdom in the modern age. We're more than a website; we're your companions
    on a quest for understanding. In a world overflowing with information, we're here to guide you through
    the digital labyrinth. Knowledge is our currency, and your intellectual journey starts here. Our digital library is
    a treasure trove of insights, catering to coding enthusiasts, tech-savvy minds, and curious learners. Together,
    we'll redefine the boundaries of digital wisdom. Welcome to BitScripture, where every click is a step towards
    enlightenment.`;

const typingContainer = document.getElementById('typing-text');
let charIndex = 0;

function typeText() {
    if (charIndex < typingText.length) {
        typingContainer.innerHTML += typingText.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 30); // Adjust typing speed (lower value for faster typing)
    }
}

typeText();

