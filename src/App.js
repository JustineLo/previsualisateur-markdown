import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import './App.css';
import Modal from './Modal';
import { useGlobalContext } from './context';

function App() {
  const [markdown, setMarkdown] = useState('# Entrez votre texte ici...')
  const { openModal } = useGlobalContext();

  return (
    <main>

      <h1>PREVISUALISATEUR MARKDOWN</h1>

      <button onClick={openModal} className='btn'>
        Aide-mémoire
      </button>
      <Modal />
      <section className='markdown'>
        <textarea
          className='input'
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article className='result'>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>

    </main>
  )
}

export default App