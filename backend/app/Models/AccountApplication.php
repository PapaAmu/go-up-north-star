<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AccountApplication extends Model
{
    protected $fillable = [
        'first_name',
        'last_name',
        'phone',
        'email',
        'id_type',
        'id_number',
        'id_copy_path',
        'poa_path',
        'status',
    ];
}
