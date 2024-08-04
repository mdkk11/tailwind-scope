import { css } from "@emotion/react";

const styles = {
  formContainer: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  `,
  input: css`
    margin: 12px 0;
    padding: 8px;
    border-radius: 2px;
    width: 100%;
    max-width: 240px;
  `,
  button: css`
    padding: 8px 16px;
    color: white;
    border-radius: 6px;
    cursor: pointer;

    background-color: #3498db;
    color: white;
    cursor: pointer;
  `,
};

export const EmotionForm = () => {
  return (
    <div css={styles.formContainer}>
      <h3>Emotion Form</h3>
      <input css={styles.input} type="text" placeholder="Your Name" />
      <input css={styles.input} type="email" placeholder="Your Email" />
      <button css={styles.button} type="submit">
        Submit
      </button>
    </div>
  );
};
