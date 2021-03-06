<?php

use Illuminate\Http\Request;

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
//    $x= new App\Http\Controllers\Auth\RegisterController();
//    $x->register($request);
    return $request->user();
});


    Route::post('/register', 'Auth\RegisterController@register')->name('register');
