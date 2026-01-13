<?php

namespace App\Models;

// use Illuminate\Database\Eloquent\Model;
use Corcel\Model\Post as CorcelPost;

class WPPost extends CorcelPost
{
    protected $connection = 'wordpress';

    public function customMethod()
    {
        //
    }
}
