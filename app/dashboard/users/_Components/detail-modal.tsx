import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';

interface DetailsModalProps {
    title: string;
    companyDetails: {
    name: string
    email: string
    leader: string
    subscriptionPlan: string
  };
    children: React.ReactNode;
}

export const DetailsModal: React.FC<DetailsModalProps> = (
    { title, companyDetails, children } : DetailsModalProps
) => {
    
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-lg font-semibold text-gray-900">
                        {title}
                    </DialogTitle>
                </DialogHeader>

                <div>
                    <h1 className='text-gray-400 pb-1 pt-3 border-b'>Company Name: <span className='text-black font-bold pl-5 '>{companyDetails.name}</span></h1>
                    <h1 className='text-gray-400 pb-1 pt-3 border-b'>Company Email: <span className='text-black pl-5'>{companyDetails.email}</span></h1>
                    <h1 className='text-gray-400 pb-1 pt-3 border-b'>Admin Name: <span className='text-black pl-5'>{companyDetails.leader}</span></h1>
                    <h1 className='text-gray-400 pb-1 pt-3 border-b'>Subscription plan: <span className='text-black pl-5'>{companyDetails.subscriptionPlan}</span></h1>
                </div>
            </DialogContent>
        </Dialog>
    );
};