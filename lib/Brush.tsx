import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const Brush = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M8.922 9.842q.077.425.078.896c0 1.907-1.387 3.66-3.79 3.894a4.78 4.78 0 0 1-4.208-1.774 2 2 0 0 1-.21-.333c-.231-.461-.292-1-.292-1.528.312.047.599.045.852 0 .635-.112 1.061-.487 1.148-1C2.73 8.637 3.572 7 5.76 7q.224 0 .435.028l3.417-4.784a2.971 2.971 0 1 1 4.145 4.145zm-.56-1.444 2.819-2.013A2.7 2.7 0 0 0 9.615 4.82L7.626 7.605q.43.324.737.793m4.066-2.904.457-.326a1.471 1.471 0 1 0-2.052-2.052l-.326.457a4.2 4.2 0 0 1 1.921 1.921M3.98 10.247c.086-.507.272-.962.54-1.264.225-.254.572-.483 1.242-.483.517 0 .913.197 1.198.523.297.34.541.906.541 1.715 0 1.121-.786 2.24-2.435 2.4a3.3 3.3 0 0 1-2.63-.922c.76-.337 1.374-.965 1.544-1.969"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(Brush);
export default ForwardRef;
