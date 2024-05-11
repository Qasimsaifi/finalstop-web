// utils.js

async function fetchServices(url , token) {
    try {
        
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          next: { revalidate: 3600 }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        return jsonData.data;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    
  }
  
  export { fetchServices };
  