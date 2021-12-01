import React, { useState } from 'react';

import Preview from '../../components/Preview/Preview';
import Editor from '../../components/Editor/Editor';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text

  const [title, setTitle] = useState('Blog Title');
  const [subtitle, setSubtitle] = useState('Subtitle');
  const [font, setFont] = useState('roboto-mono');
  const [align, setAlign] = useState('');

  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview {...{ title, subtitle, font, align }} />
      <Editor {...{ setTitle, setSubtitle, font, setFont, align, setAlign }} />
    </main>
  );
}
