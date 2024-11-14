
        function showSurprise() {
            const confettiDiv = document.getElementById('confetti');
            confettiDiv.style.display = 'block';
            confettiDiv.innerHTML = "\uD83C\uDF88 \uD83C\uDF89 \uD83C\uDF82 \uD83C\uDF88".repeat(50);
            confettiDiv.style.fontSize = '2rem';
            confettiDiv.style.animation = 'fall 2s infinite';

            // Simple confetti fall animation
            confettiDiv.style.position = 'absolute';
            confettiDiv.style.top = '20px';
            confettiDiv.style.left = '0';
            confettiDiv.style.right = '0';
            confettiDiv.style.textAlign = 'center';
        }
