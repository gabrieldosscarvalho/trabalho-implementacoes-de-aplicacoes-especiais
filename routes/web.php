<?php

use App\Http\Controllers\FormsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    return redirect('/login');
    // return Inertia::render('Welcome', [
    //     'canLogin' => Route::has('login'),
    //     'canRegister' => Route::has('register'),
    //     'laravelVersion' => Application::VERSION,
    //     'phpVersion' => PHP_VERSION,
    // ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::prefix('form')->group(function () {
    Route::get('/form-entry', [FormsController::class, 'index'])->middleware(['auth', 'verified'])->name('form-entry');
    Route::get('/form-campista', [FormsController::class, 'index'])->middleware(['auth', 'verified'])->name('form-campista');
});


// Route::get('/form/{forms:type?}', [FormsController::class, 'show'])
//     ->middleware(['auth', 'verified']);
// Route::prefix('form')->group(function () {
//     Route::get('/{forms:type}', [FormsController::class, 'show'])
//         ->middleware(['auth', 'verified']);
// });


Route::post('/form', [FormsController::class, 'store'])
    ->middleware(['auth', 'verified'])->name('form');

require __DIR__ . '/auth.php';
