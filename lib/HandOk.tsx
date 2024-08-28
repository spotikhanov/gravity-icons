import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const HandOk = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 16 16"
        ref={ref}
        {...props}
    >
        <g clipPath="url(#a)">
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M6.5 6.963a1.186 1.186 0 0 0-1.652-1.09 1.2 1.2 0 0 0-.271.165l-.207.166-.081.065-.02.016a.578.578 0 0 1-.776-.848l.068-.078.247-.282.158-.18.028-.033c.178-.203.38-.366.596-.49 1.175-.677 2.777-.206 3.323 1.16l.174.435.375.937L8.5 7h1l.038-.415.076-.839.268-2.948.07-.775.005-.048A.523.523 0 0 1 11 2.023V7h1l.5-1.75.161-.565.22-.769.013-.046a.51.51 0 0 1 .993.235l-.01.046-.147.787-.455 2.426-.108.579L12.5 11.5l-3.302.284-2.728.181-.68-.189a4.43 4.43 0 0 1-3.2-3.643.554.554 0 0 1 .549-.633h.133c.14 0 .27.076.34.2l.102.185.045.08.253.454.128.23a1.258 1.258 0 0 0 2.36-.612zM1.105 8.345a2.05 2.05 0 0 1 .826-1.953 2.07 2.07 0 0 1 .433-1.943l.5-.572C4.34 2.192 6.799 2.19 8.309 3.542l.155-1.702a2.023 2.023 0 0 1 4.037.183v.182a2.01 2.01 0 0 1 2.861 2.176l-1.387 7.396a1.5 1.5 0 0 1-1.346 1.218l-3.302.283-.028.002-2.728.182a1.5 1.5 0 0 1-.502-.051l-.68-.19a5.93 5.93 0 0 1-4.283-4.876m12.198 7.153a.75.75 0 0 0-.107-1.496l-7 .5a.75.75 0 1 0 .107 1.496z"
                clipRule="evenodd"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
        </defs>
    </svg>
);
const ForwardRef = forwardRef(HandOk);
export default ForwardRef;
