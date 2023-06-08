document.addEventListener('DOMContentLoaded', function() {
  // Récupérer le paramètre de requête "service" de l'URL
  const urlParams = new URLSearchParams(window.location.search);
  const serviceId = urlParams.get('service');

  // Obtenir la référence à l'élément du DOM pour afficher les détails du service
  const serviceDetailsElement = document.getElementById('serviceDetails');

  // Vérifier si le paramètre de requête "service" est présent
  if (serviceId) {
    // Afficher les détails du service en fonction de son identifiant
    switch (serviceId) {
      case '1':
        serviceDetailsElement.innerHTML = `
          <h2>Service 1</h2>
          <p>Description of Service 1.</p>
        `;
        break;
      case '2':
        serviceDetailsElement.innerHTML = `
          <h2>Service 2</h2>
          <p>Description of Service 2.</p>
        `;
        break;
      case '3':
        serviceDetailsElement.innerHTML = `
          <h2>Service 3</h2>
          <p>Description of Service 3.</p>
        `;
        break;
      default:
        serviceDetailsElement.innerHTML = `
          <p>Invalid service ID.</p>
        `;
    }
  } else {
    serviceDetailsElement.innerHTML = `
      <p>No service ID provided.</p>
    `;
  }
});
