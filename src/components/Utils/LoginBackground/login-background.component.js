import React from 'react';

import { Image } from './login-background.style';
import BackgroundImage from '../../../images/login-background.png'

type Props = {
  children: React.Node,
  className: String
};

const LoginBackground = ({ children, className }: Props) => (
  <Image className={className} image = {BackgroundImage} >{children}</Image>
);

export default LoginBackground;
