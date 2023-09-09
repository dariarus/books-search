import {ChangeEvent, ReactElement, ReactNode} from 'react';

export type TButton = {
  name: string,
  isDisabled?: boolean,
  onClick?: () => void
}

export type TDropList = {
  id: string,
  label: string,
  children: ReactNode,
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

export type TBookCard = {
  title: string,
  imageUrl: string | undefined,
  category: string,
  authors: ReactElement[] | ''
}