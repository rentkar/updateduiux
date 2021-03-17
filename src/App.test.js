import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Amplify from '@aws-amplify/core';
import Auth from '@aws-amplify/auth';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
