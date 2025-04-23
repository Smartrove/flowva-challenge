import React, { useState } from 'react';
import { OnboardingData, Tool } from '../types';
import { tools as initialTools } from '../data/tools';
import OnboardingLayout from './OnboardingLayout';
import CompletionModal from './CompletionModal';

// Steps
import Welcome from './steps/Welcome';
import AboutYou from './steps/AboutYou';
import Location from './steps/Location';
import ToolStack from './steps/ToolStack';
import TrackingGoals from './steps/TrackingGoals';
import Complete from './steps/Complete';

const TOTAL_STEPS = 6;

const Onboarding: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState<OnboardingData>({
    role: '',
    workCategories: [],
    country: '',
    tools: initialTools.map(tool => ({ ...tool })),
    goals: [],
  });

  const updateData = (newData: Partial<OnboardingData>) => {
    setData(prevData => ({ ...prevData, ...newData }));
  };

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(prevStep => prevStep + 1);
    }
  };

  const handleComplete = () => {
    console.log('Onboarding complete!', data);
    setCurrentStep(TOTAL_STEPS);
  };

  const handleDashboard = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    // Here you would typically redirect to the dashboard
    console.log('Redirecting to dashboard...');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Welcome onContinue={handleNext} />;
      case 2:
        return (
          <AboutYou
            data={data}
            updateData={updateData}
            onContinue={handleNext}
          />
        );
      case 3:
        return (
          <Location
            data={data}
            updateData={updateData}
            onContinue={handleNext}
            onSkip={handleNext}
          />
        );
      case 4:
        return (
          <ToolStack
            data={data}
            updateData={updateData}
            onContinue={handleNext}
            onSkip={handleNext}
          />
        );
      case 5:
        return (
          <TrackingGoals
            data={data}
            updateData={updateData}
            onComplete={handleComplete}
          />
        );
      case 6:
        return (
          <Complete
            onDashboard={handleDashboard}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <OnboardingLayout currentStep={currentStep} totalSteps={TOTAL_STEPS}>
        {renderStep()}
      </OnboardingLayout>
      <CompletionModal
        isOpen={showModal}
        onClose={handleModalClose}
      />
    </>
  );
};

export default Onboarding;