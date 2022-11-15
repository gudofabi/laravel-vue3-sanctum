<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\JobPostController;
use App\Http\Controllers\Blog\BlogController;

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
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::delete('/logout', [AuthController::class, 'logout']);
Route::get('/me', [AuthController::class, 'me'])->middleware('auth:sanctum');

Route::apiResource('job-post', JobPostController::class)->middleware('auth:sanctum');
Route::apiResource('blogs', BlogController::class);