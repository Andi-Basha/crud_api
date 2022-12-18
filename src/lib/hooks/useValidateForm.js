import { useState } from 'react';

export const useValidateForm = () => {
  const [formError, setFormError] = useState(null);

  const imputsAreEmpty = (...inputs) =>
    inputs.some(input => {
      return input === '';
    });

  const inputsAreNotValidNumbers = (...inputs) =>
    inputs.some(input => !Number.isFinite(input) || input < 0);

  const checkIfInputsAreEmpty = (...inputs) => {
    if (imputsAreEmpty(...inputs)) {
      setFormError('All inputs must be filled');
      return true;
    }
    setFormError(null);
    return false;
  }

  const checkIfNumbersAreNotValid = (...inputs) => {
    if(inputsAreNotValidNumbers(...inputs)) {
      setFormError('Price and Stock must be valid numbers');
      return true;
    }
    setFormError(null);
    return false;
  }

  const checkIfPriceIsNotValid = (input) => {
    if(+input === 0) {
      setFormError('Price must be greater than 0');
      return true;
    }
    setFormError(null);
    return false;
  }

  return {
    formError,
    checkIfInputsAreEmpty, 
    checkIfNumbersAreNotValid,
    checkIfPriceIsNotValid
  };
};
