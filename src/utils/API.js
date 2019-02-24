import axios from 'axios';

export default {
    //API calls for post CRUD methods
    getAllPost: () => axios.get('/api/posts'),
    createPost: (postData) => axios.post('/api/posts/', postData),
    deletePost: (id) => axios.delete('/api/posts' + id),
    updatePost: (id, updateObject) => axios.put('/api/post/' + id, updateObject),

    //API calls for comment CRUD methods
    getComment: (id) => axios.get('/api/comments/' + id),
    createComment: (commentData) => axios.post('/api/comments/', commentData),
    deleteComment: (id) => axios.delete('/api/comments/' + id)
}