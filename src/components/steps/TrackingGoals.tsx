import React from "react";
import Button from "../ui/Button";
import { OnboardingData, TrackingGoal } from "../../types";

type TrackingGoalsProps = {
  data: OnboardingData;
  updateData: (data: Partial<OnboardingData>) => void;
  onComplete: () => void;
};

const TrackingGoals: React.FC<TrackingGoalsProps> = ({
  data,
  updateData,
  onComplete,
}) => {
  const goals: { value: TrackingGoal; label: string }[] = [
    { value: "subscription", label: "Subscription costs" },
    { value: "usage", label: "Tool usage & engagement" },
    { value: "unused", label: "Unused/duplicate tools" },
    { value: "suggestions", label: "Personalized tool suggestions" },
  ];

  const handleGoalToggle = (goal: TrackingGoal) => {
    const updatedGoals = data.goals.includes(goal)
      ? data.goals.filter((g) => g !== goal)
      : [...data.goals, goal];

    updateData({ goals: updatedGoals });
  };

  const isValid = data.goals.length > 0;

  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-bold text-purple-600 mb-2">
        What Do You Want to Track or Improve?
      </h2>
      <p className="text-gray-600 mb-6">
        This helps us personalize your dashboard and features.
      </p>

      <div className="mb-8">
        <p className="font-medium text-gray-700 mb-2">
          Select your goals: Please select at least one option
        </p>
        <div className="space-y-3">
          {goals.map((goal) => (
            <label
              key={goal.value}
              className={`flex items-center space-x-3 p-3  cursor-pointer transition-all ${
                data.goals.includes(goal.value)
                  ? "border-purple-500 bg-purple-50"
                  : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              <input
                type="checkbox"
                name={goal.value}
                checked={data.goals.includes(goal.value)}
                onChange={() => handleGoalToggle(goal.value)}
                className="h-4 w-4 text-purple-600 rounded focus:ring-purple-500"
              />
              <span
                className={`font-medium ${
                  data.goals.includes(goal.value)
                    ? "text-purple-900"
                    : "text-gray-700"
                }`}
              >
                {goal.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <Button onClick={onComplete} fullWidth disabled={!isValid}>
        Continue
      </Button>
    </div>
  );
};

export default TrackingGoals;
