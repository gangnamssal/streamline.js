import { rangeL } from '../../lazy/index';
import takeAll from '../takeAll/takeAll';

export default function range(..._: number[]) {
  return takeAll(rangeL(..._));
}
