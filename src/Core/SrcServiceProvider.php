<?php
namespace Src\Core;
// dang ky Src\Core\SrcServiceProvider::class,
// use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;

class SrcServiceProvider extends ServiceProvider
{
    /**
     * Danh sách các Provider của các module con
     */

    protected $moduleProviders = [
        \Src\Posts\PostServiceProvider::class,
        // Thêm các module provider khác tại đây
    ];

    /**
     * Register services.
     */
    public function register(): void
    {
        //
        foreach ($this->moduleProviders as $provider) {
            $this->app->register($provider);
        }
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        // // Đăng ký Route tập trung cho tất cả các Module bên trong Src
        // Route::prefix('api')
            // ->middleware('api') // Nên có middleware api mặc định
            // ->middleware('auth:sanctum')
        // ->group(__DIR__ . '/../routesSrc.php');
    }
}