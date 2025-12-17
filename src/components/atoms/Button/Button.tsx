import type {ButtonProps} from "./ButtonProps.ts";

/**
 * Button Component
 *
 * This is a simple reusable button component built using React.
 * It renders a button element with predefined classes for styling.
 *
 * @component
 * @returns {JSX.Element} A button element with predefined styles and text.
 */
const Button = (props:ButtonProps) => {
    return (
        <>
            {/* Button element with predefined classes for styling */}
            <button
                name="button"
                className={props.className}>
                {props.buttonText}
            </button>
        </>
    );
};

export default Button;
