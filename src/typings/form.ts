import { RegisterOptions, UseFormRegister, UseFormRegisterReturn } from 'react-hook-form';

export interface FormData {
  department: 'string';
  motivation: 'string';
  salary: 'string';
  introduction: 'string';
  dreams: 'string';
  email: 'string';
  errors: 'string';
}

export interface RadioData {
  id: number;
  value: string;
}

export interface FormItemData {
  id: number | null;
  key: keyof FormData;
  type: string;
  title: string;
  data: RadioData[] | null;
  registerOptions: RegisterOptions;
}

export interface FormItem {
  data: FormItemData;
  // register?: UseFormRegister<FormData>;
  register?: UseFormRegisterReturn<any>;
}
