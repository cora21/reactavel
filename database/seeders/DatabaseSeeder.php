<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Obrayan',
            'email' => 'obrayanacosta2021@gmail.com',
            'password' => Hash::make('password'), // Siempre encripta la contraseña
            'email_verified_at' => now(), // Opcional, si quieres que aparezca como verificado
        ]);
        // User::factory(10)->create();
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);
    }
}
