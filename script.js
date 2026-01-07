// Function to handle the B-BBEE Certificate Download
function downloadCertificate() {
    // 1. Create a virtual link
    const link = document.createElement('a');
    
    // 2. Set the target file (Make sure bbbee.pdf is in your images folder)
    // If you don't have the PDF yet, change this to an image for testing
    link.href = 'images/bbbee.pdf'; 
    
    // 3. Name the file for the user
    link.download = 'Moteane_BBBEE_Level1.pdf';
    
    // 4. Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Optional: Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});