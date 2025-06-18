// Simple script that injects text into DOM
document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const injectedText = document.createElement('div');
    const now = new Date();
    const timeString = now.toLocaleString();
    injectedText.textContent = `injected by js at ${timeString}`;
    injectedText.style.color = '#666';
    injectedText.style.fontSize = '14px';
    injectedText.style.marginTop = '20px';
    body.appendChild(injectedText);
}); 