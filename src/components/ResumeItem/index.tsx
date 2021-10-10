import React from 'react'
import * as C from './styles';

type Props = {
  title: string;
  value: number;
  color?: string;
}

const ResumeItem = ({title, value, color}: Props) => {
  return (
    <C.Container>
      <C.Title>{title}</C.Title>
      <C.Info color={color} >R$ {value}</C.Info>
    </C.Container>
  )
}

export default ResumeItem;
