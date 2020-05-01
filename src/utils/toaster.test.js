import { cleanup } from 'react-testing-library';
import * as Toaster from './toaster';

afterAll(cleanup);

describe('Toasted', () => {
  it('renders without crashing (success)', () => {
    expect(Toaster.errorToaster('body', 'title', 'link')).toBeTruthy();
  });

  it('renders without crashing (success)', () => {
    expect(Toaster.successToaster('body', 'title', 'link')).toBeTruthy();
  });
});
