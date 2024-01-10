import React, {FC} from 'react'
import Pizza from '../models/Pizza'
import SinglePizza from './SinglePizza';


interface DisplayPizzasProps {
	pizzasList: Pizza[]
	updatePizza: (newPizza: Pizza) => void
	deletePizza: (id: number) => void
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({ pizzasList, updatePizza,deletePizza }) => {
	return (
		<div className='container'>
			{pizzasList.map(pizza => {
				return (
					<SinglePizza pizza={pizza} updatePizza={updatePizza} deletePizza={deletePizza} key={pizza.id} />
				)
			})}
		</div>
	)
}

export default DisplayPizzas