import React from 'react';
import { DiscussionEmbed } from 'disqus-react';

export const DisqusForum: React.FC = () => {
  return (
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
  );
};

export default DisqusForum;
