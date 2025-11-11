import Banner from "./ui/Banner";
import Preferences from "./ui/Preferences";

interface AppProps {
  color?: string;
  policyUrl?: string;
  position?: "bottom-left" | "bottom-right" | "bottom-center";
}

export default function App({ color, policyUrl, position }: AppProps) {
  return (
    <>
      {/* Render only the banner and modal */}
      <Banner options={{ color, policyUrl, position }} />
      <Preferences />
    </>
  );
}
