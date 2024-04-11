import * as React from "react";
import { cn } from "@/util/class";
import styles from "./index.module.css";

export interface SelectProps
  extends React.InputHTMLAttributes<HTMLSelectElement> {}

export interface OptionProps
  extends React.InputHTMLAttributes<HTMLOptionElement> {}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={cn(className, styles.selectStyle)}
        {...props}
      />
    );
  }
);

Select.displayName = "Select";

const Option = React.forwardRef<HTMLOptionElement, OptionProps>(
  ({ className, ...props }, ref) => {
    return <option ref={ref} className={cn(className)} {...props} />;
  }
);

Option.displayName = "Option";

export { Select, Option };
