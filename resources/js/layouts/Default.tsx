import { Footer } from '@/components';
import { NavigationBar } from '@/components/NavigationBar';
import { PropsWithChildren } from 'react';


const Default = ({ children }: PropsWithChildren) => {
    return (
        <div className="flex bg-foreground text-white flex-col items-center w-full">
            <NavigationBar />
            {children}
            <Footer />
        </div>
    )
};

export default Default
