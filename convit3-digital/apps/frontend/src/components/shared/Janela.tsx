import Image from 'next/image'
import React, { type ReactNode } from 'react'

export interface JanelaProps {
  label?: string
  titulo?: string
  imagem?: string
  background?: string
  children: ReactNode;
}

export default function Janela(props: JanelaProps) {
  return (
    <div className='relative rounded-xl overflow-hidden border border-zinc-800'>
      <Image src={
        props.background
          ? props.background
          : "https://www.nuvent.com.br/wp-content/uploads/2019/12/EVP_0141-scaled.jpg"
      }
        alt={String(props.titulo)}
        fill
        className='-z-30 object-cover'
      />
      {/* -z-30 is for the image to be on the background, and the object-cover image is resized to fit its container while
      preserving the aspect ratio, and when it is applied, the image will fill the entire container, potentially cropping
      the image if its aspect ratio doesn't match the aspect ratio of the container
      
      In summary with object cover the image will maintain its aspect ratio, but it might overflow the container, getting
      cropped to ensure no empty space is left, and without it, the default behavior is object: contain, which resizes the
      image to fit entirely inside the container, but it may leave empty spaces if the ar doesn't match
      */}
      <div className='bg-black/80'>
        <div className='flex gap-7 p-6 items-center'>
          <div className="w-28 h-28 relative">
            <Image src={
              props.imagem
                ? props.imagem
                : "https://t3.ftcdn.net/jpg/08/12/70/12/360_F_812701281_qDF1YDwHrQgs2BbUCIrgqzkdkNhokjwp.jpg"
            }
              alt={'Imagem do Evento'}
              fill
              className='rounded-full'
            />
          </div>
          <div className='flex flex-col justify-center'>
            <span className='text-sm text-zinc-300'>{props.label ?? "Detalhes do Evento"}</span>
            <span className='text-4xl font-bold'>{props.titulo ?? "Título do Evento"}</span>
          </div>
          <div className='flex-1'>

          </div>

          <Image
            src={"/elementos.png"}
            alt="Elementos Decorativos"
            width={140}
            height={140}
          />
        </div>
        <div className='bg-black/70 border-t-4 border-zinc-800 rounded-b-xl p-7'>
          {props.children}
        </div>
      </div>
    </div>

  )
}
