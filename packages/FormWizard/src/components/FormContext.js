import { createContext } from 'react';

const FormContext = createContext();

export const FormContextProvider = FormContext.Provider;

export const FormValues = FormContext.Consumer;
