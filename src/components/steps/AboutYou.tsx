import React from 'react';
import Button from '../ui/Button';
import { OnboardingData, UserRole, WorkCategory } from '../../types';

type AboutYouProps = {
  data: OnboardingData;
  updateData: (data: Partial<OnboardingData>) => void;
  onContinue: () => void;
};

const AboutYou: React.FC<AboutYouProps> = ({ data, updateData, onContinue }) => {
  const roles: { value: UserRole; label: string }[] = [
    { value: 'freelancer', label: 'Freelancer' },
    { value: 'entrepreneur', label: 'Solo entrepreneur' },
    { value: 'team', label: 'Small team' },
    { value: 'creator', label: 'Creator' },
  ];

  const workCategories: { value: WorkCategory; label: string }[] = [
    { value: 'design', label: 'Design' },
    { value: 'development', label: 'Development' },
    { value: 'writing', label: 'Writing' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'other', label: 'Other' },
  ];

  const handleRoleChange = (role: UserRole) => {
    updateData({ role });
  };

  const handleWorkCategoryChange = (category: WorkCategory) => {
    const updatedCategories = data.workCategories.includes(category)
      ? data.workCategories.filter(c => c !== category)
      : [...data.workCategories, category];
    
    updateData({ workCategories: updatedCategories });
  };

  const isValid = data.role && data.workCategories.length > 0;

  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-bold text-purple-600 mb-2">About You</h2>
      <p className="text-gray-600 mb-6">
        Help us tailor your library by telling us a bit about yourself.
      </p>
      
      <div className="mb-6">
        <p className="font-medium text-gray-700 mb-2">What best describes you? Please select an option</p>
        <div className="space-y-2">
          {roles.map((role) => (
            <label 
              key={role.value} 
              className="flex items-center space-x-2 p-2 rounded hover:bg-gray-50 cursor-pointer transition"
            >
              <input
                type="radio"
                name="role"
                checked={data.role === role.value}
                onChange={() => handleRoleChange(role.value)}
                className="h-4 w-4 text-purple-600 focus:ring-purple-500"
              />
              <span className="text-gray-700">{role.label}</span>
            </label>
          ))}
        </div>
      </div>
      
      <div className="mb-8">
        <p className="font-medium text-gray-700 mb-2">What kind of work do you do? Please select at least one option</p>
        <div className="space-y-2">
          {workCategories.map((category) => (
            <label 
              key={category.value} 
              className="flex items-center space-x-2 p-2 rounded hover:bg-gray-50 cursor-pointer transition"
            >
              <input
                type="checkbox"
                name={category.value}
                checked={data.workCategories.includes(category.value)}
                onChange={() => handleWorkCategoryChange(category.value)}
                className="h-4 w-4 text-purple-600 rounded focus:ring-purple-500"
              />
              <span className="text-gray-700">{category.label}</span>
            </label>
          ))}
        </div>
      </div>
      
      <Button 
        onClick={onContinue} 
        fullWidth 
        disabled={!isValid}
      >
        Continue
      </Button>
    </div>
  );
};

export default AboutYou;