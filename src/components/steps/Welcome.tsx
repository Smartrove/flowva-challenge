import React from "react";
import Button from "../ui/Button";
import { BookOpen } from "lucide-react";

type WelcomeProps = {
  onContinue: () => void;
};

const Welcome: React.FC<WelcomeProps> = ({ onContinue }) => {
  return (
    <div className="flex flex-col items-start mt-5">
      <h1 className="text-2xl font-bold text-purple-600 mb-4 mt-[5rem]">
        Welcome to Flowva
      </h1>
      <p className="text-gray-700 mb-8 text-[12px]">
        Your smart library for organizing tools, tracking usage, and turning
        productivity into rewards. Let's set up your digital library in 2
        minutes.
      </p>

      <Button
        onClick={onContinue}
        fullWidth
        className="mt-auto animate-pulse mt-[5rem]"
      >
        Let's Go
      </Button>
    </div>
  );
};

export default Welcome;
