// StatusBadge.test.tsx

import React from 'react';
import { render } from '@testing-library/react';
//import '@testing-library/jest-dom/extend-expect';
import StatusBadge from './StatusBadge';

describe('StatusBadge Component', () => {
  it('renders with the correct title', () => {
    const title = 'Active';
    const { getByText } = render(<StatusBadge title={title} />);

    // Проверяем, что текст "Active" отображается внутри компонента Badge
    const badgeElement = getByText(title);
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveTextContent('Active');
  });

  it('has the correct styles applied', () => {
    const title = 'Active';
    const { getByText } = render(<StatusBadge title={title} />);

    const badgeElement = getByText(title);
    // Проверяем стили компонента
    expect(badgeElement).toHaveStyle(`
      cursor: pointer;
      background: green;
      border-radius: 1rem;
      padding: 0 0.5rem;
      width: fit-content;
    `);
  });
});
