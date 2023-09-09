import axios from "axios";

const searchImages = async () => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID FPw0cklv9qsAt2IlucJ81uLwHGsQb1J5pLf9tOPMOL8",
    },
    params: {
      query: "cars",
    },
  });
  console.log(response);

  return response;
};

export default searchImages;
