<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection; 
use Illuminate\Http\Resources\Json\JsonResource; // use JsonResource

class BlogResources extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'title'           => $this->title,
            'author'          => $this->author,
            'content'         => $this->content,
            'min_read'        => $this->minRead($this->content),
        ];
    }

    // calculate reading duration
    public static function minRead($post_text) {
        $word = str_word_count(strip_tags($post_text));
  		$minutes = floor($word / 200);
		$seconds = floor($word % 200 / (200 / 60));
		if($seconds > 30){
			$minutes++;
		} 

        return $minutes;
    }
}
