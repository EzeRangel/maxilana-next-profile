import Link from 'next/link';
import { MdOutlineFirstPage, MdOutlineLastPage } from 'react-icons/md';

import useToggle from '../../../hooks/useToggle';

const Menu = () => {
  const { hidden, updateToggle } = useToggle();

  let className = "Menu";

  if(hidden === true){
    className += " Menu--hidden";
  }

  return (
    <aside className={className}>
      <header className="Menu__header">
        <h6 className="Menu__title">Menú</h6>
        <span className="Menu__toggle" onClick={updateToggle}>
          {
            hidden === true
              ? <MdOutlineLastPage />
              : <MdOutlineFirstPage />
          }
        </span>
      </header>
      <ul className="Menu__list">
        <li className="Menu__item">
          <Link href="/">
            Inicio
          </Link>
        </li>
        <li className="Menu__item">
          <Link href="/">
            Ver tarjetas
          </Link>
        </li>
        <li className="Menu__item">
          <Link href="/agregar-tarjeta">
            Agregar tarjeta
          </Link>
        </li>
      </ul>
    </aside>
  )
}

export default Menu;