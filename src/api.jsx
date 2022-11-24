const apiCall = {
  fetch: async (city) => {
    const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
    const request = await fetch("/public/data/db.json");
    const response = await request.json();
    return response;
  },
};

export default apiCall;
