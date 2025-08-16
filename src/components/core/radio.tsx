"use client";
import * as React from "react";

interface RadioProps {
  id?: string;
  name?: string;
  value?: string;
  checked?: boolean;
  label?: string;
  description?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ 
    id, 
    name, 
    value, 
    checked = false, 
    label, 
    description, 
    onChange, 
    disabled = false,
    className = "",
    ...props 
  }, ref) => {
    const radioId = id || `radio-${React.useId()}`;

    return (
      <div className={`flex items-center gap-3 p-2 rounded-lg border-2 border-card-border shadow-elev-300 ${className}`}>
        <input
          ref={ref}
          type="radio"
          id={radioId}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className={`
            w-4 h-4 flex-shrink-0 cursor-pointer accent-slate-900
            ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
          `}
          {...props}
        />
        
        {(label || description) && (
          <div className="flex flex-col gap-1 flex-1">
            {label && (
              <label
                htmlFor={radioId}
                className={`
                  text-base font-medium text-zinc-800 tracking-[-0.32px] cursor-pointer
                  font-['Work_Sans']
                  ${disabled ? 'text-gray-400' : ''}
                `}
              >
                {label}
              </label>
            )}
            {description && (
              <p className={`
                text-[13px] font-normal text-gray-600 tracking-[-0.26px]
                font-['Work_Sans']
                ${disabled ? 'text-gray-400' : ''}
              `}>
                {description}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
);

Radio.displayName = "Radio";

export default Radio;
