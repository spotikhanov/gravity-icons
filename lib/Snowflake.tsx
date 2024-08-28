import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const Snowflake = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 16 16"
        ref={ref}
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M5.719 1.22a.75.75 0 0 1 1.06 0L8 2.44l1.22-1.22a.75.75 0 1 1 1.06 1.06L8.75 3.81V6.7l2.502-1.445.56-2.091a.75.75 0 1 1 1.45.388l-.447 1.667 1.667.447a.75.75 0 1 1-.388 1.449l-2.092-.56L9.5 7.998l2.502 1.445 2.092-.56a.75.75 0 0 1 .388 1.448l-1.667.447.447 1.667a.75.75 0 1 1-1.45.388l-.56-2.091L8.75 9.298v2.891l1.53 1.53a.75.75 0 0 1-1.062 1.06L8 13.561l-1.218 1.218a.75.75 0 1 1-1.061-1.06l1.529-1.53V9.3l-2.504 1.445-.56 2.089a.75.75 0 1 1-1.449-.389l.446-1.664-1.664-.446a.75.75 0 0 1 .388-1.449l2.09.56L6.5 7.999 3.996 6.553l-2.089.56a.75.75 0 1 1-.388-1.449l1.664-.446-.445-1.664a.75.75 0 0 1 1.448-.388l.56 2.088L7.25 6.7V3.81L5.719 2.28a.75.75 0 0 1 0-1.06"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(Snowflake);
export default ForwardRef;
