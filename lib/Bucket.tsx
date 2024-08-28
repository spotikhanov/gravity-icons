import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const Bucket = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M11.615 4.888c.814-.375.885-.714.885-.888s-.071-.513-.885-.888S9.538 2.5 8 2.5s-2.799.237-3.615.612C3.57 3.487 3.5 3.826 3.5 4s.071.513.885.888S6.462 5.5 8 5.5s2.799-.237 3.615-.612M8 7c1.688 0 3.213-.26 4.304-.779a13 13 0 0 1-.085.431l-1.18 5.51a1 1 0 0 1-.039.094 1.5 1.5 0 0 1-.31.433c-.306.306-1.03.811-2.69.811s-2.384-.505-2.69-.81a1.5 1.5 0 0 1-.31-.434 1 1 0 0 1-.038-.095l-.022-.1q.163-.025.33-.063c1.518-.331 3.284-1.253 5.221-2.931a.75.75 0 1 0-.982-1.134c-1.813 1.572-3.36 2.338-4.56 2.6q-.166.036-.324.06l-.844-3.94q-.046-.215-.085-.432C4.786 6.741 6.312 7 8 7m-4.93 3.496-.697-3.254c-.28.426-.434.846-.49 1.227-.107.72.13 1.323.592 1.7.158.13.356.244.596.327M2.062 5.314Q2.001 4.66 2 4c0-2 2.686-3 6-3s6 1 6 3c0 .997-.105 1.992-.314 2.967L12.5 12.5S12 15 8 15s-4.5-2.5-4.5-2.5l-.084-.394c-.736-.091-1.378-.356-1.89-.775C.611 10.583.223 9.435.398 8.25c.15-1.02.708-2.049 1.662-2.936"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(Bucket);
export default ForwardRef;
