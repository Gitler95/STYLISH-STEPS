function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40 ">
      <div className="headerleft">
      <img width={55} height={55} src="/logo.png" />
      <div className='logotip'>
        <h3 className="text-uppercase">STYLISH STEPS</h3>
        <p className="opacity-5">магазин лучшей обуви</p>
      </div>
      </div>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="/cart.svg" />
          <span>1205 руб.</span>
        </li>
        <li>
          <img width={18} height={18} src="/user.svg" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
