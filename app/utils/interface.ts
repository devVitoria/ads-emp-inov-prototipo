import { ReactNode } from "react";

export interface PageComponentProps {
  title: string;
  subtitle: string;
  children?: ReactNode;
}

export interface PermissionModalProps {
  visible: boolean;
  onAllow: () => void;
  onDeny: () => void;
}

export interface FaceVerificationModalProps {
  visible: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  setVerified: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface PaymentMethodModalProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: (method: "DINHEIRO" | "CARTÃO" | "PIX", amount?: string) => void;
}
