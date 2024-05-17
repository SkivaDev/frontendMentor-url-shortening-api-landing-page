import axios from "axios";

const cleanuriAPI = async (url) => {
  // const encodedURL = encodeURIComponent(url);

  // const response = await axios.post(
  //   "https://url-shortener-service.p.rapidapi.com/shorten",
  //   {
  //     url: encodedURL,
  //   },
  //   {
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //       'X-RapidAPI-Key': 'ee3a38b81amsh8cbda5dcc44f9dep1137a5jsneb3372e9fb79',
  //     },
  //   }
  // );

  // // const response = await fetch(`https://cleanuri.com/api/v1/shorten`, {
  // //     method: 'POST',
  // //     headers: {
  // //         'Content-Type': 'application/x-www-form-urlencoded',
  // //     },
  // //     body: `url=${url}`
  // // });

  // const data = await response.json();
  // return data;

  const encodedParams = new URLSearchParams();
  encodedParams.set("url", url);

  const options = {
    method: "POST",
    url: "https://url-shortener-service.p.rapidapi.com/shorten",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "ee3a38b81amsh8cbda5dcc44f9dep1137a5jsneb3372e9fb79",
      "X-RapidAPI-Host": "url-shortener-service.p.rapidapi.com",
    },
    data: encodedParams,
  };

  try {
    const response = await axios.request(options);
    console.log(response);
    return response;

  } catch (error) {
    console.error(error);
    return error;
  }
};

export default cleanuriAPI;
