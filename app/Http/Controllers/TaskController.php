<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;

class TaskController extends Controller
{

	public function getApiTasks(){

		$response = ['data' => null, 'succes' => false];
		$tasks = Task::get();
		if(!empty($tasks)){
			$response = ['data' => $tasks, 'succes' => true];
		}

		return json_encode($response);
	}

    public function getList()
    {

		return view('task-list');
    }


    public function edit(Request $request)
    {
		return view('task-list');
    }

    public function new(Request $request)
    {
    	return view('task-list');
    }


    public function add(Request $request)
    {

    	try{

    		$date_of_task = date('Y-m-d', strtotime($request->date_of_task));

	    	Task::create([
	    		'code'		  => $request->code,
	    		'description' => $request->description,
	    		'date_of_task'  => $date_of_task
	    	]);

	    	$response = ['succes' => true, 'message' => 'Guardado Exitosamente !'];

    	}catch(\Exception $e){

	    	$response = ['succes' => false, 'message' => $e->getMessage()];
    	}

	    return $response;
    }

    public function getTask($id)
    {
    	try{

			$response = ['succes' => false, 'data' => null];
    		$data = Task::find($id);

    		if(!empty($data)){

    			$response = ['succes' => true, 'data' => $data, 'message' => 'Datos cargados'];
    		}

    	}catch(\Exception $e){

	    	$response = ['succes' => false, 'message' => $e->getMessage()];
    	}

	    return $response;
    }


    public function update(Request $request, $id)
    {

    	try{
    		$response = ['succes' => false, 'message' => 'Registro no encontrado'];
    		$task = Task::find($id);
    		if(!empty($task)){
    			$task->code = $request->code;
    			$task->description = $request->description;
    			$task->save();
		    	$response = ['succes' => true, 'message' => 'Proceso Exitoso !'];
    		}

    	}catch(\Exception $e){

	    	$response = ['succes' => false, 'message' => $e->getMessage()];
    	}

	    return $response;
    }

}
