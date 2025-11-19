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
};



let qrImageData = "";

    function generateQR() {
      const text = document.getElementById("text-input").value;
      if (!text) {
        alert("Please enter some text!");
        return;
      }

      QRCode.toDataURL(text, { width: 300 }, function (err, url) {
        if (err) console.error(err);

        qrImageData = url; // save for download

        document.getElementById("qr-code").innerHTML =
          `<img src="${url}" width="250">`;

        document.getElementById("downloadBtn").style.display = "block";
      });
    }

    function downloadQR() {
      const link = document.createElement("a");
      link.href = qrImageData;
      link.download = "qr-code.png";
      link.click();
    }