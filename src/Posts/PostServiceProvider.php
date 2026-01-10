<?php

namespace Src\Posts;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;

class PostServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        // Đăng ký đường dẫn chứa các file migration của module Posts
        $this->loadMigrationsFrom(__DIR__ . '/migrations');
        // 2. Đăng ký Routes từ file routesPost.php
        // $this->loadRoutesFrom(__DIR__ . '/routesPost.php');
        // Route::prefix('api')
        //     ->middleware('api')
        //     ->group(__DIR__ . '/routesPost.php');

        Route::prefix('api')
            ->middleware(['api', 'auth:sanctum'])
            ->group(__DIR__ . '/routesPost.php');
    }
}
