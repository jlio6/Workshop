import $ from 'jquery';
import axios from 'axios';

const request = {

  getProductRequest: (productID) => {
    return axios('/thread');
  },

  getProductInfo: (productID) => getRequest(`products/${productID}`, 'GET'),

  putRequest: (questionID, helpfulOrReport) => getRequest(`qa/questions/${questionID}/${helpfulOrReport}/`, 'PUT'),

  postQuestionRequest: (productID, formInfo) => {
    const form = {
      body: formInfo[0].value,
      name: formInfo[1].value,
      email: formInfo[2].value,
      product_id: productID,
    };
    return postRequest('qa/questions/', form);
  },

  postAnswerRequest: (questionID, formInfo) => {
    const form = {
      body: formInfo[0].value,
      name: formInfo[1].value,
      email: formInfo[2].value,
    };
    return postRequest(`qa/questions/${questionID}/answers`, form);
  },

  postInteractionRequest: (elementClicked, widgetClicked, timeStamp) => {
    const form = {
      element: elementClicked,
      widget: widgetClicked,
      time: timeStamp,
    };
    return postRequest('interactions', form);
  },

};

export default request;