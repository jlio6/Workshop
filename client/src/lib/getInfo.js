import $ from 'jquery';
import axios from 'axios';

const request = {

  getProductRequest: (productID) => {
    return axios('/thread');
  },

  postRequest: (formData) => {
    console.log('ay foo');
    return axios.post('/thread', formData);
  },

  getProductInfo: (productID) => getRequest(`products/${productID}`, 'GET'),

  putRequest: (questionID, helpfulOrReport) => getRequest(`qa/questions/${questionID}/${helpfulOrReport}/`, 'PUT'),

  postQuestionRequest: (formInfo) => {
    const form = {
      title: formInfo[0].value,
      message: formInfo[1].value,
      needStamp: formInfo[2].value,
      needDetail: formInfo[3].value,
    };
    return postRequest(form);
  },

};

export default request;