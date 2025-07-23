import {Link} from 'react-router-dom';

function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40 ">
        <Link to='/'>
      <div className="headerleft">
      <img width={55} height={55} src="/logo.png" />
      <div className='logotip'>
        <h3 className="text-uppercase">STYLISH STEPS</h3>
        <p className="opacity-5">магазин лучшей обуви</p>
      </div>
    
      </div>
        </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="/cart.svg" alt="Корзина"/>
          <span>1205 руб.</span>
        </li>
        <li  className="mr-20 cu-p">
          <Link to='favorite'> <img width={18} height={18} src="/img/heart.svg" alt="Закладки" /></Link>
        </li>
        <li>
          <img width={18} height={18} src="/user.svg" alt="Пользователь"/>
        </li>
      </ul>
    </header>
  );
}

export default Header;
