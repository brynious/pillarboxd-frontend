// import React from 'react';
import { SiteBackground } from './SiteBackground';

export const Homepage = () => {
  return (
    <SiteBackground>
      <div className="homepage">
        <h1>Homepage</h1>

        <p>Created this website to learn more about web development.</p>

        <p>
          <a href="https://github.com/brynious/pillarboxd-frontend" target="_blank" rel="noreferrer">
            Front-end
          </a>{' '}
          made using React, context-api, react-router, and Tailwind CSS.
        </p>

        <p>
          <a href="https://github.com/brynious/pillarboxd-backend" target="_blank" rel="noreferrer">
            Back-end
          </a>{' '}
          made using Node, Express, JSON Web Token, and Bcrypt.
        </p>
      </div>
    </SiteBackground>
  );
};
