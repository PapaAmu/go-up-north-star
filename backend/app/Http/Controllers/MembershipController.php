<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Membership;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpFoundation\Response;

class MembershipController extends Controller
{
    public function store(Request $request)
    {
        try {
            // Validate request
            $validated = $request->validate([
                'first_name' => 'required|string|max:255',
                'last_name'  => 'required|string|max:255',
                'email'      => 'required|email|max:255|unique:memberships,email',
                'phone'      => 'required|string|max:20',
                'id_type'    => 'required|in:ID,Passport',
                'id_number'  => 'required|string|max:20',
                'gender'     => 'required|string',
                'profession' => 'required|string',
                'occupation' => 'required|string',
                'shares'     => 'required|integer|min:1',
                'monthly_savings' => 'required|integer|min:1',
                'qualification' => 'required|string',
                'physical_address' => 'required|string',
                'postal_address' => 'required|string',
                'inviter_name' => 'required|string',
                'beneficiary_full_name' => 'required|string',
                'beneficiary_id_number' => 'required|string',
                'beneficiary_relationship' => 'required|string',
                'beneficiary_phone' => 'required|string',
                'beneficiary_email' => 'required|email',
                'terms_accepted' => 'required|boolean|in:1',
                'popi_accepted' => 'required|boolean|in:1',

                // Improved file size (5MB = 5120KB)
                'id_copy' => 'required|file|mimes:pdf,jpg,jpeg,png|max:5120',
                'proof_of_address' => 'required|file|mimes:pdf,jpg,jpeg,png|max:5120',
            ]);

            // Store uploaded files with hashed names
            $idCopyPath = $request->file('id_copy')->store('id_copies', 'public');
            $proofOfAddressPath = $request->file('proof_of_address')->store('proofs_of_address', 'public');

            // Create record
            $membership = Membership::create([
                ...$validated,
                'id_copy_path' => $idCopyPath,
                'proof_of_address_path' => $proofOfAddressPath,
                'status' => 'pending',
            ]);

            return response()->json([
                'message' => 'Membership submitted successfully.',
                'membership' => $membership,
            ], Response::HTTP_CREATED);

        } catch (ValidationException $e) {
            return response()->json([
                'error' => 'Validation failed',
                'details' => $e->errors(),
            ], Response::HTTP_UNPROCESSABLE_ENTITY);

        } catch (\Throwable $e) {
            Log::error('Membership submission failed', [
                'message' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
            ]);

            return response()->json([
                'error' => 'Server error',
                'message' => 'Something went wrong while submitting the application.',
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
