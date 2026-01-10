<?php

use Illuminate\Support\Facades\Route;


Route::resource('posts', \Src\Posts\PostController::class);