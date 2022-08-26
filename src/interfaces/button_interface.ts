export interface ButtonProps {
  text: string | number;
  onClick: () => void;
  type?: "primary" | "secondary";
  active?: boolean;
}
