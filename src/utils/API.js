import axios from 'axios';

export default {
    //API calls for post CRUD methods
    getAllPost: () => axios.get(process.env.REACT_APP_CONNECTION_STRING + '/api/events'),
    createPost: (postData) => axios.post(process.env.REACT_APP_CONNECTION_STRING + '/api/events/', postData),
    deletePost: (id) => axios.delete(process.env.REACT_APP_CONNECTION_STRING + '/api/events' + id),
    updatePost: (id, updateObject) => axios.put(process.env.REACT_APP_CONNECTION_STRING + '/api/events/' + id, updateObject),

    //API calls for comment CRUD methods
    getComment: (id) => axios.get(process.env.REACT_APP_CONNECTION_STRING + '/api/comments/' + id),
    createComment: (commentData) => axios.post(process.env.REACT_APP_CONNECTION_STRING + '/api/comments/', commentData),
    deleteComment: (id) => axios.delete(process.env.REACT_APP_CONNECTION_STRING + '/api/comments/' + id)
}