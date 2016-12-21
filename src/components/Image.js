import React from 'react';
import { Entity } from 'draft-js';

export default function Link(props) {
  const { src } = Entity.get(props.entityKey).getData();
  return (
    <img src={src} className="drafjs-re_image"></img>
  );
}
