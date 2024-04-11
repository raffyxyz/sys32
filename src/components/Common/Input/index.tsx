import * as React from "react";
import { cn } from "@/util/class";
import styles from "./index.module.css";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon, ...props }, ref) => {
    return (
      <label className={styles.textInput}>
        <input
          ref={ref}
          className={cn(className, "grow")}
          type="text"
          {...props}
        />
        {icon}
      </label>
    );
  }
);

Input.displayName = "Input";

export { Input };
