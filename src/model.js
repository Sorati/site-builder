import image from './assets/Space.jpg'
import {Block, TitleBlock, ImageBlock, TextBlock, TextColumnsBlock} from './classes/blocks'
import {css} from "./utils";


const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos eos eveniet ex illum modi necessitatibus'

export const model = [
    new TitleBlock('Site builder', {
        styles: css({
            background: 'darkred',
            color: '#fff'
        }),
        tag: 'h1',
    }),
    new ImageBlock(image, {
        styles: 'padding: 2rem 0; display: flex; justify-content: center',
        alt: 'space',
        imageStyles: 'width: 500px; height: auto'
    }),
    new TextBlock(text, {
        styles: 'background: darkblue; color: yellow',
    }),
    new TextColumnsBlock([
        'text 1',
        'text 2',
        'text 3'
    ],{
        styles: 'padding: 1rem',
    })
]