import React, { useEffect, useState } from 'react';
import taskServices from "../../services/Task";

function Form(){

  const [code, setCode] = useState(null);

  const [description, setDescription] = useState(null);

  const [date_of_task, setDateOfTask] = useState(null);

  const [listTask, setListTask] = useState([]);

  useEffect(()=>{

    async function fetchDataTask(){
      const res = await taskServices.list();
      setListTask(res.data);
    }

    fetchDataTask();
  }, [])


  const saveTask = async () => {

    const data = {
      code, description, date_of_task
    }

    const res = await taskServices.save(data);
    alert(res.message);
    if (res.succes) {
        setCode(null);
        setDescription(null);
    }

  }

  return(
    <div>
      <h1>Nueva tarea</h1>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="code">Code</label>
          <input type="text" class="form-control" placeholder="Code" 
          onChange={(event)=>setCode(event.target.value)} value={code}/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="description">Description</label>
          <input type="text" class="form-control" placeholder="Description" 
          onChange={(event)=>setDescription(event.target.value)} value={description}/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="date_of_task">Fecha de tarea</label>
          <input type="date" class="form-control" placeholder="Fecha" 
          onChange={(event)=>setDateOfTask(event.target.value)}/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <button class="btn btn-primary btn-block" type="submit"
          onClick={()=>saveTask()}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default Form;
