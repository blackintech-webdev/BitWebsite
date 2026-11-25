import "./styles.css";

/**
 * color:   "navy" | "white" | "blue"
 * variant: "filled" | "outline" | "text"
 * Any other props (onClick, type, disabled...) go straight to the <button>.
 */
export default function Button({
  as: Tag = "button",
  color = "navy",
  variant = "filled",
  className = "",
  children,
  ...rest
}) {
  // Default tag is button, set tag type to {Link} if using Link component to redirect to another page. 
  const props = Tag === "button" ? { type: "button", ...rest } : rest;
  return (
    <Tag
      className={`ui-control ui-btn ui-btn--${color} ui-btn--${variant} ${className}`.trim()}
      {...props}
    >
      {children}
    </Tag>
  );
}
