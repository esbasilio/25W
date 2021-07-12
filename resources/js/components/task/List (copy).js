import React, {useEffect, useState } from 'react';
import taskServices from "../../services/Task";
import {Link} from "react-router-dom";

function List(){

  const [listTask, setListTask] = useState([]);

  useEffect(()=>{

    async function fetchDataTask(){
      const res = await taskServices.list();
      setListTask(res.data);
      //setListTask(res.data.data);
    }

    fetchDataTask();
  }, [])


  return (
    <section>
      <table class="table">
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
             {
                listTask.map((item)=>{
                  return (
                    <tr>
                      <th>{item.id}</th>
                      <td>{item.code}</td>
                      <td>{item.description}</td>
                      <td>{item.date_of_task}</td>
                      <td>
                        <Link to={"edit/" + item.id} class="btn btn-light"> Edit </Link>
                        <Link to="#" class="btn btn-danger"> Delete </Link>
                      </td>
                    </tr>
                  )
                })
             }

        </tbody>
      </table>
    </section>
  )
}

export default List;
