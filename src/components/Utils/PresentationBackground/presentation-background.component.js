import React from 'react';

import { Image } from './presentation-background.style';
import BackgroundImage from '../../../images/presentation-background.png'

type Props = {
  children: React.Node,
  className: String
};

const PresentationBackground = ({ children, className }: Props) => (
  <Image className={className} image = {BackgroundImage} >{children}</Image>
);

export default PresentationBackground;