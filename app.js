const handleGenerateQrCode = () => {
    const url=document.getElementById('text-input').value.trim();
    if(!url) {
        return alert("Please enter a valid text or URL");
    }

    // Clear old QR
    document.getElementById("qr-code").innerHTML = "";

    

    try {
        new QRCode(document.getElementById("qr-code"), {
            text: url,
            width: 130,
            height: 130,
            colorDark : "#000000ff",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
            
        }); 
        
        alert("Successfully generated QR code!");
        document.getElementById('text-input').value="";

    } 
    catch (error) {
        console.error("Error generating QR code:", error);
        alert("Failed to generate QR code. Please try again.");
    }
}