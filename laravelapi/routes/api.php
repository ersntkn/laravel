<?php

use App\Http\Controllers\API\NewsController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('news', [NewsController::class, 'index']); 
Route::post('/add-news', [NewsController::class, 'store']); 
Route::post('/edit-news/{id}', [NewsController::class, 'edit']);
Route::post('update-news/{id}', [NewsController::class, 'update']);
Route::post('delete-news/{id}', [NewsController::class, 'destroy']);


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
