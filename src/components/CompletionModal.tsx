import React from "react";
import Button from "./ui/Button";
import Modal from "./Modal";

type CompletionModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CompletionModal: React.FC<CompletionModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-center">
        <h3 className="text-xl font-bold text-purple-600 mb-2">
          Onboarding Complete!
        </h3>
        <p className="text-gray-600 text-[12px] mb-6">
          Taking you to your dashboard now.
        </p>
        <Button onClick={onClose}>OK</Button>
      </div>
    </Modal>
  );
};

export default CompletionModal;
