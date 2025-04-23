import React from "react";
import ProgressBar from "./ProgressBar";

type OnboardingLayoutProps = {
  children: React.ReactNode;
  currentStep: number;
  totalSteps: number;
};

const OnboardingLayout: React.FC<OnboardingLayoutProps> = ({
  children,
  currentStep,
  totalSteps,
}) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 animate-fadeIn">
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
        {children}
      </div>
    </div>
  );
};

export default OnboardingLayout;
