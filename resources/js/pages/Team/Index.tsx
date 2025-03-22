import Default from '@/layouts/Default';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Head, useForm } from '@inertiajs/react';

// Define interface for form data
interface TeamFormData {
    [key: string]: string | boolean | undefined;
    team_name: string;
    manager_email: string;
    memberone_name: string;
    memberone_email: string;
    memberone_phone: string;
    membertwo_name: string;
    membertwo_email: string;
    membertwo_phone: string;
    memberthree_name: string;
    memberthree_email: string;
    memberthree_phone: string;
    memberfour_name: string;
    memberfour_email: string;
    memberfour_phone: string;
    memberfive_name: string;
    memberfive_email: string;
    memberfive_phone: string;
}

// Define interface for form errors
interface FormErrors {
    [key: string]: string;
}

const TeamRegister: React.FC = () => {
    // Initialize the form with typed data
    const { data, setData, post, processing, errors } = useForm<TeamFormData>({
        team_name: '',
        manager_email: '',
        memberone_name: '',
        memberone_email: '',
        memberone_phone: '',
        membertwo_name: '',
        membertwo_email: '',
        membertwo_phone: '',
        memberthree_name: '',
        memberthree_email: '',
        memberthree_phone: '',
        memberfour_name: '',
        memberfour_email: '',
        memberfour_phone: '',
        memberfive_name: '',
        memberfive_email: '',
        memberfive_phone: '',
        terms_accepted: false,
    });

    // Type-safe event handler
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('team.store'));
    };

    const handleInputChange = (field: keyof TeamFormData, value: string | boolean) => {
        setData(field, value);
    };

    return (
       <section className=''>

         <form onSubmit={handleSubmit} >
            <Head>
                <title>Team registration</title>
            </Head>
            <Default>
                <div className="container mt-20 px-4 py-10">
                    <div className="mx-auto max-w-2xl">
                        <Card className="shadow-lg bg-[#172a438b] text-white border-none">
                            <CardHeader className="space-y-1">
                                <CardTitle className="text-center text-4xl font-bold">Team Registration</CardTitle>
                                <CardDescription className="text-center">Register your team for the upcoming event</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="team-name">Team Name</Label>
                                        <Input
                                            id="team-name"
                                            placeholder="Enter your team name"
                                            value={data.team_name}
                                            onChange={(e) => handleInputChange('team_name', e.target.value)}
                                            aria-invalid={errors.team_name ? 'true' : 'false'}
                                        />
                                        {errors.team_name && <p className="text-sm text-red-500">{errors.team_name}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="manager-email">Manager's Email</Label>
                                        <Input
                                            id="manager-email"
                                            placeholder="Enter your Manager's Email"
                                            type="email"
                                            value={data.manager_email}
                                            onChange={(e) => handleInputChange('manager_email', e.target.value)}
                                            aria-invalid={errors.manager_email ? 'true' : 'false'}
                                        />
                                        {errors.manager_email && <p className="text-sm text-red-500">{errors.manager_email}</p>}
                                    </div>
                                </div>

                                <Separator />

                                <div className="space-y-4">
                                    <h3 className="text-lg font-medium">Team Leader Information</h3>

                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label htmlFor="memberone-name">Full Name</Label>
                                            <Input
                                                id="memberone-name"
                                                placeholder="Full Name"
                                                value={data.memberone_name}
                                                onChange={(e) => handleInputChange('memberone_name', e.target.value)}
                                                aria-invalid={errors.memberone_name ? 'true' : 'false'}
                                            />
                                            {errors.memberone_name && <p className="text-sm text-red-500">{errors.memberone_name}</p>}
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="memberone-phone">Phone Number</Label>
                                            <Input
                                                id="memberone-phone"
                                                placeholder="Phone Number"
                                                value={data.memberone_phone}
                                                onChange={(e) => handleInputChange('memberone_phone', e.target.value)}
                                                aria-invalid={errors.memberone_phone ? 'true' : 'false'}
                                            />
                                            {errors.memberone_phone && <p className="text-sm text-red-500">{errors.memberone_phone}</p>}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="memberone-email">Email</Label>
                                        <Input
                                            id="memberone-email"
                                            type="email"
                                            placeholder="email@example.com"
                                            value={data.memberone_email}
                                            onChange={(e) => handleInputChange('memberone_email', e.target.value)}
                                            aria-invalid={errors.memberone_email ? 'true' : 'false'}
                                        />
                                        {errors.memberone_email && <p className="text-sm text-red-500">{errors.memberone_email}</p>}
                                    </div>
                                </div>

                                <Separator />

                                {/* Team Members */}
                                <div className="space-y-4">
                                    <h3 className="text-lg font-medium">Team Members</h3>

                                    {/* Member 2 */}
                                    <div className="space-y-4 rounded-md border border-[#224169] p-4">
                                        <h4 className="font-medium">Member 2</h4>
                                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                            <div className="space-y-2">
                                                <Label htmlFor="membertwo-name">Full Name</Label>
                                                <Input
                                                    id="membertwo-name"
                                                    placeholder="Full Name"
                                                    value={data.membertwo_name}
                                                    onChange={(e) => handleInputChange('membertwo_name', e.target.value)}
                                                    aria-invalid={errors.membertwo_name ? 'true' : 'false'}
                                                />
                                                {errors.membertwo_name && <p className="text-sm text-red-500">{errors.membertwo_name}</p>}
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="membertwo-phone">Phone Number</Label>
                                                <Input
                                                    id="membertwo-phone"
                                                    placeholder="Phone Number"
                                                    value={data.membertwo_phone}
                                                    onChange={(e) => handleInputChange('membertwo_phone', e.target.value)}
                                                    aria-invalid={errors.membertwo_phone ? 'true' : 'false'}
                                                />
                                                {errors.membertwo_phone && <p className="text-sm text-red-500">{errors.membertwo_phone}</p>}
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="membertwo-email">Email</Label>
                                            <Input
                                                id="membertwo-email"
                                                type="email"
                                                placeholder="email@example.com"
                                                value={data.membertwo_email}
                                                onChange={(e) => handleInputChange('membertwo_email', e.target.value)}
                                                aria-invalid={errors.membertwo_email ? 'true' : 'false'}
                                            />
                                            {errors.membertwo_email && <p className="text-sm text-red-500">{errors.membertwo_email}</p>}
                                        </div>
                                    </div>

                                    {/* Member 3 */}
                                    <div className="space-y-4 rounded-md border border-[#224169] p-4">
                                        <h4 className="font-medium">Member 3</h4>
                                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                            <div className="space-y-2">
                                                <Label htmlFor="memberthree-name">Full Name</Label>
                                                <Input
                                                    id="memberthree-name"
                                                    placeholder="Full Name"
                                                    value={data.memberthree_name}
                                                    onChange={(e) => handleInputChange('memberthree_name', e.target.value)}
                                                    aria-invalid={errors.memberthree_name ? 'true' : 'false'}
                                                />
                                                {errors.memberthree_name && <p className="text-sm text-red-500">{errors.memberthree_name}</p>}
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="memberthree-phone">Phone Number</Label>
                                                <Input
                                                    id="memberthree-phone"
                                                    placeholder="Phone Number"
                                                    value={data.memberthree_phone}
                                                    onChange={(e) => handleInputChange('memberthree_phone', e.target.value)}
                                                    aria-invalid={errors.memberthree_phone ? 'true' : 'false'}
                                                />
                                                {errors.memberthree_phone && <p className="text-sm text-red-500">{errors.memberthree_phone}</p>}
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="memberthree-email">Email</Label>
                                            <Input
                                                id="memberthree-email"
                                                type="email"
                                                placeholder="email@example.com"
                                                value={data.memberthree_email}
                                                onChange={(e) => handleInputChange('memberthree_email', e.target.value)}
                                                aria-invalid={errors.memberthree_email ? 'true' : 'false'}
                                            />
                                            {errors.memberthree_email && <p className="text-sm text-red-500">{errors.memberthree_email}</p>}
                                        </div>
                                    </div>

                                    {/* Member 4 */}
                                    <div className="space-y-4 rounded-md border border-[#224169] p-4">
                                        <h4 className="font-medium">Member 4 {'(optionnal)'} </h4>
                                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                            <div className="space-y-2">
                                                <Label htmlFor="memberthree-name">Full Name</Label>
                                                <Input
                                                    id="memberthree-name"
                                                    placeholder="Full Name"
                                                    value={data.memberfour_name}
                                                    onChange={(e) => handleInputChange('memberfour_name', e.target.value)}
                                                    aria-invalid={errors.memberfrour_name ? 'true' : 'false'}
                                                />
                                                {errors.memberthree_name && <p className="text-sm text-red-500">{errors.memberthree_name}</p>}
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="memberthree-phone">Phone Number</Label>
                                                <Input
                                                    id="memberthree-phone"
                                                    placeholder="Phone Number"
                                                    value={data.memberfour_phone}
                                                    onChange={(e) => handleInputChange('memberfour_phone', e.target.value)}
                                                    aria-invalid={errors.memberfour_phone ? 'true' : 'false'}
                                                />
                                                {errors.memberfour_phone && <p className="text-sm text-red-500">{errors.memberfour_phone}</p>}
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="memberthree-email">Email</Label>
                                            <Input
                                                id="memberthree-email"
                                                type="email"
                                                placeholder="email@example.com"
                                                value={data.memberfour_email}
                                                onChange={(e) => handleInputChange('memberfour_email', e.target.value)}
                                                aria-invalid={errors.memberfour_email ? 'true' : 'false'}
                                            />
                                            {errors.memberfour_email && <p className="text-sm text-red-500">{errors.memberthree_email}</p>}
                                        </div>
                                    </div>
                                </div>

                                <Separator />

                                {/* Terms and Conditions */}
                                <div className="flex items-center space-x-2">
                                    <Checkbox />
                                    <Label htmlFor="terms" className="text-sm">
                                        I agree to the terms and conditions and understand that my information will be handled according to the
                                        privacy policy.
                                    </Label>
                                </div>
                                {errors.terms_accepted && <p className="text-sm text-red-500">{errors.terms_accepted}</p>}
                            </CardContent>

                            <CardFooter>
                                <Button className="w-full" type="submit" disabled={processing}>
                                    {processing ? 'Registering...' : 'Register Team'}
                                </Button>
                            </CardFooter>
                            <CardFooter>
                                <p>
                                    <p className="text-muted-foreground">
                                        This form is powerd by{' '}
                                        <a href="https://facebook.com/antlerslabs.dev" target="_blank">
                                            {' '}
                                            Antlers Labs{' '}
                                        </a>
                                    </p>
                                </p>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </Default>
        </form>

       </section>
    );
};

export default TeamRegister;
