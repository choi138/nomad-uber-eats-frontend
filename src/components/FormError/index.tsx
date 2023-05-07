import React from 'react';

export interface FormErrorProps {
  errorMessage: string;
}

export const FormError: React.FC<FormErrorProps> = ({ errorMessage }) => {
  return <span className="mt-1 text-sm font-semibold text-red-500">{errorMessage}</span>;
};
