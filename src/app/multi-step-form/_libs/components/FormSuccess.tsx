import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface FormSuccessProps {
  onStartNew: () => void;
}

export const FormSuccess = ({ onStartNew }: FormSuccessProps) => {
  return (
    <div className="max-w-3xl mx-auto">
      <Card className="">
        <CardHeader>
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <CardTitle className="text-2xl text-green-800">Form Submitted Successfully!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-6">
            Thank you for completing the registration form. Your information has been successfully submitted.
          </p>

          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-2">What&apos;s Next?</h3>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• You&apos;ll receive a confirmation email shortly</li>
                <li>• Our team will review your application</li>
                <li>• We&apos;ll contact you within 2-3 business days</li>
              </ul>
            </div>

            <Button
              onClick={onStartNew}
              className="w-full"
              size="lg"
            >
              Start New Submission
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};