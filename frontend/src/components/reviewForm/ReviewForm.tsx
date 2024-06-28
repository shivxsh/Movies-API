import { Form, Button } from 'react-bootstrap';
import { FormEvent, MutableRefObject } from 'react';

interface ReviewFormProps {
  handleSubmit: (event: FormEvent<HTMLButtonElement>) => void;
  revText: MutableRefObject<HTMLTextAreaElement | null>;
  labelText: string;
  defaultValue?: string;
}

const ReviewForm = ({ handleSubmit, revText, labelText, defaultValue }: ReviewFormProps) => {
  return (
    <Form>
      <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
        <Form.Label>{labelText}</Form.Label>
        <Form.Control ref={revText} as="textarea" rows={3} defaultValue={defaultValue} />
      </Form.Group>
      <Button variant='outline-info' onClick={handleSubmit}>Submit</Button>
    </Form>
  );
}

export default ReviewForm;
