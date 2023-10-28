import { SHUFFLER_PARAMETER } from './constants';

const shuffler = (array) => array.sort(() => Math.random() - SHUFFLER_PARAMETER);
export default shuffler;