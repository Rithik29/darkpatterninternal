document.addEventListener('DOMContentLoaded', function() {
    var sendUrlButton = document.getElementById('sendUrlButton');
  
    sendUrlButton.addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var currentUrl = tabs[0].url;
        console.log(currentUrl);
        // sendUrlToAPI(currentUrl);
      });
    });
  
    function sendUrlToAPI(url) {
      // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
      var apiEndpoint = 'YOUR_API_ENDPOINT';
  
      fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: url }),
      })
      .then(response => response.json())
      .then(data => {
        console.log('API Response:', data);
        // You can handle the API response here
      })
      .catch(error => {
        console.error('Error sending URL to API:', error);
      });
    }
  });
  