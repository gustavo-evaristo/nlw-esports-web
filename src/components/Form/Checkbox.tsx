import React from 'react';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

export function Checkbox ({ ...rest }: RadixCheckbox.CheckboxProps) {
    return (
        <RadixCheckbox.Root {...rest}  className="w-6 h-6 p-1 rounded-md bg-zinc-900">
            <RadixCheckbox.Indicator className="">
                <Check className="text-emerald-400 w-4 h-4"/>
            </RadixCheckbox.Indicator>
        </RadixCheckbox.Root>
    );
}