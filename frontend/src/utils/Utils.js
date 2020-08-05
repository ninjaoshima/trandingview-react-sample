export const handleErrorResponseObject = (error) => {
  if (error.response && error.response.data && error.response.data.message === 'Redirect') {
    localStorage.removeItem('access_token');
    window.location = "/login";
  } else if (error.response && error.response.data.error) {
    throw new Error(error.response.data.error);
  } else if (error.response) {
    throw new Error(error.response.statusText);
  } else {
    if(error && error.message)
      throw new Error(error.message);
  }
};

export const newErrorResponseObject = error => {
  if(error.message) throw new Error(error.message)
  throw new Error("Interval Server Error");
}

export const handleTryErrorResonseObject = (error) => {
  if(error.response && error.response.data) {
    throw new Error(error.response.data);
  }else{
    throw new Error(error.response.statusText);
  }
}