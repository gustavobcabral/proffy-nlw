import React from "react"
import { Link } from 'react-router-dom'

import logoImg from "../../assets/images/logo.svg"
import backIcon from "../../assets/images/icons/back.svg"

import './styles.css'

// INTERFACE define o tipos de typagem de um obj

// ? mostra que não é obrigátorio
interface PageHeaderProps {
  title: string;
  description?: string
}
// Meu PageHeader é um FUNCTION COMPONENT dentro do react e as propiedades está dentro do < >
const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <header className="page-header" >
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="Proffy" />
      </div>

      <div className="header-content">
        <strong>{props.title}</strong>
        {/* Condição... se a primeira parte for vederdaira execulta a segunda dps do && */}
        {props.description && <p>{props.description}</p>}

        {props.children}

      </div>
    </header >
  )
}
export default PageHeader