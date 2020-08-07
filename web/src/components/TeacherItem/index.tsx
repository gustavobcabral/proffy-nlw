import React from 'react'


import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/59445844?s=460&u=e19fca93a14d721852ca6900c26d57f540ce88d3&v=4" alt="Gustavo Cabral" />
        <div>
          <strong>Gustavo Cabral</strong>
          <span>Mecánica</span>
        </div>
      </header>
      <p>
        Lorem Ipsum is simply dummy text of the printing
      <br /><br />
  and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <footer>
        <p>
          Preço/Hora
          <strong>R$: 100,00 </strong>
        </p>
        <button>
          <img src={whatsappIcon} alt="Whatsapp" />
             Entrar em contato
        </button>
      </footer>
    </article>
  )
}
export default TeacherItem