<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ComprobanteServController;
use App\Http\Controllers\LibroVentaController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Auth/Login');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::get('/comprobante', [ComprobanteServController::class, 'index'])->name('comprobante');

Route::get('/libroVentas', [LibroVentaController::class, 'index'])->name('libroVentas');


require __DIR__.'/auth.php';
