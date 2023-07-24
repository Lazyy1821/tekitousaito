window.addEventListener('DOMContentLoaded', () => {
        const dateParagraph = document.getElementById('dateParagraph');
    
        function updateDateTime() {
            const now = new Date();
            const options = { 
                year: '2-digit', 
                month: 'numeric', 
                day: 'numeric', 
                hour: 'numeric', 
                minute: 'numeric',
                second: 'numeric',
                hour12: true
            };
            const formattedDateTime = now.toLocaleString('en-US', options);
            dateParagraph.textContent = '[ ' + formattedDateTime + ' ]';
        }
    
        // Initial update
        updateDateTime();
    
        // Update every second
        setInterval(updateDateTime, 1000);
    });