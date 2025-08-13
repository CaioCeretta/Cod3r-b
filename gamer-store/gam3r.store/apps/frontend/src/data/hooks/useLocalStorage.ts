import { useCallback } from 'react'

export default function useLocalStorage() {
    const saveItem = useCallback((chave: string, valor: any) => {
        localStorage.setItem(chave, JSON.stringify(valor))
    }, [])

    const fetchItem = useCallback((key: string) => {
        const value = localStorage.getItem(key)
        return value ? JSON.parse(value) : null
    }, [])

    const removeItem = useCallback((key: string) => {
        localStorage.removeItem(key)
    }, [])

    return { saveItem, fetchItem, removeItem }
}
