import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/util/class";
import styles from "./index.module.css";

const cardVariants = cva(styles.cardWrapper, {
  variants: {
    variant: {
      default: styles["default"],
      primary: styles["primary"],
    },
    shadow: {
      default: styles["shadowSm"],
      xl: styles["shadowXl"],
    },
  },
  defaultVariants: {
    variant: "default",
    shadow: "default",
  },
});

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, shadow, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, shadow, className }))}
      {...props}
    />
  )
);
Card.displayName = "Card";

const CardBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(styles.cardBody, className)} {...props} />
));
CardBody.displayName = "CardBody";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2 ref={ref} className={cn(styles.cardTitle, className)} {...props} />
));
CardTitle.displayName = "CardTitle";

const CardActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(styles.cardActions, className)} {...props} />
));
CardActions.displayName = "CardActions";

export { Card, CardBody, CardTitle, CardActions };
