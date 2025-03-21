import { Footer } from '@/components';
import Navbar from '@/components/navigation/navbar';
import React from 'react'
interface Props {
    children: React.ReactNode;
}

const Default = ({ children }: Props) => {
    return (
        <div className="flex bg-dark text-white flex-col items-center w-full">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
};

export default Default
