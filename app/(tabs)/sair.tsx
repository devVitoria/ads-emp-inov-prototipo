import { useRouter } from "expo-router";
import { useEffect } from "react";

export function Sair() {
  const router = useRouter();
  useEffect(() => {
    router.push("/logo");
  }, [router]);
  return <></>;
}
