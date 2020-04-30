import { CONTACT_US } from '../settings';

export const contactPage = (req, res) => res.status(200).json({ message: CONTACT_US });