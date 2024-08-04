import { Global } from "@emotion/react";

import globalStyle from "../../styles/globalStyles";
import { EmotionForm } from "../forms/EmotionForm";

function Emotion() {
  return (
    <>
      <Global styles={globalStyle} />
      <EmotionForm />
    </>
  );
}
export default Emotion;
