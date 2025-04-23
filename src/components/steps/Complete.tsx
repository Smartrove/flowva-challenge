import React from "react";
import Button from "../ui/Button";

type CompleteProps = {
  onDashboard: () => void;
};

const Complete: React.FC<CompleteProps> = ({ onDashboard }) => {
  return (
    <div className="flex flex-col items-start">
      <h2 className="text-2xl font-bold text-purple-600 mb-2">
        Setup Complete!
      </h2>
      <p className="text-[12px] text-gray-700 mb-8">
        Your Flowva library is ready to use. We'll take you to your dashboard
        now where you can start organizing your tools and tracking your
        productivity.
      </p>

      <Button onClick={onDashboard} fullWidth className="mt-[15rem]">
        Go to Dashboard
      </Button>
    </div>
  );
};

export default Complete;
