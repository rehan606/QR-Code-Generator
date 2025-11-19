const handleGenerateQrCode = () => {
    const url=document.getElementById('text-input').value.trim();
    if(!url) {
        return alert("Please enter a valid text or URL");
    }
    document.getElementById('text-input').value="";

    try {
        new QRCode(document.getElementById("qr-code"), {
            text: url,
            width: 200,
            height: 200,
            colorDark : "#000000ff",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
            
        }); 
    } 
    catch (error) {
        console.error("Error generating QR code:", error);
        alert("Failed to generate QR code. Please try again.");
    }
}