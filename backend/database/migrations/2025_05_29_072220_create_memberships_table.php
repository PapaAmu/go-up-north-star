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
            $table->integer('shares');
            $table->string('proof_of_payment_path')->nullable();
            $table->boolean('accepted_terms');
            $table->boolean('read_terms');
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
