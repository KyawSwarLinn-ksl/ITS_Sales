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

// 共通ルート
Route::get('/', function () {
    return view('welcome');
});

Route::get('/home', function () {
    return view('welcome');
});

// 技術者情報ルート
Route::get('/engineerList', function () {
    return view('welcome');
});

Route::get('/insertEngineer', function () {
    return view('welcome');
});

Route::get('/searchEngineer', function () {
    return view('welcome');
});

Route::get('/engineerSearchResult', function () {
    return view('welcome');
});

// 受・発注情ルート
Route::get('/orderList', function () {
    return view('welcome');
});

Route::get('/insertOrder', function () {
    return view('welcome');
});

Route::get('/searchOrder', function () {
    return view('welcome');
});

Route::get('/orderSearchResult', function () {
    return view('welcome');
});

// offshoreルート
Route::get('/sales', function () {
    return view('welcome');
});

Route::get('/insertProgressStatus', function () {
    return view('welcome');
});