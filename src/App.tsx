import React from 'react';
import WorkItem, { WorkItemProps } from './WorkItem';

const App: React.FC<{}> = () => {
  const items: WorkItemProps[] = [
    { name: 'Proyecto1', image: 'example1.png' },
    { name: 'Proyecto2', image: 'example2.png' },
    { name: 'Proyecto3', image: 'example3.png' },
  ];

  return (
    <div>
      <main className="overflow--auto">
        <h1 className="color--skyBlue section__heading--largest">MANUEL JIMÉNEZ</h1>

        <ul className="section--social">
          <li className="socialWrapper">
            <a className="color--skyBlue social" title="LinkedIn Profile" href="https://www.linkedin.com/in/manjime/">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>

          <li className="socialWrapper color--skyBlue">
            <a className="social color--skyBlue" title="GitHub Profile" href="https://github.com/manjime83">
              <i className="fa fa-github"></i>
            </a>
          </li>

          <li className="socialWrapper">
            <a className="social color--skyBlue" title="Resume" href="Resume-Manuel Jimenez R.pdf">
              <i className="fa fa-file-text"></i>
            </a>
          </li>
        </ul>
      </main>

      <section className="background--skyBlue section">
        <h2 className="color--cloud margin--none section__text--centered">Portfolio</h2>
      </section>

      <section className="section section--alignCentered section--description">
        {items.map((item) => {
          return <WorkItem key={item.name} name={item.name} image={item.image} />;
        })}
      </section>

      <section className="background--skyBlue section">
        <h2 className="color--cloud margin--none section__text--centered">About Me</h2>
      </section>

      <section className="section section--alignCentered section--description">
        <p className="color--darkgrey section__description">
          I am learning to code in the cloud! I like to work hard and learn new things. I want to work for a company
          that will pay me to code in the cloud!
        </p>

        <div className="background--skyBlue modal--closed">
          <span className="color--cloud modal__closeButton">
            <i className="fa fa-window-close-o"></i>
          </span>
          <img
            alt="example screenshot of a project involving code"
            className="modal__image"
            src="images/example1.png"
          />
          <div className="color--cloud modal__text">
            <h2 className="modal__title">Work Example Name</h2>
            <a className="color--skyBlue modal__link" href="http://www.google.com">
              Check it out
            </a>
            <p className="modal__description">A long description of the work in question.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
