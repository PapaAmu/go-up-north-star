<?php

namespace App\Http\Controllers;

use App\Models\AccountApplication;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;


class AccountApplicationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
{
    $validated = $request->validate([
        'first_name' => 'required|string',
        'last_name' => 'required|string',
        'phone' => 'required|string',
        'email' => 'required|email',
        'id_type' => 'required|in:id,passport',
        'id_number' => 'required|string',
        'id_copy' => 'required|file|mimes:pdf,jpg,jpeg,png',
        'poa' => 'nullable|file|mimes:pdf,jpg,jpeg,png',
    ]);

    $idPath = $request->file('id_copy')->store('uploads/id_copies', 'public');
    $poaPath = $request->hasFile('poa') 
        ? $request->file('poa')->store('uploads/poa', 'public')
        : null;

    $application = AccountApplication::create([
        ...$validated,
        'id_copy_path' => $idPath,
        'poa_path' => $poaPath,
        'status' => 'pending',
    ]);

    return response()->json([
        'message' => 'Application submitted successfully.',
        'data' => $application
    ], 201);
}

    /**
     * Display the specified resource.
     */
    public function show(AccountApplication $accountApplication)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(AccountApplication $accountApplication)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, AccountApplication $accountApplication)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(AccountApplication $accountApplication)
    {
        //
    }
}
