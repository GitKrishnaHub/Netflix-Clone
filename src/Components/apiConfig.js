const apiConfig ={
    baseURL: "https://api.themoviedb.org/3",
    apiKey: '4c57079227a1953ba5a6055f799a7007',
    originalImage:(imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) =>`https://image.tmdb.org/t/p/w500/${imgPath}`
  }
  
  export default apiConfig;