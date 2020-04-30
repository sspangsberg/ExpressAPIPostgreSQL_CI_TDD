// import { APP_NAME } from '../settings';

export const indexPage = (req, res) => res
  .status(200)
  .json({ message: 'Welcome to my ExpressJS TDD CI web app :)' });
