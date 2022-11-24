const apiCall = {
  fetch: async () => {
    const request = await fetch("/public/db.json");
    const response = await request.json();
    return response;
  },
};

export default apiCall;
