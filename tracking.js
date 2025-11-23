// Simple tracking script
(function() {
    // Registrar visita
    const trackingData = {
        site_id: 66,
        timestamp: new Date().toISOString(),
        referrer: document.referrer,
        userAgent: navigator.userAgent
    };
    
    // Enviar a backend (ajustar URL según deployment)
    fetch('https://tu-backend.com/api/stats/' + 66 + '/visit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(trackingData)
    }).catch(err => console.log('Tracking error:', err));
})();
