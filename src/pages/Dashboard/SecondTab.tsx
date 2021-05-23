import { FormGroup, RomanNumerals, useStates } from '../../utils';

export function SecondTab() {
  const [state, setState] = useStates({ result: '' });
  const handleSubmit = (value: string) => {
    const result = RomanNumerals.fromRoman({ num: value });
    setState({ result });
  };
  return (
    <>
      <FormGroup
        label='Enter the number you want to convert'
        buttonTitle='Convert'
        type='text'
        onSubmit={handleSubmit}
        className='my-3'
      />
      {state.result && (
        <div className='dashboard_result-container p-2 d-flex flex-column'>
          <span className='text-center badge bg-success align-self-center'>
            Result
          </span>
          <span className='dashboard_result-text'>{state.result}</span>
        </div>
      )}
    </>
  );
}
