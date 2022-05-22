const getMessage = (error) => {
  if (error.response) {
    console.log(error.response.data);
    console.log(error.response.status);
    return error.response.data;
  } else if (error.request) {
    console.log(error.request);
    return error.request;
  }
  // Something happened in setting up the request that triggered an Error
  console.log('Error', error.message);
  return error.message;
};

export default getMessage;
