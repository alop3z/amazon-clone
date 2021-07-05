import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import Currency from 'react-currency-formatter'
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '../slices/basketSlice'

const CheckoutProduct = ({
	id,
	title,
	price,
	rating,
	description,
	category,
	image,
	hasPrime,
}) => {
	const dispatch = useDispatch()

	const addItemToCart = () => {
		const product = {
			id,
			title,
			price,
			rating,
			description,
			category,
			image,
			hasPrime,
		}
		dispatch(addToBasket(product))
	}

	const removeItemFromCart = () => {
		//Remove item from redux
		dispatch(removeFromBasket({ id }))
	}

	return (
		<div className='grid grid-cols-5'>
			<Image src={image} height={200} width={200} objectFit='contain' />

			{/* middle */}
			<div className='col-span-3 mx-5'>
				<p>{title}</p>
				<div className='flex'>
					{Array(rating)
						.fill()
						.map((_, i) => (
							<StarIcon key={i} className='h-5 text-yellow-500' />
						))}
				</div>
				<p className='text-sm my-2 line-clamp-3'>{description}</p>
				<Currency quantity={price} />
				{hasPrime && (
					<div className='flex items-center space-x-2 -mt-5'>
						<img
							loading='lazy'
							className='w-12'
							src='https://links.papareact.com/fdw'
							alt=''
						/>
						<p className='text-xs text-gray-500'>Free Next-day Delivery</p>
					</div>
				)}
			</div>

			<div className='flex flex-col space-y-2 my-auto justify-self-end'>
				<button onClick={addItemToCart} className='button'>
					Add to Cart
				</button>
				<button onClick={removeItemFromCart} className='button'>
					Remove from Cart
				</button>
			</div>
		</div>
	)
}

export default CheckoutProduct
