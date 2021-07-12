<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('task-list', 'App\Http\Controllers\TaskController@getApiTasks');
Route::get('task-get/{id}', 'App\Http\Controllers\TaskController@getTask');
Route::post('task-add', 'App\Http\Controllers\TaskController@add');
Route::put('task-update/{id}', 'App\Http\Controllers\TaskController@update');