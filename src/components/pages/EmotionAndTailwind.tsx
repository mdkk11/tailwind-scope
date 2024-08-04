import { Global } from "@emotion/react";

import globalStyle from "../../styles/globalStyles";
import "../../styles/tailwind.css";
import { EmotionForm } from "../forms/EmotionForm";
import { TailwindForm } from "../forms/TailwindForm";
import { TailwindWrapper } from "../TailwindWrapper";

function EmotionAndTailwind() {
  return (
    <>
      <Global styles={globalStyle} />
      <EmotionForm />
      <TailwindWrapper>
        <TailwindForm />
      </TailwindWrapper>
    </>
  );
}

export default EmotionAndTailwind;
