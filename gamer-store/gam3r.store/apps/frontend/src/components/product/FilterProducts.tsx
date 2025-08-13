'use client'
import useProducts from '@/data/hooks/useProdutos'
import { IconSearch } from '@tabler/icons-react'

export interface ProductsFilterProps {
    className?: string
}

export default function FilterProducts(props: ProductsFilterProps) {
    const { search, setSearch } = useProducts()
    return (
        <div>
            <div
                className={`
                    flex gap-2 bg-violet-dark border border-white/20 k
                    rounded-full overflow-hidden ${props.className ?? ''}
                `}
            >
                <input
                    value={search ?? ''}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="What are you looking for?"
                    className="flex-1 bg-transparent outline-none px-6 py-3"
                />
                <div className="flex justify-center items-center bg-emerald-500 px-4">
                    <IconSearch size={24} className="text-white" />
                </div>
            </div>
        </div>
    )
}
