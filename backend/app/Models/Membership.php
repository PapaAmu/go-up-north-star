<?php


namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Membership extends Model
{
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'phone',
        'id_type',
        'id_number',
        'shares',
        'proof_of_payment_path',
        'accepted_terms',
        'read_terms',
        'status',
    ];
}

