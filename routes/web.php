<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
/*
Route::get('/', function () {
    return view('welcome');
});

Route::get('/home', function () {
    return view('home');
});

Route::get('/task/list', function () {
    return view('task-list');
});*/

Route::get('/task/list', 'App\Http\Controllers\TaskController@getList');
Route::get('/task/edit/{num}', 'App\Http\Controllers\TaskController@edit');
Route::get('/task/new', 'App\Http\Controllers\TaskController@new');
