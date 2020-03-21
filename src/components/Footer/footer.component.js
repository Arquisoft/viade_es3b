import React from 'react';
import { IconLookup, IconDefinition, findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withTranslation } from 'react-i18next';

import './footer_viade.css';

type Props = {
  t: Function
};

const Footer = (props: Props) => {
  //const { t } = props;
  const githubIcon: IconLookup = { prefix: 'fab', iconName: 'github' };
  const githubIconDef: IconDefinition = findIconDefinition(githubIcon);

  return (
    <footer className="viade-footer">
      <section className="viade-footer_container">
          <ul>
            <li className="viade-footer_copyright">© 2020, Viade</li>
            <li className="viade-footer_link">
              <a
                  href="https://github.com/Arquisoft/viade_es3b"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="link-icon" icon={githubIconDef} />
                GitHub
              </a>
            </li>
          </ul>
      </section>
    </footer>
  );
};

export default withTranslation()(Footer);
