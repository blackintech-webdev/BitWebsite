import "./styles.css";
import Button from "./Button.jsx";

export function NavItem({ active = false, onClick, children }) {
  return (
    <button
      type="button"
      className={`ui-control ui-nav-item${active ? " ui-nav-item--active" : ""}`}
      aria-pressed={active}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

/**
 * items: [{ key: string, label: string }]
 * activeIndex: currently selected item
 * onChange: called with the clicked index
 * color:           "navy" | "white" | "blue"
 * activeVariant:   variant of the selected item
 * inactiveVariant: variant of the others
 */
export default function HeaderNav({
  items,
  activeIndex = 0,
  onChange,
  color = "navy",
  activeVariant = "filled",
  inactiveVariant = "text",
  ariaLabel,
}) {
  return (
    <div className="ui-header-nav" role="group" aria-label={ariaLabel}>
      {items.map((item, i) => {
        const active = i === activeIndex;
        return (
          <Button
            key={item.key}
            color={color}
            variant={active ? activeVariant : inactiveVariant}
            aria-pressed={active}
            onClick={() => onChange?.(i)}
          >
            {item.label}
          </Button>
        );
      })}
    </div>
  );
}
