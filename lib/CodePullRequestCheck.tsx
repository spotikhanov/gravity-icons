import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const CodePullRequestCheck = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M5.967 6.399a2.77 2.77 0 0 0 .88-1.24v-.002L8.22 6.53a.75.75 0 0 0 1.06-1.06L8.81 5h.69q.118 0 .232.018A1.5 1.5 0 0 1 11 6.5v1.75a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3h-.69l.47-.47a.75.75 0 0 0-1.06-1.06L6.847 3.343A2.755 2.755 0 0 0 4.25 1.5a2.75 2.75 0 0 0-.75 5.396v2.208a2.751 2.751 0 1 0 1.5 0V6.896c.357-.1.685-.272.967-.497m4.063 4.07a.75.75 0 1 0-1.06 1.061l2 2a.75.75 0 0 0 1.13-.08l3-4a.75.75 0 0 0-1.2-.9l-2.481 3.308zm-6.842.622A1.25 1.25 0 0 0 3 11.75a1.25 1.25 0 1 0 .188-.659m1.6-7.97a1.25 1.25 0 1 1-1.076 2.257 1.25 1.25 0 0 1 1.076-2.257"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(CodePullRequestCheck);
export default ForwardRef;
