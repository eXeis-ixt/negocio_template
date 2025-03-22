<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('welcome');
// })->name('home');

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/team/register', [HomeController::class,'team'])->name('team.register');
Route::post('/team/register', [HomeController::class,'store'])->name('team.store');
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
