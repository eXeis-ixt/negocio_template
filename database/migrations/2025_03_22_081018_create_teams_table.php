<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('teams', function (Blueprint $table) {
            $table->id();
            $table->string('team_name');
            $table->string('manager_email');
            $table->string('memberone_name');
            $table->string('memberone_email');
            $table->string('memberone_phone')->nullable();
            $table->string('membertwo_name');
            $table->string('membertwo_email');
            $table->string('membertwo_phone')->nullable();
            $table->string('memberthree_name')->nullable();
            $table->string('memberthree_email')->nullable();
            $table->string('memberthree_phone')->nullable();
            $table->string('memberfour_name')->nullable();
            $table->string('memberfour_email')->nullable();
            $table->string('memberfour_phone')->nullable();
            $table->string('memberfive_name')->nullable();
            $table->string('memberfive_email')->nullable();
            $table->string('memberfive_phone')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('teams');
    }
};
