import axios from "axios";

const getUsers = (async (index) => {
    const { data: userInfo } = await axios("https://jsonplaceholder.typicode.com/users/" + index)
    console.log(userInfo);
});


const getPost = (async (index) => {
    const { data: postInfo } = await axios("https://jsonplaceholder.typicode.com/posts/" + index)
    console.log(postInfo);
});

const getData = {...getUsers(1), ...getPost(1)};
console.log(getData);
