<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;

class TaskController extends Controller
{

	public function getApiTasks(){

		$response = ['data' => null, 'succes' => false, 404];
		$tasks = Task::get();
		if(!empty($tasks)){
			$response = ['data' => $tasks, 'succes' => true, 200];
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

	    	$response = ['succes' => true, 'message' => 'Guardado Exitosamente !', 200];

    	}catch(\Exception $e){

	    	$response = ['succes' => false, 'message' => $e->getMessage(), 400];
    	}

	    return $response;
    }

    public function getTask($id)
    {
    	try{

			$response = ['succes' => false, 'data' => null, 404];
    		$data = Task::find($id);

    		if(!empty($data)){

    			$response = ['succes' => true, 'data' => $data, 'message' => 'Datos cargados', 200];
    		}

    	}catch(\Exception $e){

	    	$response = ['succes' => false, 'message' => $e->getMessage(), 500];
    	}

	    return $response;
    }


    public function update(Request $request, $id)
    {

    	try{
    		$response = ['succes' => false, 'message' => 'Registro no encontrado', 400];
    		$task = Task::find($id);
    		if(!empty($task)){
    			$task->code = $request->code;
    			$task->description = $request->description;
    			$task->save();
		    	$response = ['succes' => true, 'message' => 'Proceso Exitoso !', 22];
    		}

    	}catch(\Exception $e){

	    	$response = ['succes' => false, 'message' => $e->getMessage(), 500];
    	}

	    return $response;
    }

}
