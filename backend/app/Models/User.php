<?php

namespace App\Models;

use Filament\Models\Contracts\FilamentUser;
use Filament\Panel;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable implements FilamentUser
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
        'email_verified_at',  // <-- added to allow mass assignment
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [  // <-- property, NOT a method
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function canAccessPanel(Panel $panel): bool
    {
        if ($panel->getId() === 'admin') {
            if (app()->environment('local')) {
                return true;  // allow access in local environment
            }

            return (
                str_ends_with($this->email, '@realnet-web.co.za') ||
                str_ends_with($this->email, '@enkwali.co.za') ||
                str_ends_with($this->email, '@go-up-northstar.co.za')
            ) && $this->hasVerifiedEmail();
        }

        return true;
    }
}
