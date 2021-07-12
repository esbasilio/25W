import React from 'react'

const Paginator = ({postsPerPage, totalPosts, paginate}) => {

  const pageNumbers = [];


  for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        {pageNumbers.map(number => (
            <li class="page-item" key={number}>
              <a onClick={()=> paginate(number)} href="#" class="page-link">{number}</a>
            </li>
          )
        )}
      </ul>
    </nav>
  )


}

export default Paginator