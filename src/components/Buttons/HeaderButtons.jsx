import "./styles.css";
 
export function NavItem({ href = "#", active = false, children }) {
  return (
    <a
      href={href}
      className={`ui-control ui-nav-item${active ? " ui-nav-item--active" : ""}`}
      aria-current={active ? "page" : undefined}
    >
      {children}
    </a>
  );
}
 
/**
 * items: [{ label: string, href: string }]
 * activeIndex: which item is the current page
 */
export default function HeaderNav({ items, activeIndex = 0 }) {
  return (
    <nav aria-label="Main">
      <div className="ui-header-nav">
        {items.map((item, i) => (
          <NavItem key={item.href} href={item.href} active={i === activeIndex}>
            {item.label}
          </NavItem>
        ))}
      </div>
    </nav>
  );
}
 