<?php

namespace App\Http\Controllers;


use App\Models\Team;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Mail;
use App\Mail\TeamNotification;

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
        // Validate the request...
        $request->validate( [
            'team_name' => 'required|string|max:255|unique:teams,name',
            'manager_email' => 'required|email|max:255',
            'memberone_name' => 'required|string|max:255',
            'memberone_email' => 'required|email|max:255',
            'memberone_phone' => 'required|string|max:20',
            'membertwo_name' => 'nullable|string|max:255',
            'membertwo_email' => 'nullable|email|max:255',
            'membertwo_phone' => 'nullable|string|max:20',
            'memberthree_name' => 'nullable|string|max:255',
            'memberthree_email' => 'nullable|email|max:255',
            'memberthree_phone' => 'nullable|string|max:20',
            'memberfour_name' => 'nullable|string|max:255',
            'memberfour_email' => 'nullable|email|max:255',
            'memberfour_phone' => 'nullable|string|max:20',
            'memberfive_name' => 'nullable|string|max:255',
            'memberfive_email' => 'nullable|email|max:255',
            'memberfive_phone' => 'nullable|string|max:20',
        ]);

        try {
            // Create the team
            $team = Team::create($request->all());

            // Send confirmation email to the team manager
            Mail::to($team->manager_email)
                ->send(new TeamNotification($team));

            return redirect()->route('team.register')
                ->with('success', 'Team registered successfully! A confirmation email has been sent to the team manager.');

        } catch (\Exception $e) {
            return redirect()->back()
                ->withInput()
                ->withErrors(['error' => 'Failed to register team. ' . $e->getMessage()]);
        }
    }
}
