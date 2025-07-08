"use client";

import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type RemoveNotificationProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onConfirm: () => void;
    title?: string;
};

const RemoveNotification = ({
    open,
    onOpenChange,
    onConfirm,
    title,
}: RemoveNotificationProps) => {

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Remove {title}?</DialogTitle>
                </DialogHeader>
                <p className="text-sm text-muted-foreground">
                    Are you sure you want to delete this {title?.toLowerCase()}? This action cannot be undone.
                </p>
                <DialogFooter className="flex justify-end gap-2 pt-4">
                    <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
                    <Button className="bg-red-600 hover:bg-red-700 text-white" onClick={() => {
                        console.log("Remove clicked"); // Check if this logs
                        onConfirm();
                    }}>
                        Remove
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default RemoveNotification;
