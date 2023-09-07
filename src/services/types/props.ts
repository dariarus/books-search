import {ReactNode} from 'react';

export type TButton = {
  isDisabled: boolean,
  name: string,
  onClick: () => void
}

export type TDropList = {
  label: string,
  children: ReactNode
}


// TODO: заменить any[] на string[]
export type TBookCard = {
  title: string,
  imageUrl: string,
  category: string,
  authors: any[]
}