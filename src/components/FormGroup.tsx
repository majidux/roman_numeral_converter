import { Form, Button } from 'react-bootstrap';
import { useStates, FormEvent, ChangeEvent } from '../utils';

interface FormGroupProps {
  onSubmit?: (value: string, event: FormEvent) => void;
  label?: string;
  buttonTitle?: string;
  className?: string;
  type?: 'text' | 'number';
}

export function FormGroup(props: FormGroupProps) {
  const {
    onSubmit,
    label,
    type,
    buttonTitle = 'Submit',
    className = '',
  } = props;
  const [state, setState] = useStates<any>({ value: '' });
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit?.(state.value, event);
  };
  return (
    <Form onSubmit={handleSubmit}>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control
        className={className}
        type={type}
        placeholder='type...'
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setState({ value: e.target.value })
        }
      />
      {buttonTitle && (
        <Button variant='primary' type='submit'>
          {buttonTitle}
        </Button>
      )}
    </Form>
  );
}
