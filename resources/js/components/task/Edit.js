import React, { useEffect, useState } from 'react';
import taskServices from "../../services/Task";



function Edit(props){

  const [id, setId] = useState(null);

  const [code, setCode] = useState(null);

  const [description, setDescription] = useState(null);

  const [date_of_task, setDateOfTask] = useState(null);

  const [listTask, setListTask] = useState([]);

  useEffect(()=>{

    async function fetchDataTask(){
      let task_id = props.match.params.id;
      const res = await taskServices.get(task_id);

      if(res.succes){
        const data = res.data;
        setId(data.id);
        setCode(data.code);
        setDescription(data.description);
        setDateOfTask(data.date_of_task);
      }else{
        alert(res.message);
      }

    }

    fetchDataTask();

  }, [])

  const updateTask = async () => {

    const data = {
      id, code, description, date_of_task
    }

    const res = await taskServices.update(data);
    alert(res.message);

  }

  return(
    <div>
      <h1>Editar tarea</h1>
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
          <input type="text" class="form-control" placeholder="Fecha" 
          onChange={(event)=>setDateOfTask(event.target.value)} value={date_of_task}/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <button class="btn btn-primary btn-block" type="submit"
          onClick={()=>updateTask()}>Save</button>
        </div>
      </div>
    </div>
  )

}

export default Edit;
