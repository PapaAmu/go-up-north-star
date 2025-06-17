<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AccountApplicationController;
use App\Http\Controllers\MembershipController;

Route::post('/applications', [AccountApplicationController::class, 'store']);
Route::post('/memberships', [MembershipController::class, 'store']);
