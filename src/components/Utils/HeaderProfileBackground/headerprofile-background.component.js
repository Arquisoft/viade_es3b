import React from 'react';

import { Image } from './headerprofile-background.style';
import BackgroundImage from '../../../images/headerprofile.png'

type Props = {
  children: React.Node,
  className: String
};

const HeaderProfileBackground = ({ children, className }: Props) => (
  <Image className={className} image = {BackgroundImage} >{children}</Image>
);

export default HeaderProfileBackground;