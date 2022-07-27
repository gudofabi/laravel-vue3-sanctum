<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\JobPost;

class JobPostController extends Controller
{
    public function index()
    {
        return response()->json([ 
            'job_post' =>  JobPost::paginate(10) 
        ], 200);
    }
}
