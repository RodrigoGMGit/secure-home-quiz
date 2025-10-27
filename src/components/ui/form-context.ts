import * as React from "react";

type FormFieldContextValue = {
  name: string;
};

type FormItemContextValue = {
  id: string;
};

export const FormFieldContext = React.createContext<FormFieldContextValue>({} as FormFieldContextValue);

export const FormItemContext = React.createContext<FormItemContextValue>({} as FormItemContextValue);


