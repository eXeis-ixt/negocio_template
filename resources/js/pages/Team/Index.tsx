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
    team_name?: string;
    leader_name?: string;
    leader_email?: string;
    leader_phone?: string;
    leader_uni?: string;
    leader_dept?: string;
    membertwo_name?: string;
    membertwo_email?: string;
    membertwo_phone?: string;
    membertwo_uni?: string;
    membertwo_dept?: string;
    memberthree_name?: string;
    memberthree_email?: string;
    memberthree_phone?: string;
    memberthree_uni?: string;
    memberthree_dept?: string;
    memberfour_name?: string;
    memberfour_email?: string;
    memberfour_phone?: string;
    memberfour_uni?: string;
    memberfour_dept?: string;
    terms_accepted?: boolean;
}

// Define interface for form errors
interface FormErrors {
    [key: string]: string;
}

const TeamRegister: React.FC = () => {
    // Initialize the form with typed data
    const { data, setData, post, processing, errors } = useForm<TeamFormData>({
        team_name: '',
        leader_name: '',
        leader_email: '',
        leader_phone: '',
        leader_uni: '',
        leader_dept: '',
        membertwo_name: '',
        membertwo_email: '',
        membertwo_phone: '',
        membertwo_uni: '',
        membertwo_dept: '',
        memberthree_name: '',
        memberthree_email: '',
        memberthree_phone: '',
        memberthree_uni: '',
        memberthree_dept: '',
        memberfour_name: '',
        memberfour_email: '',
        memberfour_phone: '',
        memberfour_uni: '',
        memberfour_dept: '',
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
        <section className="">
            <form onSubmit={handleSubmit}>
                <Head>
                    <title>Team registration</title>
                </Head>
                <Default>
                    <div className="linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] absolute inset-0 -z-10 h-[150vh] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
                    <div className="container mt-20 px-4 py-10">
                        <div className="mx-auto max-w-2xl">
                            <Card className="bg-background border-none text-white shadow-lg">
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

                                    </div>

                                    <Separator />

                                    <div className="space-y-4">
                                        <h3 className="text-lg font-medium">Team Leader Information</h3>

                                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                            <div className="space-y-2">
                                                <Label htmlFor="leader-name">Full Name</Label>
                                                <Input
                                                    id="leader-name"
                                                    placeholder="Full Name"
                                                    value={data.leader_name}
                                                    onChange={(e) => handleInputChange('leader_name', e.target.value)}
                                                    aria-invalid={errors.leader_name ? 'true' : 'false'}
                                                />
                                                {errors.leader_name && <p className="text-sm text-red-500">{errors.leader_name}</p>}
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="leader-phone">Phone Number</Label>
                                                <Input
                                                    id="leader-phone"
                                                    placeholder="Phone Number"
                                                    value={data.leader_phone}
                                                    onChange={(e) => handleInputChange('leader_phone', e.target.value)}
                                                    aria-invalid={errors.leader_phone ? 'true' : 'false'}
                                                />
                                                {errors.leader_phone && <p className="text-sm text-red-500">{errors.leader_phone}</p>}
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="leader-email">Email</Label>
                                            <Input
                                                id="leader-email"
                                                type="email"
                                                placeholder="email@example.com"
                                                value={data.leader_email}
                                                onChange={(e) => handleInputChange('leader_email', e.target.value)}
                                                aria-invalid={errors.leader_email ? 'true' : 'false'}
                                            />
                                            {errors.leader_email && <p className="text-sm text-red-500">{errors.leader_email}</p>}
                                        </div>

                                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                            <div className="space-y-2">
                                                <Label htmlFor="leader-uni">University/Institution</Label>
                                                <Input
                                                    id="leader-uni"
                                                    placeholder="University/Institution"
                                                    value={data.leader_uni}
                                                    onChange={(e) => handleInputChange('leader_uni', e.target.value)}
                                                    aria-invalid={errors.leader_uni ? 'true' : 'false'}
                                                />
                                                {errors.leader_uni && <p className="text-sm text-red-500">{errors.leader_uni}</p>}
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="leader-dept">Department</Label>
                                                <Input
                                                    id="leader-dept"
                                                    placeholder="Department"
                                                    value={data.leader_dept}
                                                    onChange={(e) => handleInputChange('leader_dept', e.target.value)}
                                                    aria-invalid={errors.leader_dept ? 'true' : 'false'}
                                                />
                                                {errors.leader_dept && <p className="text-sm text-red-500">{errors.leader_dept}</p>}
                                            </div>
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

                                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                                <div className="space-y-2">
                                                    <Label htmlFor="membertwo-uni">University/Institution</Label>
                                                    <Input
                                                        id="membertwo-uni"
                                                        placeholder="University/Institution"
                                                        value={data.membertwo_uni}
                                                        onChange={(e) => handleInputChange('membertwo_uni', e.target.value)}
                                                        aria-invalid={errors.membertwo_uni ? 'true' : 'false'}
                                                    />
                                                    {errors.membertwo_uni && <p className="text-sm text-red-500">{errors.membertwo_uni}</p>}
                                                </div>

                                                <div className="space-y-2">
                                                    <Label htmlFor="membertwo-dept">Department</Label>
                                                    <Input
                                                        id="membertwo-dept"
                                                        placeholder="Department"
                                                        value={data.membertwo_dept}
                                                        onChange={(e) => handleInputChange('membertwo_dept', e.target.value)}
                                                        aria-invalid={errors.membertwo_dept ? 'true' : 'false'}
                                                    />
                                                    {errors.membertwo_dept && <p className="text-sm text-red-500">{errors.membertwo_dept}</p>}
                                                </div>
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

                                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                                <div className="space-y-2">
                                                    <Label htmlFor="memberthree-uni">University/Institution</Label>
                                                    <Input
                                                        id="memberthree-uni"
                                                        placeholder="University/Institution"
                                                        value={data.memberthree_uni}
                                                        onChange={(e) => handleInputChange('memberthree_uni', e.target.value)}
                                                        aria-invalid={errors.memberthree_uni ? 'true' : 'false'}
                                                    />
                                                    {errors.memberthree_uni && <p className="text-sm text-red-500">{errors.memberthree_uni}</p>}
                                                </div>

                                                <div className="space-y-2">
                                                    <Label htmlFor="memberthree-dept">Department</Label>
                                                    <Input
                                                        id="memberthree-dept"
                                                        placeholder="Department"
                                                        value={data.memberthree_dept}
                                                        onChange={(e) => handleInputChange('memberthree_dept', e.target.value)}
                                                        aria-invalid={errors.memberthree_dept ? 'true' : 'false'}
                                                    />
                                                    {errors.memberthree_dept && <p className="text-sm text-red-500">{errors.memberthree_dept}</p>}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Member 4 (optional) */}
                                        <div className="space-y-4 rounded-md border border-[#224169] p-4">
                                            <h4 className="font-medium">Member 4 (optional)</h4>
                                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                                <div className="space-y-2">
                                                    <Label htmlFor="memberfour-name">Full Name</Label>
                                                    <Input
                                                        id="memberfour-name"
                                                        placeholder="Full Name"
                                                        value={data.memberfour_name}
                                                        onChange={(e) => handleInputChange('memberfour_name', e.target.value)}
                                                        aria-invalid={errors.memberfour_name ? 'true' : 'false'}
                                                    />
                                                    {errors.memberfour_name && <p className="text-sm text-red-500">{errors.memberfour_name}</p>}
                                                </div>

                                                <div className="space-y-2">
                                                    <Label htmlFor="memberfour-phone">Phone Number</Label>
                                                    <Input
                                                        id="memberfour-phone"
                                                        placeholder="Phone Number"
                                                        value={data.memberfour_phone}
                                                        onChange={(e) => handleInputChange('memberfour_phone', e.target.value)}
                                                        aria-invalid={errors.memberfour_phone ? 'true' : 'false'}
                                                    />
                                                    {errors.memberfour_phone && <p className="text-sm text-red-500">{errors.memberfour_phone}</p>}
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="memberfour-email">Email</Label>
                                                <Input
                                                    id="memberfour-email"
                                                    type="email"
                                                    placeholder="email@example.com"
                                                    value={data.memberfour_email}
                                                    onChange={(e) => handleInputChange('memberfour_email', e.target.value)}
                                                    aria-invalid={errors.memberfour_email ? 'true' : 'false'}
                                                />
                                                {errors.memberfour_email && <p className="text-sm text-red-500">{errors.memberfour_email}</p>}
                                            </div>

                                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                                <div className="space-y-2">
                                                    <Label htmlFor="memberfour-uni">University/Institution</Label>
                                                    <Input
                                                        id="memberfour-uni"
                                                        placeholder="University/Institution"
                                                        value={data.memberfour_uni}
                                                        onChange={(e) => handleInputChange('memberfour_uni', e.target.value)}
                                                        aria-invalid={errors.memberfour_uni ? 'true' : 'false'}
                                                    />
                                                    {errors.memberfour_uni && <p className="text-sm text-red-500">{errors.memberfour_uni}</p>}
                                                </div>

                                                <div className="space-y-2">
                                                    <Label htmlFor="memberfour-dept">Department</Label>
                                                    <Input
                                                        id="memberfour-dept"
                                                        placeholder="Department"
                                                        value={data.memberfour_dept}
                                                        onChange={(e) => handleInputChange('memberfour_dept', e.target.value)}
                                                        aria-invalid={errors.memberfour_dept ? 'true' : 'false'}
                                                    />
                                                    {errors.memberfour_dept && <p className="text-sm text-red-500">{errors.memberfour_dept}</p>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <Separator />

                                    {/* Terms and Conditions */}
                                    <div className="flex items-center space-x-2">
                                        <Checkbox
                                            id="terms"
                                            checked={data.terms_accepted as boolean}
                                            onCheckedChange={(checked) =>
                                                handleInputChange('terms_accepted', checked as boolean)
                                            }
                                        />
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
                                    <p className="text-muted-foreground">
                                        This form is powered by{' '}
                                        <a href="https://facebook.com/antlerslabs.dev" target="_blank" rel="noopener noreferrer">
                                            Antlers Labs
                                        </a>
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
