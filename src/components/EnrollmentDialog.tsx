import React, { useState } from "react";
import { Service } from "@/data/services";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, Loader2 } from "lucide-react";

interface EnrollmentDialogProps {
  service: Service;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const EnrollmentDialog: React.FC<EnrollmentDialogProps> = ({ service, isOpen, onOpenChange }) => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success(`Request for ${service.title} submitted successfully!`);
    }, 1500);
  };

  if (submitted) {
    return (
      <Dialog open={isOpen} onOpenChange={(open) => {
        onOpenChange(open);
        if (!open) setSubmitted(false);
      }}>
        <DialogContent className="sm:max-w-[425px] text-center p-12">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 p-4 rounded-full">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
          </div>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">Successfully Submitted!</DialogTitle>
            <DialogDescription className="text-center pt-2">
              We have received your enrollment request for <strong>{service.title}</strong>. Our academic counselor will reach out to you within 24 hours via the provided contact details.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-8">
            <Button onClick={() => onOpenChange(false)} className="w-full bg-blue-600 hover:bg-blue-700 py-6 rounded-xl">
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] overflow-y-auto max-h-[90vh]">
        <DialogHeader className="pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
              {service.icon}
            </div>
            <DialogTitle className="text-2xl font-bold">{service.title} Enrollment</DialogTitle>
          </div>
          <DialogDescription>
            Fill in the details below to start your registration process for {service.title}.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 pt-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" placeholder="John" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="Doe" required />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="john@example.com" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" placeholder="+234 ..." required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="exam-type">Category/Level</Label>
            <Select required>
              <SelectTrigger>
                <SelectValue placeholder="Select level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="primary">Primary / Junior Secondary</SelectItem>
                <SelectItem value="secondary">Senior Secondary</SelectItem>
                <SelectItem value="undergraduate">Undergraduate / Adult Learner</SelectItem>
                <SelectItem value="professional">Professional / Exam Candidate</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Additional Information (Optional)</Label>
            <Textarea 
              id="message" 
              placeholder="Tell us more about your specific needs or goals..." 
              className="min-h-[100px]"
            />
          </div>
          
          <div className="pt-2">
            <Button 
              type="submit" 
              className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg shadow-blue-100 transition-all active:scale-[0.98]"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Processing...
                </>
              ) : (
                "Submit Application"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EnrollmentDialog;