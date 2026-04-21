// Mode 1: AI DP Generate karna (Text se)
function generateAI_DP() {
    const name = document.getElementById('nameInput').value;
    const resultDiv = document.getElementById('result');
    
    if (!name) {
        alert("Jani, pehle apna naam to likho!");
        return;
    }

    resultDiv.innerHTML = "Generating... loading...";

    // AI API URL
    const prompt = `A professional 3D profile picture with the name "${name}" written in stylish neon golden typography, dark background, cinematic lighting, 8k resolution`;
    
    // Result show karna
    resultDiv.innerHTML = `
        <p>Ye rahi aapki AI DP:</p>
        <img src="https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}" alt="AI DP" style="width: 100%; border-radius: 10px; border: 2px solid #00ff00;">
    `;
}

// Mode 2: Apni pic upload karke naam likhyn
function processImage() {
    const fileInput = document.getElementById('imageInput');
    const name = document.getElementById('nameInput').value;
    const resultDiv = document.getElementById('result');
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    if (!fileInput.files[0] || !name) {
        alert("photo upload karo aur naam bhi likho!");
        return;
    }

    resultDiv.innerHTML = "Processing image...";

    const reader = new FileReader();
    reader.onload = function(event) {
        const img = new Image();
        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            
            // Text Styling (Hacker Style)
            ctx.font = "bold 80px Arial";
            ctx.shadowColor = "black";
            ctx.shadowBlur = 10;
            ctx.fillStyle = "#00ff00"; // Nawab ZADA Green
            ctx.textAlign = "center";
            ctx.fillText(name, canvas.width / 2, canvas.height - 100);
            
            // Image Show karna
            const dataURL = canvas.toDataURL();
            resultDiv.innerHTML = `<p>Ye rahi aapki Edited DP:</p><img src="${dataURL}" style="width:100%; border: 2px solid #00ff00;">`;
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(fileInput.files[0]);
}
