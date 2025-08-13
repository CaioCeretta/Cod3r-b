import { useContext } from 'react'
import ProductsContext from '../contexts/ProductsContext'

const useProducts = () => useContext(ProductsContext)
export default useProducts
