import React from "react";
import Button from "../ui/Button";
import { OnboardingData, Tool } from "../../types";
import { tools as toolsData } from "../../data/tools";
import * as Icons from "lucide-react";

type ToolStackProps = {
  data: OnboardingData;
  updateData: (data: Partial<OnboardingData>) => void;
  onContinue: () => void;
  onSkip: () => void;
};

const ToolStack: React.FC<ToolStackProps> = ({
  data,
  updateData,
  onContinue,
  onSkip,
}) => {
  const handleToolToggle = (toolId: string) => {
    const updatedTools = data.tools.map((tool) =>
      tool.id === toolId ? { ...tool, selected: !tool.selected } : tool
    );

    updateData({ tools: updatedTools });
  };

  const LucideIcon = ({ name }: { name: string }) => {
    const IconComponent = Icons[name as keyof typeof Icons] || Icons.Box;
    return <IconComponent className="h-6 w-6" />;
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-bold text-purple-600 mb-2">
        Your Tool Stack
      </h2>
      <p className="text-gray-600 mb-6">
        Which tools are part of your workflow? We'll pre-load and organize them
        in your library.
      </p>

      <div className="grid grid-cols-3 gap-3 mb-4">
        {data.tools.map((tool) => {
          const iconName =
            tool.icon.charAt(0).toUpperCase() + tool.icon.slice(1);

          return (
            <button
              key={tool.id}
              onClick={() => handleToolToggle(tool.id)}
              className={`flex flex-col items-center justify-center p-3 rounded-lg border transition-all ${
                tool.selected
                  ? "border-purple-500 bg-purple-50 shadow-sm"
                  : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              <div
                className={`rounded-full p-2 mb-1 ${
                  tool.selected
                    ? "bg-purple-100 text-purple-600"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                <LucideIcon name={iconName} />
              </div>
              <span className="text-sm font-medium">{tool.name}</span>
            </button>
          );
        })}
      </div>

      <p className="text-xs text-gray-500 mb-6">
        You can always add more tools later in your library settings.
      </p>

      <div className="flex flex-col md:flex-row space-y-3 mt-auto">
        <Button onClick={onContinue} fullWidth>
          Continue
        </Button>
        <Button
          onClick={onSkip}
          variant="text"
          fullWidth
          className="text-[12px]"
        >
          Skip - I'll add them later
        </Button>
      </div>
    </div>
  );
};

export default ToolStack;
