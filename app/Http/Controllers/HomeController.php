<?php

namespace App\Http\Controllers;

use App\Mail\TeamNotification;
use App\Models\Team;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(){
        return Inertia::render("Home");
    }

    public function team(){
        return Inertia::render("Team/Index");
    }

    public function store(Request $request)
    {
        // Validate the request data
        $validated = $request->validate([
            'team_name' => 'required|string|max:255|unique:teams',
            'department' => 'nullable|string|max:255',
            'leader_name' => 'required|string|max:255',
            'leader_email' => 'required|email|max:255',
            'leader_phone' => 'nullable|string|max:20',
            'leader_uni' => 'nullable|string|max:255',
            'leader_dept' => 'nullable|string|max:255',
            'membertwo_name' => 'required|string|max:255',
            'membertwo_email' => 'required|email|max:255',
            'membertwo_phone' => 'nullable|string|max:20',
            'membertwo_uni' => 'nullable|string|max:255',
            'membertwo_dept' => 'nullable|string|max:255',
            'memberthree_name' => 'nullable|string|max:255',
            'memberthree_email' => 'nullable|email|max:255',
            'memberthree_phone' => 'nullable|string|max:20',
            'memberthree_uni' => 'nullable|string|max:255',
            'memberthree_dept' => 'nullable|string|max:255',
            'memberfour_name' => 'nullable|string|max:255',
            'memberfour_email' => 'nullable|email|max:255',
            'memberfour_phone' => 'nullable|string|max:20',
            'memberfour_uni' => 'nullable|string|max:255',
            'memberfour_dept' => 'nullable|string|max:255',
        ]);

        try {
            // Create new team
            $team = Team::create($validated);

            // Send confirmation email to team leader
            Mail::to($team->leader_email)->send(new TeamNotification($team));

            // Return successful response
            return redirect()->route('registration.success')->with('success', 'Team registered successfully! A confirmation email has been sent to the team leader.');

        } catch (\Exception $e) {
            // Log the error

            // Return error response
            return back()
                ->withInput()
                ->withErrors(['error' => 'There was a problem registering your team. Please try again.']);
        }
    }
}
