import React from 'react';

interface InputRadioUserTypeProps {
  id: string;
  label: string;
}

export const InputRadioUserType: React.FC<InputRadioUserTypeProps> = ({
  id,
  label,
}) => {
  return (
    <label
      htmlFor={id}
      className='cursor-pointer rounded-xl border bg-white py-3 pl-4'
    >
      <input type='radio' id={id} name='choice' className='accent-bright-red' />{' '}
      <span className='pl-2'>{label}</span>
    </label>
  );
};
