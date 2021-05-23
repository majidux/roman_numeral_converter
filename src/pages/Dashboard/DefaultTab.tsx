import { FormGroup, RomanNumerals, useStates } from '../../utils';

interface StateTypes {
  result?: string | number;
}

export function DefaultTab() {
  const [state, setState] = useStates<StateTypes>({ result: '' });
  const handleSubmit = (value: string) => {
    const result = RomanNumerals.toRoman({ num: parseInt(value) });
    setState({ result });
  };
  return (
    <>
      <FormGroup
        label='Enter the number you want to convert'
        buttonTitle='Convert'
        type='number'
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
