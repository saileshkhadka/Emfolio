self.addEventListener('fetch', (event) => {
    const responseHeaders = new Headers({
      'X-Content-Type-Options': 'nosniff',
      // Add other headers if needed
    });
  
    event.respondWith(
      fetch(event.request, { headers: responseHeaders })
        .then((response) => {
          return response;
        })
        .catch((error) => {
          console.error('Error fetching:', error);
        })
    );
  });