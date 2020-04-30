import { APP_NAME } from '../settings';

export const indexPage = (req, res) => res.status(200).json({ message: APP_NAME });