import axios from 'axios';
/**
 * Makes a request to the contentful CDN and returns the content space specified
 * @getContent
 * @param {string} contentType - The ID of the content space which can be found on the Contenful GUI for each space
 * @returns {object}  - Returns a JSON object containing all the entries and includes within the specified content type
 */
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
