import NavLink from './NavLinks';

interface HeaderLinksMobileProps {
  onLinkClick?: () => void; 
  hoverState?: string; 
}

export default function HeaderLinks({ onLinkClick, hoverState }: HeaderLinksMobileProps) {
    return (
        <div className='flex flex-col gap-3'>
            <NavLink hoverState={hoverState} href="/" onClick={onLinkClick}>Home</NavLink>
            <NavLink hoverState={hoverState} href="/about-solartuff" onClick={onLinkClick}>About Solartuff</NavLink>
            <NavLink hoverState={hoverState} href="/product-knowledge" onClick={onLinkClick}>Product Knowledge</NavLink>
            <NavLink hoverState={hoverState} href="/product-selection" onClick={onLinkClick}>Product Selection</NavLink>
            <NavLink hoverState={hoverState} href="/contact-us" onClick={onLinkClick}>Contact Us</NavLink>
        </div>
    );
};