<?php

namespace App\Http\Controllers\Blog;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Requests\Blog\CreateRequest; // data validation
use App\Http\Requests\Blog\UpdateRequest;

use App\Services\Blog\BlogService; // hiding blog logic

use App\Http\Resources\BlogResources; // data formating

class BlogController extends Controller
{
    public function index() 
    {
        try {
            
            $blogs = BlogService::getBlogs(10);
            return BlogResources::collection($blogs);

        } catch (Exception $e) {
            return 'Message: ' . $e->getMessage();
        }

    }

    public function store(CreateRequest $request) 
    {
        try {
            
            $blogs = BlogService::createBlog($request->all());

            return response()->json([
                'message' => 'New article created!',
            ]);

        } catch (Exception $e) {
            return 'Message: ' . $e->getMessage();
        }
    }

    public function update(UpdateRequest $request) {
        // logic here...
    }

    public function show($slug) {
        // logic here...
    }

    public function destroy($id) {
        // logic here...
    }
}
