<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
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
            background-color: #224169;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 5px 5px 0 0;
        }
        .content {
            padding: 20px;
            border: 1px solid #ddd;
            border-top: none;
            border-radius: 0 0 5px 5px;
        }
        .team-info {
            margin-top: 20px;
            border-top: 1px solid #eee;
            padding-top: 20px;
        }
        .footer {
            margin-top: 20px;
            text-align: center;
            font-size: 0.8em;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Team Registration Confirmation</h1>
    </div>

    <div class="content">
        <p>Dear {{ $team->leader_name }},</p>

        <p>Thank you for registering your team <strong>{{ $team->team_name }}</strong> for the upcoming event. Your registration has been successfully received and processed.</p>

        <div class="team-info">
            <h2>Team Information</h2>

            <h3>Team Leader</h3>
            <p>
                <strong>Name:</strong> {{ $team->leader_name }}<br>
                <strong>Email:</strong> {{ $team->leader_email }}<br>
                @if($team->leader_phone)
                <strong>Phone:</strong> {{ $team->leader_phone }}<br>
                @endif
                @if($team->leader_uni)
                <strong>University/Institution:</strong> {{ $team->leader_uni }}<br>
                @endif
                @if($team->leader_dept)
                <strong>Department:</strong> {{ $team->leader_dept }}
                @endif
            </p>

            <h3>Team Members</h3>

            <h4>Member 2</h4>
            <p>
                <strong>Name:</strong> {{ $team->membertwo_name }}<br>
                <strong>Email:</strong> {{ $team->membertwo_email }}<br>
                @if($team->membertwo_phone)
                <strong>Phone:</strong> {{ $team->membertwo_phone }}<br>
                @endif
                @if($team->membertwo_uni)
                <strong>University/Institution:</strong> {{ $team->membertwo_uni }}<br>
                @endif
                @if($team->membertwo_dept)
                <strong>Department:</strong> {{ $team->membertwo_dept }}
                @endif
            </p>

            @if($team->memberthree_name)
            <h4>Member 3</h4>
            <p>
                <strong>Name:</strong> {{ $team->memberthree_name }}<br>
                @if($team->memberthree_email)
                <strong>Email:</strong> {{ $team->memberthree_email }}<br>
                @endif
                @if($team->memberthree_phone)
                <strong>Phone:</strong> {{ $team->memberthree_phone }}<br>
                @endif
                @if($team->memberthree_uni)
                <strong>University/Institution:</strong> {{ $team->memberthree_uni }}<br>
                @endif
                @if($team->memberthree_dept)
                <strong>Department:</strong> {{ $team->memberthree_dept }}
                @endif
            </p>
            @endif

            @if($team->memberfour_name)
            <h4>Member 4</h4>
            <p>
                <strong>Name:</strong> {{ $team->memberfour_name }}<br>
                @if($team->memberfour_email)
                <strong>Email:</strong> {{ $team->memberfour_email }}<br>
                @endif
                @if($team->memberfour_phone)
                <strong>Phone:</strong> {{ $team->memberfour_phone }}<br>
                @endif
                @if($team->memberfour_uni)
                <strong>University/Institution:</strong> {{ $team->memberfour_uni }}<br>
                @endif
                @if($team->memberfour_dept)
                <strong>Department:</strong> {{ $team->memberfour_dept }}
                @endif
            </p>
            @endif
        </div>

        <p>We'll be sending more information about the event schedule, venue details, and further instructions to this email address in the coming days.</p>

        <p>If you have any questions or need to update your team information, please contact us at <a href="mailto:support@example.com">support@example.com</a>.</p>

        <p>Best regards,<br>The Event Team</p>
    </div>

    <div class="footer">
        <p>This email was sent by Antlers Labs</p>
        <p>&copy; {{ date('Y') }} Your Organization. All rights reserved.</p>
    </div>
</body>
</html>
