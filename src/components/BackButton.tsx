import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Ideally be breadcrumbs etc, just for speed
export function BackButton() {
  const { pathname } = useLocation();
  const showBackButton = useMemo(() => {
    return pathname.split('/').filter(Boolean).length === 2;
  }, [pathname]);

  return showBackButton ? (
    <Link
      to="/pokemon"
      style={{
        fontFamily: 'Roboto, sans-serif',
        color: '#fff',
        fontSize: '1rem',
        marginRight: '1rem',
      }}
    >
      &lt; Back
    </Link>
  ) : null;
}
