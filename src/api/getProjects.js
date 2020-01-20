import axios from 'axios';

export const getProjects = async () => {
  try {
    const response = await axios.get(
      'https://cdn.contentful.com/spaces/w2ovm14isy0c/environments/master/entries?access_token=ArmvilcPp4ahbl8Low-CctDGwrQ9tZxWu_KNXrNW8iw&content_type=project'
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
