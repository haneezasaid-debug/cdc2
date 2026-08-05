import React, { Component, ReactNode } from 'react';
import { DiscussionEmbed } from 'disqus-react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class DisqusErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.warn('Disqus embed encountered an error:', error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

export const DisqusForum: React.FC = () => {
  return (
    <DisqusErrorBoundary>
      <div style={{ marginTop: '2rem' }}>
        <DiscussionEmbed
          shortname='cdc2-haneeza'
          config={{
            url: typeof window !== 'undefined' ? window.location.href : '',
            identifier: 'community-discussion',
            title: 'Community Discussion',
            language: 'en'
          }}
        />
      </div>
    </DisqusErrorBoundary>
  );
};

export default DisqusForum;

