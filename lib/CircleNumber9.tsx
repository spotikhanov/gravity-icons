import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const CircleNumber9 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 16 16"
        ref={ref}
        {...props}
    >
        <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
            <path d="M8 13.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14" />
            <path d="M9.491 8.81a5.3 5.3 0 0 1-1.527.289c-.623.025-1.319-.059-1.9-.37-.62-.334-1.085-.921-1.144-1.767C4.822 5.56 6.151 4.621 7.756 4.51c.883-.062 1.704.17 2.315.79.594.601.892 1.47.963 2.49.072 1.03-.124 1.932-.635 2.606-.523.688-1.295 1.037-2.155 1.097-1.167.08-1.81-.183-2.37-.416a.75.75 0 1 1 .575-1.385l.012.005c.467.194.857.356 1.678.3.512-.037.85-.225 1.065-.508.122-.16.226-.382.287-.678m-.334-1.48a1.7 1.7 0 0 0 .273-.144c-.102-.397-.258-.663-.427-.834-.237-.24-.592-.386-1.142-.347-1.262.088-1.456.689-1.444.853a.61.61 0 0 0 .357.549c.258.138.655.212 1.128.193a3.7 3.7 0 0 0 1.255-.27" />
        </g>
    </svg>
);
const ForwardRef = forwardRef(CircleNumber9);
export default ForwardRef;
