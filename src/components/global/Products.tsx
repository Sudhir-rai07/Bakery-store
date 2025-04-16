'use client'
import { products } from '@/constants/constansts'
import { FoodCarousel } from './FoodCrousel'

const Products = () => {
    return (
        <div className='w-full mx-auto mt-8 flex flex-col '>
            <div className='flex gap-4 xl:flex-row flex-col'>
                <h2 className='text-3xl md:text-5xl lg:text-start md:text-center text-center uppercase font-extrabold font-mono leading-tight'>
                    Products we bake here daily -
                </h2>

                <div className='grid grid-cols-3 gap-2 space-x-8 place-items-center'>
                    {products.map((product) => (
                        <div className='uppercase font-semibold flex justify-between items-center w-fit px-2 py-1 font-xl rounded-full' key={product.name}
                            style={{
                                color: product.color,
                                backgroundColor: product.bgColor
                            }}
                        >
                            <span>{product.name}</span>
                            <span
                                className="text-white ml-4 h-8 w-8 flex items-center justify-center rounded-full"
                                style={{
                                    backgroundColor: product.color
                                }}
                            >
                                {product.productNo}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <FoodCarousel />
        </div>
    )
}

export default Products
