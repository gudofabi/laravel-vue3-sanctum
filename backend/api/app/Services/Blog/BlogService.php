<?php


namespace App\Services\Blog;
use App\Models\Blog;

class BlogService 
{

    public static function getBlogs($count)
    {
        return Blog::paginate($count);
    }

    public static function createBlog(array $data)
    {
        $blog = Blog::create($data);
        return $blog;
    }

    public static function updateBlog(Blog $blog, array $data)
    {
        $blog->update($blog);

        return $blog;
    }
}