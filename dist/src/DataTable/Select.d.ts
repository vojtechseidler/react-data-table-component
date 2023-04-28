import * as React from 'react';
declare type SelectProps = {
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    defaultValue?: string | number;
    value?: string | number;
    children: React.ReactNode;
};
declare const Select: ({ defaultValue, value, onChange, ...rest }: SelectProps) => JSX.Element;
export default Select;
