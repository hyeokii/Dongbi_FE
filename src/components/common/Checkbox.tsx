import React from 'react';

const Checkbox = ({
  isDisabled = true,
  isChecked = true,
  isSquare = false,
  onChange,
}: {
  isDisabled: boolean;
  isChecked: boolean;
  isSquare: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div>
      <label>
        <input
          id="checkbox"
          type="checkbox"
          value=""
          disabled={isDisabled}
          checked={isChecked}
          onChange={onChange}
          className={`w-4 h-4 bg-contain bg-no-repeat bg-square-check-no appearance-none disabled  checked:border-none !bg-no-repeat ${isSquare ? 'checked:bg-square-check-yes' : 'checked:bg-circle-check-yes'}`}
        />
      </label>
    </div>
  );
};

export default Checkbox;
