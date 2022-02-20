import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Modal = () => {
    const { isModalOpen, closeModal } = useGlobalContext();
    return (
        <div
            className={`${isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
                }`}
        >
            <div className='modal-container'>
                <h4> Aide-mémoire</h4>
                <table>
                    <tr>
                        <td>
                            <div class="titre">Titres</div>
                            <div class="mk">
                                # H1<br />
                                ## H2<br />
                                ### H3
                            </div></td>

                        <td>
                            <div class="titre">Liste ordonnée</div>
                            <div class="mk">  1. Premier élément<br />
                                2. Deuxième élément<br />
                                3. Troisième élément</div></td>

                    </tr>
                    <tr>
                        <td><div class="mk">
                            --- diviseur <br />>
                            ** Texte gras **<br />
                            * Texte italique *<br />
                            &gt; Citation <br />
                            `Code`<br />
                            [texte du lien](https://www.example.com)<br />
                            ![alt text](image.jpg)<br />
                        </div></td>



                        <td>
                            <div class="titre">Liste désordonnée</div>
                            <div class="mk">  - Premier élément<br />
                                - Deuxième élément<br />
                                - Troisième élément</div></td>

                    </tr>
                </table>

                <button className='close-modal-btn' onClick={closeModal}>
                    <FaTimes></FaTimes>
                </button>
            </div>
        </div>
    );
};

export default Modal;