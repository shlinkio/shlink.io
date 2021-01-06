import React, { FC } from 'react';
import './InlineVideo.scss';

interface InlineVideoProps {
  poster?: string;
  sources: string[];
}

const sourceToType = (source: string) => {
  const extension = source.split('.').slice(-1).pop();

  return `video/${extension}`;
};

export const InlineVideo: FC<InlineVideoProps> = ({ poster, sources }) => (
  <video poster={poster} className="inline-video" autoPlay loop muted playsInline>
    {sources.map((source) => <source key={source} src={source} type={sourceToType(source)} />)}
  </video>
);
