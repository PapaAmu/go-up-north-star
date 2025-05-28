<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AccountApplicationController;


Route::post('/applications', [AccountApplicationController::class, 'store']);