<!-- resources/views/emails/team-registration.blade.php -->
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Team Registration Confirmation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background-color: #5468fb;
            color: white;
            padding: 15px;
            text-align: center;
            border-radius: 5px 5px 0 0;
        }
        .content {
            padding: 20px;
            border: 1px solid #ddd;
            border-top: none;
            border-radius: 0 0 5px 5px;
        }
        .footer {
            margin-top: 20px;
            text-align: center;
            font-size: 12px;
            color: #777;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Team Registration Confirmation</h1>
    </div>

    <div class="content">
        <p>Dear Team Manager,</p>

        <p>We're excited to confirm that your team <strong>{{ $team->team_name }}</strong> has been successfully registered for the upcoming event!</p>

        <p>Here's a summary of your registration:</p>
        <ul>
            <li><strong>Team Name:</strong> {{ $team->team_name }}</li>
            <li><strong>Manager Email:</strong> {{ $team->manager_email }}</li>
            <li><strong>Registration Date:</strong> {{ $team->created_at->format('F j, Y') }}</li>
        </ul>

        <p>What's next?</p>
        <ol>
            <li>Check your email regularly for updates about the event</li>
            <li>Make sure all team members are prepared and know the event details</li>
            <li>Contact us if you need to make any changes to your team information</li>
        </ol>

        <p>If you have any questions or need assistance, please don't hesitate to reach out to our support team.</p>

        <p>Best regards,<br>
        The Event Organizing Team</p>
    </div>

    <div class="footer">
        <p>This is an automated message. Please do not reply to this email.</p>
        <p>&copy; {{ date('Y') }} Communic. All rights reserved. | Powered By Adons Tech</p>
    </div>
</body>
</html>
