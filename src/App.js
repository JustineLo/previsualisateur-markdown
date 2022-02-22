import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import './index.css';
import Modal from './Modal';
import { useGlobalContext } from './context';
import Flip from 'react-reveal/Flip';

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
      <footer>
        <Flip bottom>
          <h5>© 2022 - Crée avec ❤ par <a href="">Justine Lo</a></h5>
        </Flip>
      </footer>
    </main>


  )
}

export default App