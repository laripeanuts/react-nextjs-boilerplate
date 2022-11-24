import { Roboto } from "@next/font/google";
import { Main } from "components/Main";

const customFont = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return (
    <div className={customFont.className}>
      <Main />
    </div>
  );
}
