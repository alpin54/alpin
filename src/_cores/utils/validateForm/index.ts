export type FormErrors<T> = Partial<Record<keyof T, string>>;
export interface ValidationRule<T> {
  required?: boolean;
  pattern?: RegExp;
  minLength?: number;
  maxLength?: number;
  message?: string;
  validate?: (value: string, values: T) => string | undefined;
}
export type ValidationRules<T> = Partial<Record<keyof T, ValidationRule<T> | readonly ValidationRule<T>[]>>;

export default function validateForm<T extends Record<keyof T, string>>(values: T, rules: ValidationRules<T>): FormErrors<T> {
  const errors: FormErrors<T> = {};
  for (const key of Object.keys(rules) as Array<keyof T>) {
    const configured = rules[key];
    if (!configured) continue;
    const checks: readonly ValidationRule<T>[] = Array.isArray(configured) ? configured : [configured as ValidationRule<T>];
    const value = values[key];
    for (const rule of checks) {
      let message: string | undefined;
      if (rule.required && !value.trim()) message = "This field is required.";
      else if (value) {
        if (rule.minLength !== undefined && value.length < rule.minLength) message = `Use at least ${rule.minLength} characters.`;
        else if (rule.maxLength !== undefined && value.length > rule.maxLength) message = `Use at most ${rule.maxLength} characters.`;
        else if (rule.pattern && !new RegExp(rule.pattern.source, rule.pattern.flags).test(value)) message = "Enter a valid value.";
      }
      message = message ? rule.message || message : rule.validate?.(value, values);
      if (message) { errors[key] = message; break; }
    }
  }
  return errors;
}
