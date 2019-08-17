import React from 'react'

import {
  FigureCaption,
  FigureByline
} from '@project-r/styleguide'

import Viewer from './Viewer'

export default ({ options, caption, byline }) => {

  return <>
    <Viewer options={options} />
    {!!(caption || byline) && <FigureCaption>
      {caption && `${caption} `}
      {byline && <FigureByline>{byline}</FigureByline>}
    </FigureCaption>}
  </>
}
