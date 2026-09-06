"use client";
import { useState, type ChangeEvent, type FocusEvent, type FormEvent } from "react";
import validateForm, { type FormErrors, type ValidationRules } from "@utils/validateForm";

type FormControl = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
export default function useFormValidation<T extends Record<keyof T, string>>(initialValues: T, rules: ValidationRules<T>) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<FormErrors<T>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({});

  const handleChange = (event: ChangeEvent<FormControl>) => {
    const { name, value } = event.currentTarget;
    if (!Object.prototype.hasOwnProperty.call(values, name)) return;
    const next = { ...values, [name]: value };
    setValues(next);
    setTouched(previous => ({ ...previous, [name]: true }));
    setErrors(validateForm(next, rules));
  };
  const handleBlur = (event: FocusEvent<FormControl>) => {
    const { name } = event.currentTarget;
    if (!Object.prototype.hasOwnProperty.call(values, name)) return;
    setTouched(previous => ({ ...previous, [name]: true }));
    setErrors(validateForm(values, rules));
  };
  const handleSubmit = (onValid: (values: T) => void) => (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const sanitized = { ...values };
    const allTouched: Partial<Record<keyof T, boolean>> = {};
    for (const key of Object.keys(values) as Array<keyof T>) {
      const value = values[key].trim();
      sanitized[key] = (String(key).toLowerCase().includes("email") ? value.toLowerCase() : value) as T[typeof key];
      allTouched[key] = true;
    }
    const validationErrors = validateForm(sanitized, rules);
    setErrors(validationErrors);
    setTouched(allTouched);
    if (Object.keys(validationErrors).length === 0) onValid(sanitized);
  };
  return { values, errors, touched, handleChange, handleBlur, handleSubmit, setValues, setErrors };
}
