import { ScrollLink } from 'react-scroll';

interface NextUILinkProps {
  to: string;
  smooth?: boolean;
  duration?: number;
  className?: string;
  color?: string;
  children: React.ReactNode;
}

const NextUILink: React.FC<NextUILinkProps> = ({ to, smooth = true, duration = 500, className = '', color = 'foreground', children }) => {
  if (to) {
  return (
    <ScrollLink
      to={to.replace('#', '')}
      smooth={smooth}
      duration={duration}
      className={className}
      activeClass="active" // Add an active class if needed
      spy={true} // Enables scrolling effect when navigating to an element
      offset={-80} // Adjust offset if needed to account for fixed navbar height
      >
      <a>{children}</a>
    </ScrollLink>
  );
} else {
  // Render a regular anchor element if to prop is not provided
    return <a className={className}>{children}</a>;
  }
};

export default NextUILink;
