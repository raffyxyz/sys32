import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/util/class";
import styles from "./index.module.css";

const buttonVariants = cva(styles.wrapper, {
  variants: {
    variant: {
      default: "",
      primary: styles["primary"],
      neutral: styles["neutral"],
      secondary: styles["secondary"],
      accent: styles["accent"],
      ghost: styles["ghost"],
      link: styles["link"],
      info: styles["info"],
      success: styles["success"],
      warning: styles["warning"],
      error: styles["error"],
    },
    active: {
      false: "",
      true: styles["active"],
    },
    size: {
      default: "",
      lg: styles["lg"],
      sm: styles["sm"],
      xs: styles["xs"],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    active: false,
  },
});

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, size, active, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, active, className }))}
      {...props}
    >
      {children}
    </button>
  )
);
Button.displayName = "Button";

export { Button, buttonVariants };
