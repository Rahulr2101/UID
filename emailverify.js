function verifyEmail() {
    const emailInput = document.getElementById("email");
    
    const email = emailInput.value.trim();

   
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
       alert("Invalid email format")
        return;
    }

    
    const domainsToCheck = ["gmail.com", "outlook.com"];
    let isDomainValid = false;
    
    for (const domain of domainsToCheck) {
        if (email.endsWith(domain)) {
            isDomainValid = true;
            break;
        }
    }

    if (isDomainValid) {
    } else {
        alert("Invalid email domain")
    }
}