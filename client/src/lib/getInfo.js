import $ from 'jquery';
import axios from 'axios';

const postRequest = (formData) => {
  console.log('ay foo');
  return axios('/thread', {
    method: 'POST',
    data: formData,
  });
  return axios.post('/thread', formData);
}

const request = {

  getProductRequest: (productID) => {
    return axios('/thread');
  },

  getProductInfo: (productID) => getRequest(`products/${productID}`, 'GET'),

  putRequest: (questionID, helpfulOrReport) => getRequest(`qa/questions/${questionID}/${helpfulOrReport}/`, 'PUT'),

  postQuestionRequest: (title, message, needStamp, needDetail) => {
    const form = {
      title,
      message,
      needStamp,
      needDetail,
    };
    return postRequest(form);
  },

};

export default request;