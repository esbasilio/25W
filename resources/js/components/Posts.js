import React from 'react';
import {Link} from "react-router-dom";

const Posts = ({posts, loading}) => {

  if (loading){
    return <h2>Loading ...</h2>;
  }

  return(<table class="table">
        <thead class="thead-ligth">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">CODE</th>
            <th scope="col">DESCRIPTION</th>
            <th scope="col">DATE</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
              <tr>
                <th>{post.id}</th>
                <td>{post.code}</td>
                <td>{post.description}</td>
                <td>{post.date_of_task}</td>
                <td>
                  <Link to={"edit/" + post.id} class="btn btn-light"> Edit </Link>
                </td>
              </tr>
            ))}
        </tbody>
  </table>)
}

export default Posts;
