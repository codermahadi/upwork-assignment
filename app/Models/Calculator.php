<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Calculator extends Model
{
    use HasFactory;

    protected $table = 'calculators';

    //primary key
    public $primaryKey = 'id';

    //timestamps
    public $timestamps = true;

    protected $fillable = [
        'sum_data'
    ];
}
