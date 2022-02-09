<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\News;
use Illuminate\Support\Facades\Validator;

class NewsController extends Controller
{
    public function index(){
        $news = News::all();        
        return response()->json([
            'status' => 200,
            'news'   => $news,
        ]);
    }

    public function store(Request $request){
        $news = new News;
        $news->title = $request->input('title');
        $news->description = $request->input('description');
        if($request->hasFile('image')){
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension();
            $fileName = time().'.'.$extension;
            $file->move('uploads/news/',$fileName);
            $news->image = 'uploads/news/'.$fileName;
        }
        $news->save();
        
        return response()->json([
            'status' => 200,
            'message'=> 'News Added Successfully',
        ]);
    }

    public function edit($id){
        $news = News::find($id);        
        return response()->json([
            'status' => 200,
            'news'   => $news,
        ]);
    }

    public function update(Request $request, $id){
        $news = News::find($id);
        $news->title = $request->input('title');
        $news->description = $request->input('description');
        $news->update();
        
        return response()->json([
            'status' => 200,
            'message'=> 'News Updated Successfully',
        ]);
    }

    public function destroy($id){
        $news = News::find($id);
        $news->delete();
        
        return response()->json([
            'status' => 200,
            'message'=> 'News Deleted Successfully',
        ]);
    }
}
