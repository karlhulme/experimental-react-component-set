import React from 'react'
import { Image } from './Image'

export default {
  title: 'Visuals/Image'
}

const penguinImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Emperor_Penguin_Manchot_empereur.jpg/256px-Emperor_Penguin_Manchot_empereur.jpg'

export const asDefault = () => <Image />
export const withContent = () => <Image source={penguinImageUrl} alt='Emporer penguin stood on snow.' />
export const withContentAndWidth = () => <Image width={128} source={penguinImageUrl} alt='Emporer penguin stood on snow.' />
export const withFill2 = () => <Image fill={2} source={penguinImageUrl} alt='Emporer penguin stood on snow.' />
export const withFill5 = () => <Image fill={5} source={penguinImageUrl} alt='Emporer penguin stood on snow.' />
export const withFill10 = () => <Image fill={10} source={penguinImageUrl} alt='Emporer penguin stood on snow.' />
export const withFill15 = () => <Image fill={15} source={penguinImageUrl} alt='Emporer penguin stood on snow.' />
export const withFill20 = () => <Image fill={20} source={penguinImageUrl} alt='Emporer penguin stood on snow.' />
export const withFill25 = () => <Image fill={25} source={penguinImageUrl} alt='Emporer penguin stood on snow.' />
export const withFill30 = () => <Image fill={30} source={penguinImageUrl} alt='Emporer penguin stood on snow.' />
