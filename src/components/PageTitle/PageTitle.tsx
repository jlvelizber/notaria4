import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


interface PageTitleInterface {
    title: string;
    background?:string
}

const PageTitle: FC<PageTitleInterface> = ({title, background}) => {
  return (
      <section className="page-title" style={{backgroundImage: `url(${background})`}}>
          <div className="container">
              <div className="content">
                  <h1>{title}</h1>
                  <ul className="page-breadcrumb">
                      <li>
                          <Link to={'/'}>
                            Inicio
                            <FontAwesomeIcon className='ml-1' icon={faChevronRight} />
                          </Link>
                      </li>
                      <li>{title}</li>
                  </ul>
              </div>
          </div>
      </section>
  )
}

export default PageTitle