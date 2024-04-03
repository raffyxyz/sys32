import { FC, ReactNode } from "react";
import { cn } from "@/util/class";
import styles from "./index.module.css";

interface CardProps {
  children: ReactNode;
  className?: string;
}

interface CardActionProps extends CardProps {}
interface CardTitleProps extends CardProps {}

const Card: FC<CardProps> = ({ children, className }) => {
  return <div className={cn(styles.cardWrapper, className)}>{children}</div>;
};

const CardBody: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={cn(styles.cardBody)}>{children}</div>;
};

const CardTitle: FC<CardTitleProps> = ({ children, className }) => {
  return <h2 className={cn(styles.cardTitle, className)}>{children}</h2>;
};

const CardActions: FC<CardActionProps> = ({ children, className }) => {
  return <div className={cn(styles.cardActions, className)}>{children}</div>;
};

// TODO: This component still need improvements

export { Card, CardBody, CardTitle, CardActions };
