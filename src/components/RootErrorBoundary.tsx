import React from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean
}

export default class RootErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false
  };

  static getDerivedStateFromError(error:Error):State {
    // Update state so the next render will show the fallback UI.
    console.error(error);
    return { hasError: true };
  }

  render(): React.ReactNode | JSX.Element {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return children;
  }
}
