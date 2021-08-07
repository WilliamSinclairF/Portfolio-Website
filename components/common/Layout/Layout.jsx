import { LayoutContainer, LayoutWrapper } from './LayoutStyles';

export default function Layout({ children, ...props }) {
  return (
    <LayoutContainer {...props}>
      <LayoutWrapper {...props}>{children}</LayoutWrapper>
    </LayoutContainer>
  );
}
