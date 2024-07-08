import React from 'react';

const Checkbox = ({
  isDisabled = true,
  isChecked = true,
  onChange,
}: {
  isDisabled: boolean;
  isChecked: boolean;
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
          className="w-4 h-4  rounded-full appearance-none border disabled border-black bg-cover checked:bg-circle-check checked:border-none "
        />
      </label>
    </div>
  );
};

export default Checkbox;
