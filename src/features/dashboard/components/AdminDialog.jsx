import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

function AdminDialog({ open, onOpenChange, children }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/* <DialogTrigger>Open</DialogTrigger> */}
      <DialogContent className="bg-[#1A1D21F5] border-none text-white">
        <DialogHeader>
          <DialogTitle className="pb-4">Are you absolutely sure?</DialogTitle>
          <DialogDescription className="flex gap-4 flex-col">
            {children}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AdminDialog;
