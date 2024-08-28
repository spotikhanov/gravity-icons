import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const FontCase = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
                d="M4.75 2.25c-.618 0-1.169.39-1.373.974L.042 12.752a.75.75 0 0 0 1.416.496L2.595 10h4.31l1.137 3.248a.75.75 0 0 0 1.416-.496L6.123 3.224A1.455 1.455 0 0 0 4.75 2.25M6.38 8.5 4.75 3.842 3.12 8.5zm5.135 2.996c0-.223.28-.746 1.152-.746H14.4c-.294 1.024-1.178 1.5-1.9 1.5-.45 0-.677-.134-.792-.249a.7.7 0 0 1-.193-.505m2.985.754V13a.75.75 0 1 0 1.5 0v-3c0-1.117-.28-2.065-.873-2.744-.606-.692-1.453-1.006-2.377-1.006-.53 0-.946.07-1.306.195-.338.117-.6.274-.804.396l-.025.015a.75.75 0 1 0 .77 1.288c.22-.132.365-.217.55-.281.178-.062.423-.113.815-.113.576 0 .978.186 1.248.494.191.218.354.543.44 1.006h-1.771c-1.462 0-2.658.977-2.652 2.254.003.542.191 1.116.632 1.557.447.448 1.085.689 1.853.689 1 0 1.75-.75 1.75-1.5z"
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
const ForwardRef = forwardRef(FontCase);
export default ForwardRef;
