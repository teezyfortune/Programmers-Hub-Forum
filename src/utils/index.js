const Response = (response, resObj) => {
  try {
    const { status, message, data } = resObj;
    if (status >= 300) {
      return response.status(status).json({ status, err: message });
    }
    return response.status(status).json({ status, message, data });
  } catch (eror) {}
};

export default Response;
