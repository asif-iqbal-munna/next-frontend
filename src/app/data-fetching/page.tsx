"use client";
import { useState } from "react";
import ClientData from "./_libs/views/reactQuery/ClientData";
import PageWrapper from "../../components/layout/PageWrapper";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

const ClientDataFetching = () => {
  const [shouldError, setShouldError] = useState(false);

  // Simulate an error for demonstration
  if (shouldError) {
    throw new Error("This is a simulated error to demonstrate error boundaries!");
  }

  return (
    <PageWrapper>
      <div className="space-y-6">
        {/* Error Boundary Demo Section */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-yellow-600" />
            <h2 className="text-lg font-semibold text-yellow-800">
              Error Boundary Demonstration
            </h2>
          </div>
          <p className="text-yellow-700 mb-4">
            This page is wrapped in an error boundary. Click the button below to trigger an error.
            The error will be caught and displayed gracefully without crashing the entire application.
          </p>
          <Button
            onClick={() => setShouldError(true)}
            variant="outline"
            className="border-yellow-300 text-yellow-700 hover:bg-yellow-100"
          >
            <AlertTriangle className="w-4 h-4 mr-2" />
            Trigger Error (Safe)
          </Button>
        </div>

        {/* Main Content */}
        <ClientData />
      </div>
    </PageWrapper>
  );
};

export default ClientDataFetching;
