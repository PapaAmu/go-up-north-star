<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Membership;
use Illuminate\Support\Facades\Storage;

class MembershipController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name'  => 'required|string|max:255',
            'email'      => 'required|email|max:255',
            'phone'      => 'required|string|max:20',
            'id_type'    => 'required|in:ID,Passport',
            'id_number'  => 'required|string|max:20',
            'shares'     => 'required|integer|min:10',
            'accepted_terms' => 'required|boolean',
            'read_terms'     => 'required|boolean',
            'proof_of_payment' => 'nullable|file|mimes:pdf,jpg,jpeg,png',
        ]);

        $path = null;
        if ($request->hasFile('proof_of_payment')) {
            $path = $request->file('proof_of_payment')->store('proofs', 'public');
        }

        $membership = Membership::create([
            ...$validated,
            'proof_of_payment_path' => $path,
            'status' => 'pending',
        ]);

        return response()->json(['message' => 'Membership submitted', 'membership' => $membership], 201);
    }
}

