import React, { useState } from "react";
import Button from "../ui/Button";
import { OnboardingData } from "../../types";
import { countries } from "../../data/tools";
import { ChevronDown } from "lucide-react";

type LocationProps = {
  data: OnboardingData;
  updateData: (data: Partial<OnboardingData>) => void;
  onContinue: () => void;
  onSkip: () => void;
};

const Location: React.FC<LocationProps> = ({
  data,
  updateData,
  onContinue,
  onSkip,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCountrySelect = (country: string) => {
    updateData({ country });
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-bold text-purple-600 mb-2">
        Where Are You Based?
      </h2>
      <p className="text-gray-600 mb-6">
        This helps us personalize tool suggestions, currencies, and rewards for
        you.
      </p>

      <div className="mb-8">
        <label className="font-medium text-gray-700 mb-2 block">Country</label>
        <div className="relative">
          <button
            type="button"
            className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-3 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`block truncate ${
                !data.country ? "text-gray-500" : "text-gray-900"
              }`}
            >
              {data.country || "Select your country"}
            </span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronDown
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </button>

          {isOpen && (
            <ul
              className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
              tabIndex={-1}
              role="listbox"
            >
              {countries.map((country) => (
                <li
                  key={country}
                  className={`cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-purple-50 ${
                    data.country === country
                      ? "bg-purple-100 text-purple-900"
                      : "text-gray-900"
                  }`}
                  onClick={() => handleCountrySelect(country)}
                >
                  {country}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="flex flex-col md:flex-row space-y-3 mt-[5rem]">
        <Button onClick={onContinue} fullWidth disabled={!data.country}>
          Continue
        </Button>
        <Button
          onClick={onSkip}
          variant="text"
          fullWidth
          className="text-[12px]"
        >
          Skip this step
        </Button>
      </div>
    </div>
  );
};

export default Location;
