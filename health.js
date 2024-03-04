async function checkHealth() {
    try {
        const response = await fetch('http://localhost:4000/health');
        if (response.ok) {
            const data = await response.json();
            console.log('Health Check:', data);
        } else {
            console.log('Health Check Failed:', response.statusText);
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}

checkHealth();