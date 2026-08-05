declare module 'disqus-react' {
  import * as React from 'react';

  export interface DiscussionEmbedConfig {
    url?: string;
    identifier?: string;
    title?: string;
    language?: string;
    [key: string]: any;
  }

  export interface DiscussionEmbedProps {
    shortname: string;
    config: DiscussionEmbedConfig;
  }

  export interface CommentCountProps {
    shortname: string;
    config: DiscussionEmbedConfig;
    children?: React.ReactNode;
  }

  export class DiscussionEmbed extends React.Component<DiscussionEmbedProps> {}
  export class CommentCount extends React.Component<CommentCountProps> {}
  export class CommentEmbed extends React.Component<any> {}
  export class Recommendations extends React.Component<any> {}
}
