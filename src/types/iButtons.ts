import { ReactNode } from "react";

export interface ButtonProps {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onCLick?: () => void;
}