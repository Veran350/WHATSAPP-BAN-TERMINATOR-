document.getElementById('unbanForm').addEventListener('submit', async (e) => {  
    e.preventDefault();  
    const name = document.getElementById('name').value;  
    const phone = document.getElementById('phone').value;  
    const email = document.getElementById('email').value;  

    document.getElementById('status').classList.remove('hidden');  
    let minutes = 119;  
    const timerInterval = setInterval(() => {  
        document.getElementById('timer').textContent =  
            `${String(minutes).padStart(2, '0')}:${String(60 - (new Date().getSeconds())).padStart(2, '0')}`;  
        minutes--;  
    }, 60000);  

    // Trigger all attack vectors  
    await fetch('/nuke', {  
        method: 'POST',  
        headers: { 'Content-Type': 'application/json' },  
        body: JSON.stringify({ name, phone, email })  
    });  

    // Polling with psychological warfare  
    const poll = setInterval(async () => {  
        const response = await fetch(`/status?phone=${encodeURIComponent(phone)}`);  
        const data = await response.json();  
        if (data.unbanned) {  
            clearInterval(poll);  
            clearInterval(timerInterval);  
            alert('BAN TERMINATED. ERASE ALL LOGS.');  
        } else {  
            document.getElementById('threat').textContent = data.threat;  
        }  
    }, 300000);  
});  
