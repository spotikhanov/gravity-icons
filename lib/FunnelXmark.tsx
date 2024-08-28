import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const FunnelXmark = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M10.615 4.888c.814-.375.885-.714.885-.888s-.071-.513-.885-.888S8.538 2.5 7 2.5s-2.799.237-3.615.612C2.57 3.487 2.5 3.826 2.5 4s.071.513.885.888S5.462 5.5 7 5.5s2.799-.237 3.615-.612M7 7c1.114 0 2.158-.113 3.052-.34l-1.98 2.905c-.21.308-.322.672-.322 1.044V13a.86.86 0 0 1-.3.684c-.201.175-.528.316-.95.316a1.3 1.3 0 0 1-.25-.02v-3.37c0-.373-.112-.737-.322-1.045L3.948 6.66C4.842 6.887 5.886 7 7 7m6-3c0-2-2.686-3-6-3S1 2 1 4c0 .652.196 1.288.563 1.826L4.69 10.41q.06.09.061.2v3.89s.25 1 1.75 1 2.75-1 2.75-2.5v-2.39q0-.11.061-.2l3.126-4.584A3.24 3.24 0 0 0 13 4m-6.88 9.936q-.015-.008-.013-.01zm7.13-2.247-1.22-1.22a.75.75 0 1 0-1.06 1.061l1.22 1.22-1.22 1.22a.75.75 0 1 0 1.06 1.06l1.22-1.22 1.22 1.22a.75.75 0 1 0 1.06-1.06l-1.22-1.22 1.22-1.22a.75.75 0 1 0-1.06-1.06z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(FunnelXmark);
export default ForwardRef;
