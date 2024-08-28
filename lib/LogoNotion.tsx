import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const LogoNotion = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M4 2.5h4.98a2.5 2.5 0 0 1 1.66.631l.977.869h-5.93a1.5 1.5 0 0 1-1.069-.443l-.092-.091-.915-.915Q3.798 2.5 4 2.5M2.55 3.611q-.049.187-.05.389v4.98a2.5 2.5 0 0 0 .631 1.66l.869.977v-5.8a1.83 1.83 0 0 0-.535-1.291zM7 5.5A1.5 1.5 0 0 0 5.5 7v5A1.5 1.5 0 0 0 7 13.5h5a1.5 1.5 0 0 0 1.5-1.5V7A1.5 1.5 0 0 0 12 5.5zM7 15h-.653a3 3 0 0 1-2.242-1.007L2.01 11.637A4 4 0 0 1 1 8.979V4a3 3 0 0 1 3-3h4.98a4 4 0 0 1 2.657 1.01l2.356 2.095A3 3 0 0 1 15 6.347V12a3 3 0 0 1-3 3zm.75-3a.75.75 0 0 1-.75-.75V8.08a1.08 1.08 0 0 1 1.96-.627l1.54 2.16V7.75a.75.75 0 0 1 1.5 0v3.168a1.082 1.082 0 0 1-1.963.628L8.5 9.392v1.858a.75.75 0 0 1-.75.75"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(LogoNotion);
export default ForwardRef;
