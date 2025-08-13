import Image from 'next/image'
import React from 'react'

export default function Processando() {
  return (
    <div className='flex-1 flex justify-center items-center h-96'>
      <Image
        width={60}
        height={60}
        src='/processando.gif'
        alt='Circulo carregando'
        />
    </div>
  )
}
