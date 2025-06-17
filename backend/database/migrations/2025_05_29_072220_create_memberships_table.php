<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('memberships', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('email');
            $table->string('phone');
            $table->enum('id_type', ['ID', 'Passport']);
            $table->string('id_number');
            $table->string('gender');
            $table->string('profession');
            $table->string('occupation');
            $table->integer('shares');
            $table->integer('monthly_savings');
            $table->string('qualification');
            $table->string('physical_address');
            $table->string('postal_address');
            $table->string('inviter_name');
            $table->string('beneficiary_full_name');
            $table->string('beneficiary_id_number');
            $table->string('beneficiary_relationship');
            $table->string('beneficiary_phone');
            $table->string('beneficiary_email');
            $table->string('id_copy_path');
            $table->string('proof_of_address_path');
            $table->boolean('terms_accepted');
            $table->boolean('popi_accepted');
            $table->enum('status', ['pending', 'in_progress', 'declined', 'approved'])->default('pending');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('memberships');
    }
};
