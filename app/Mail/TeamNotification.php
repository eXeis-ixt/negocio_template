<?php

namespace App\Mail;

use App\Models\Team;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class TeamNotification extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * The team instance.
     *
     * @var \App\Models\Team
     */
    public $team;

    /**
     * Create a new message instance.
     *
     * @param  \App\Models\Team  $team
     * @return void
     */
    public function __construct(Team $team)
    {
        $this->team = $team;
    }

    /**
     * Get the message envelope.
     *
     * @return \Illuminate\Mail\Mailables\Envelope
     */
    public function envelope()
    {
        return new Envelope(
            subject: 'Team Registration Confirmation',
        );
    }

    /**
     * Get the message content definition.
     *
     * @return \Illuminate\Mail\Mailables\Content
     */
    public function content()
    {
        return new Content(
            view: 'emails.team-notification',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array
     */
    public function attachments()
    {
        return [];
    }
}

