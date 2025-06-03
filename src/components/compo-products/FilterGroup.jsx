import React from 'react';

const FilterGroup = ({ title, inputType = 'checkbox', options = [], name, onChange, selectedValues = [] }) => {
  return (
    <div>
      <h3 className="text-xs font-semibold text-dark-gray-2 mb-2">{title}</h3>
      <div className="flex flex-col gap-2">
        {options.map((option) => {
          const id = `${name}-${option.value}`;
          const isChecked = selectedValues.includes(option.value);

          return (
            <label key={id} htmlFor={id} className="flex items-center gap-2 text-sm text-dark-gray-2 cursor-pointer">
              <input
                type={inputType}
                id={id}
                name={name}
                value={option.value}
                checked={isChecked}
                onChange={onChange}
                className="w-[16px] h-[16px] accent-primary"
              />
              {option.label}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default FilterGroup;
