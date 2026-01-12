<?php

namespace Src\Posts\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray($data): array
    {
        return parent::toArray($data);
    }
}
