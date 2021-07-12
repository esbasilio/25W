import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Posts from '../Posts';
import Paginator from '../Paginator';


const List = () => {

  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  const [postsPerPage, setPostPerPage] = useState(3);



  useEffect(()=>{

    const fetchPosts = async () => {

      setLoading(true);
      const res = await axios.get('http://127.0.0.1:8000/api/task-list');
      if(res.data.succes){
        setPosts(res.data.data);
      }

      setLoading(false);
    }

    fetchPosts();

  }, []);

  const indexOfLastPost = currentPage * postsPerPage;

  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);


  const paginate = (pageNumber) =>  setCurrentPage(pageNumber);

  return(
    <div className='container'>
      <Posts posts={currentPosts} loading={loading} />
      <Paginator postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
    </div>

  )

}

export default List