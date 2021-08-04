import $ from 'jquery';
import axios from 'axios';

const postRequest = (formData) => {
  return axios('/thread', {
    method: 'POST',
    data: formData,
  });
  return axios.post('/thread', formData);
}

const request = {

  getPostsRequest: () => {
    return axios('/thread');
  },

  putVoteRequest: (postId, voteCount) => {
    return axios.put(`/thread/${postId}/`, { data: voteCount });
  },

  postQuestionRequest: (title, message, needStamp, needDetail, community) => {
    const form = {
      title,
      message,
      needStamp,
      needDetail,
      community
    };
    return postRequest(form);
  },

};

export default request;