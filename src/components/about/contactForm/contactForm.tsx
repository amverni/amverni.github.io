import * as React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useStyles } from './contactForm.styles';

export const ContactForm: React.FC = () => {
  const styles = useStyles();
  const [state, handleSubmit] = useForm('xrgjqrew');
  const isFormDisabled = state.succeeded;
  const hasEmailError = !!state.errors?.getFieldErrors('email');

  const actionOrInfoContent = (
    state.succeeded ? <p className={styles.successMessage}>Message sent</p>
      : (
        <>
          {hasEmailError && <ValidationError prefix="Email" field="email" errors={state.errors} className={styles.errorMessage} />}
          <Button variant="contained" type="submit" disabled={state.submitting} className={styles.submit}>Send Message</Button>
        </>
      )
  );

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <TextField
        label="Name"
        name="name"
        required
        disabled={isFormDisabled}
        className={styles.name}
        color="info"
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        error={hasEmailError}
        required
        disabled={isFormDisabled}
        className={styles.email}
        color="info"
      />
      <TextField
        label="Subject"
        name="subject"
        required
        disabled={isFormDisabled}
        className={styles.subject}
        color="info"
      />
      <TextField
        label="Message"
        name="message"
        multiline
        minRows={3}
        required
        disabled={isFormDisabled}
        className={styles.message}
        color="info"
      />
      <div className={styles.actionOrInfoContainer}>{actionOrInfoContent}</div>
    </form>
  );
};
