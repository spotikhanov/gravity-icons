import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const LayersVertical = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="m5.283 13.211-2.02-4.037A2.5 2.5 0 0 1 3 8.056v-.112c0-.388.09-.77.264-1.118L5.283 2.79a.523.523 0 0 1 .934 0l2.02 4.037A2.5 2.5 0 0 1 8.5 7.944v.112c0 .388-.09.77-.264 1.118L6.217 13.21a.523.523 0 0 1-.934 0M5.75 15a2.02 2.02 0 0 1-1.809-1.118L1.922 9.845a4 4 0 0 1-.422-1.79v-.11a4 4 0 0 1 .422-1.79l2.019-4.037a2.023 2.023 0 0 1 3.618 0l.44.882.442-.882a2.023 2.023 0 0 1 3.618 0l2.019 4.037a4 4 0 0 1 .422 1.79v.11a4 4 0 0 1-.422 1.79l-2.02 4.037a2.022 2.022 0 0 1-3.617 0L8 13l-.441.882A2.02 2.02 0 0 1 5.75 15m3.088-3.677.945 1.888a.523.523 0 0 0 .934 0l2.019-4.037A2.5 2.5 0 0 0 13 8.056v-.112a2.5 2.5 0 0 0-.264-1.118L10.717 2.79a.523.523 0 0 0-.934 0l-.945 1.888.74 1.478A4 4 0 0 1 10 7.945v.11a4 4 0 0 1-.422 1.79z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(LayersVertical);
export default ForwardRef;
