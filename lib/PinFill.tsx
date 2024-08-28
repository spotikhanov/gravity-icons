import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const PinFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M10.5 2.255v-.01c.003-.03.013-.157-.361-.35C9.703 1.668 8.967 1.5 8 1.5s-1.703.169-2.138.394c-.375.194-.365.32-.362.351v.01c-.003.03-.013.157.362.35C6.297 2.832 7.033 3 8 3s1.703-.169 2.139-.394c.374-.194.364-.32.361-.351M12 2.25c0 .738-.433 1.294-1.136 1.669l.825 2.31c1.553.48 2.561 1.32 2.561 2.52 0 1.854-2.402 2.848-5.5 2.985V15a.75.75 0 0 1-1.5 0v-3.266c-3.098-.136-5.5-1.131-5.5-2.984 0-1.2 1.008-2.04 2.561-2.52l.825-2.311C4.433 3.544 4 2.988 4 2.25 4 .75 5.79 0 8 0s4 .75 4 2.25"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(PinFill);
export default ForwardRef;
