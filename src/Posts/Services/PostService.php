<?php
namespace Src\Posts\Services;

use Illuminate\Database\Eloquent\Collection;
use Src\Posts\Post;

class PostService
{
    // Post service logic here
    public function store(array $data): Post
    {
        // Logic to store a post
        return Post::create($data);
    }

    public function index(): Collection
    {
        $columns = ['id', 'title', 'content'];
        return Post::query()->get($columns);
    }

    public function show(int $id): Post
    {
        // Logic to show a post
        $columns = ['id', 'title', 'content'];
        return Post::findOrFail($id, $columns);
    }

    public function update(array $data, Post $post): Post
    {
        // Logic to update a post
        $post->update($data);
        return $post;
    }
}