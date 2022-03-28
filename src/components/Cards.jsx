import {useState, useEffect} from "react"
import CardsData from '../api/cards.json';


function Cards() {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(CardsData)
    }, [])

    return (
        <div className="container mx-auto mt-14 grid grid-cols-3 gap-x-4">
            {
                cards.length && cards.map(card => (
                    <div className="bg-white p-10 rounded-lg shadow-sm flex flex-col items-center text-center">
                        <img className="w-[150px] h-[150px] mb-6" src={card.image} alt="Card" />
                        <h1 className="font-semibold text-lg text-primary-brand-color">{card.title}</h1>
                        <p className="mt-2 text-sm text-gray-700">{card.desc}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Cards