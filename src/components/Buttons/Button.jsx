import "./styles.css";
 
/**
 * color:   "navy" | "white" | "blue"
 * variant: "filled" | "outline" | "text"
 * Any other props (onClick, type, disabled...) go straight to the <button>.
 */
export default function Button({
  color = "navy",
  variant = "filled",
  children,
  ...rest
}) {
  return (
    <button
      type="button"
      className={`ui-control ui-btn ui-btn--${color} ui-btn--${variant}`}
      {...rest}
    >
      {children}
    </button>
  );
}
 