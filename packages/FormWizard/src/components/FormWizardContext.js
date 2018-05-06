import { createContext } from 'react';

const FormWizardContext = createContext();

export const FormWizardProvider = FormWizardContext.Provider;

export const FormWizardConsumer = FormWizardContext.Consumer;
