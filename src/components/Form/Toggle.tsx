import React from 'react';
import * as ToggleGroup from '@radix-ui/react-toggle-group';

interface PropsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  day: string;
  value: string;
  active: boolean;
}

export function Toggle ({ day, value, active = false,...rest }: PropsButton ){
    return (
        <ToggleGroup.Item
            {...rest}
            value={value}
            type="button"
            className={`w-8 h-8 rounded ${active ? 'bg-violet-500' : ' bg-zinc-900'}`}
        >
            {day}
        </ToggleGroup.Item>
    );
}