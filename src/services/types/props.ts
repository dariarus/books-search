import {ReactNode} from 'react';

export type TButton = {
  name: string,
  isDisabled?: boolean,
  onClick?: () => void
}

export type TDropList = {
  label: string,
  children: ReactNode
}


// TODO: заменить any[] на string[]
export type TBookCard = {
  title: string,
  imageUrl: string | undefined,
  category: string,
  authors: any[] | ''
}