import axios from "axios";

const searchImages = async (input) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID FPw0cklv9qsAt2IlucJ81uLwHGsQb1J5pLf9tOPMOL8",
    },
    params: {
      query: input,
    },
  });
  console.log(response);

  return response.data.results;
};

export default searchImages;
