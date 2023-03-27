import { useParams } from "react-router-dom";
import { getMenu } from "../service/db"
import { useNavigate } from 'react-router-dom'

export function MenuDetails() {
    const navigate = useNavigate()
    const params = useParams()
    const menu = getMenu()
    const menuToShow = menu.find(item => item.id === params.id)
    console.log(menuToShow)

    return (
        <div className="menu-details-page">
            <div className="menu-details">
                <h1>{menuToShow.name}</h1>
                <img src={menuToShow.imgUrl} alt="" />
                <div className="ingredients">
                    {menuToShow.ingredients.map(item => <span>{item}</span>)}
                </div>
                <span>{menuToShow.description}</span>
                <button onClick={() => navigate(-1)}>X</button>
            </div>
        </div>
    )
}