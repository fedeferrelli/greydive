const apiCall = {
  fetch: async () => {
    const request = await fetch("https://greydive-challenge-azure.vercel.app/db.json");
    const response = await request.json();
    return response;
  },
};

export default apiCall;
