// import React from 'react';
// import { render, fireEvent, waitFor } from '@testing-library/react';
// import { HoverableDiv } from './hoverable.compositions';

// describe('div', () => {
//   it('should be styled differently on mouseover ', async () => {
//     const { getByTestId } = render(<HoverableDiv />);
//     const div = getByTestId('hoverable');
//     const divBgSnapshot = div.style.background;
//     fireEvent.mouseOver(div);
//     await waitFor(() =>
//       expect(div.style.background).not.toEqual(divBgSnapshot)
//     );
//   });
// });
