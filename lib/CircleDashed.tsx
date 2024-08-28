import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const CircleDashed = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M6.906 1.085a7 7 0 0 1 2.188 0 .75.75 0 0 1-.232 1.482 5.6 5.6 0 0 0-1.724 0 .75.75 0 0 1-.232-1.482M4.933 2.502a.75.75 0 0 1-.166 1.048c-.466.34-.878.75-1.217 1.217a.75.75 0 0 1-1.213-.882 7 7 0 0 1 1.548-1.548.75.75 0 0 1 1.048.165m6.135 0a.75.75 0 0 1 1.047-.165 7 7 0 0 1 1.548 1.548.75.75 0 0 1-1.213.882 5.5 5.5 0 0 0-1.217-1.217.75.75 0 0 1-.165-1.048M1.943 6.28a.75.75 0 0 1 .624.857 5.6 5.6 0 0 0 0 1.724.75.75 0 0 1-1.482.232 7 7 0 0 1 0-2.188.75.75 0 0 1 .858-.625m12.115 0a.75.75 0 0 1 .857.625 7 7 0 0 1 0 2.188.75.75 0 1 1-1.482-.232 5.5 5.5 0 0 0 0-1.724.75.75 0 0 1 .624-.857M2.502 11.068a.75.75 0 0 1 1.048.165c.34.466.75.878 1.217 1.217a.75.75 0 0 1-.882 1.213 7 7 0 0 1-1.548-1.548.75.75 0 0 1 .165-1.047m10.996 0a.75.75 0 0 1 .165 1.047 7 7 0 0 1-1.548 1.548.75.75 0 0 1-.883-1.213 5.5 5.5 0 0 0 1.218-1.217.75.75 0 0 1 1.048-.165m-7.217 2.99a.75.75 0 0 1 .857-.625 5.5 5.5 0 0 0 1.724 0 .75.75 0 0 1 .232 1.482 7 7 0 0 1-2.188 0 .75.75 0 0 1-.625-.857"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(CircleDashed);
export default ForwardRef;
