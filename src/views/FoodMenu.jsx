import { getMenu } from "../service/db"
import { useNavigate } from 'react-router-dom'

export function FoodMenu() {
    const navigate = useNavigate()

    const menu = getMenu()

    function openMenu(idx) {
        navigate(`/${idx}`)
    }

    return (
        <div className="food-menu-page">
            <h1>This what you can make with your ingridient</h1>
            <div className="food-menu">

                {menu.map(item => <div className="food-prev" onClick={() => openMenu(item.id)}>
                    <span>{item.name}</span>
                    <img src={item.imgUrl} alt="" />
                    {/* <span>{item.description}</span> */}
                </div>)}
            </div>
        </div >
    )
}