document.getElementById("qr-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const text = document.getElementById("qr-text").value.trim();
  if (!text) return;

  const size = 300; // px size
  const url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(text)}`;
  text.value = ''
  // Fetch the QR image as blob
  const response = await fetch(url);
  const blob = await response.blob();

  // Create a preview field and preview the qr-code
  const image = document.createElement("img");
  image.src = url + '.png';
  document.querySelector('.qr-preview').appendChild(image)
  
  // Create a download element for  downloading the qr-code
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "qr-code.png"; 
  link.click();

  URL.revokeObjectURL(link.href);
});
