"use client";
import { useState } from "react";
import ClientData from "./_libs/views/reactQuery/ClientData";
import PageWrapper from "../../components/layout/PageWrapper";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

const RandomNumberGenerator = ({ shouldGenerate }: { shouldGenerate: boolean }) => {
  if (!shouldGenerate) {
    return null;
  }

  const randomNumber = Math.floor(Math.random() * 201) - 100;

  if (randomNumber < 0) {
    throw new Error(`Error: Generated negative number ${randomNumber}`);
  }

  return null
};

const ClientDataFetching = () => {
  const [generateTrigger, setGenerateTrigger] = useState(0);

  return (
    <PageWrapper>
      <div className="space-y-6">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-yellow-600" />
            <h2 className="text-lg font-semibold text-yellow-800">
              Error Boundary Demonstration
            </h2>
          </div>
          <p className="text-yellow-700 mb-4">
            This page is wrapped in an error boundary. Click the button below to generate a random number
            between -100 and 100. If the number is negative, it will trigger an error that gets caught
            gracefully by the error boundary. If positive, you will see the contents of the page.
          </p>
          <div className="space-y-3">
            <Button
              onClick={() => setGenerateTrigger(prev => prev + 1)}
              variant="outline"
              className="border-yellow-300 text-yellow-700 hover:bg-yellow-100"
            >
              🎲 Trigger Error
            </Button>
            <p className="text-xs text-yellow-600">
              ⚠️ About 50% chance of error (negative numbers) vs success (positive numbers)
            </p>
          </div>
        </div>

        <RandomNumberGenerator shouldGenerate={generateTrigger > 0} />

        <ClientData />
      </div>
    </PageWrapper>
  );
};

export default ClientDataFetching;
