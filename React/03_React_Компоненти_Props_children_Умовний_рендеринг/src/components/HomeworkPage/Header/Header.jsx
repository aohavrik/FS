function Header(props) {
    return (
        <nav>
            <div><h2>Хедер</h2></div>
            <div>
                {props.name.world} {/* Тепер правильно звертаємось до значення */}
            </div>
        </nav>
    );
}

export default Header;
