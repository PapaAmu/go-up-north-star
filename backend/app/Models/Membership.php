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
        'gender',
        'profession',
        'occupation',
        'shares',
        'monthly_savings',
        'qualification',
        'physical_address',
        'postal_address',
        'inviter_name',
        'beneficiary_full_name',
        'beneficiary_id_number',
        'beneficiary_relationship',
        'beneficiary_phone',
        'beneficiary_email',
        'id_copy_path',
        'proof_of_address_path',
        'terms_accepted',
        'popi_accepted',
        'status',
    ];
}
