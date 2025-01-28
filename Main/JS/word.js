document.addEventListener("DOMContentLoaded", () => {
    const typingText = "Chúc Trâm một năm mới vui vẻ, hạnh phúc, bình an, an khang thịnh vượng, sức khoẻ dồi dào 💪💪💪, gặp nhiều may mắn 🍀🍀🍀,vạn sự như ý, phát tài phát lộc, 6262 💵💵💵 ha!!! ^^ ✌️✌️✌️";
    const typingContainer = document.getElementById("typing-container");
    const typingElement = document.getElementById("typing-text");

    let index = 0;

    function typeEffect() {
        if (index < typingText.length) {
            typingElement.textContent += typingText[index];
            index++;
            setTimeout(typeEffect, 150); 
        } else {
            
            setTimeout(() => {
                typingContainer.classList.add("hidden");
            }, 60000);
        }
    }

    typeEffect();
});
