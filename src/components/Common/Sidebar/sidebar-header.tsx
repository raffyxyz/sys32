import styles from "./index.module.css";

type Props = {
  text: string;
};

export default function SidebarHeader({ text }: Props) {
  return <h1 className={styles.sidebarHeader}>{text}</h1>;
}
