import { ReactNode } from "react";
import SessionWrapper from "../session-wrapper";

export default function Layout({ children }: { children: ReactNode }) {
  return <SessionWrapper>{children}</SessionWrapper>;
}
