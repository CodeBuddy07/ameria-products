/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';

export const DetailsPopUp = (
    { title, userDetails, children }: { title: string, userDetails: any, children: any }
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
                    <h1 className='text-gray-400 pb-1 pt-3 border-b'>Company Name: <span className='text-black font-bold pl-5 '>{userDetails.name}</span></h1>
                    <h1 className='text-gray-400 pb-1 pt-3 border-b'>Company Email: <span className='text-black pl-5'>{userDetails.email}</span></h1>
                    <h1 className='text-gray-400 pb-1 pt-3'>Subscription plan: <span className='text-black pl-5'>{userDetails.subscriptionPlan}</span></h1>
                </div>
            </DialogContent>
        </Dialog>
    );
};