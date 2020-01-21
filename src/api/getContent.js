import axios from 'axios';

export const getContent = async contentType => {
  try {
    const response = await axios.get(
      `https://cdn.contentful.com/spaces/w2ovm14isy0c/environments/master/entries?access_token=ArmvilcPp4ahbl8Low-CctDGwrQ9tZxWu_KNXrNW8iw&content_type=${contentType}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
