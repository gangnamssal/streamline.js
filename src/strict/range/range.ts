import { rangeL } from '../../lazy';
import takeAll from '../takeAll/takeAll';

export default function range(..._: number[]) {
  return takeAll(rangeL(..._));
}
