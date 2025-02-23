function Sidebar(props) {
    return (
        <nav>
            <div><h2>Сайдбар</h2></div>
            <div>
                {props.name.content}
                </div>

        </nav>
    )
}
export default Sidebar