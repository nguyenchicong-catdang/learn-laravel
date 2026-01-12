<?php

namespace Src\Posts;

use Src\Posts\Post;
use Src\Posts\Services\PostService;
use App\Http\Controllers\Controller;
use Illuminate\Http\Resources\Json\JsonResource;
use Src\Posts\Resources\PostResource;
use Src\Posts\Requests\StorePostRequest;
use Src\Posts\Requests\UpdatePostRequest;
use Symfony\Component\HttpFoundation\JsonResponse;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(PostService $service): JsonResource
    {
        $posts = $service->index();
        return PostResource::collection($posts);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePostRequest $request, PostService $postService)
    {
        $postService->store($request->validated());
        return response()->json('', 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(int $id, PostService $service): JsonResource
    {
        $post = $service->show($id);
        return PostResource::make($post);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePostRequest $request, Post $post, PostService $service): JsonResponse
    {
        $service->update($request->validated(), $post);
        return response()->json('', 200);
    }
        //

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        //
    }
}
