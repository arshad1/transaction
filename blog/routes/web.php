<?php

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

Route::get('/', function () {
    //dd(env('MIX_PASSPORT_CLIENT_ID'));
    return view('app');
});

Route::get('/uploadfile','UploadFileController@index');
Route::post('/uploadfile','UploadFileController@showUploadFile');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


Route::get('/send', function(){

    event(new \App\Events\sendOrderEvent('hello'));
});