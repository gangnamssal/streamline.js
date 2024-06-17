import rangeL from '../../lazy/range-l/range-l';
import takeAll from '../takeAll/takeAll';

export default function range(..._: number[]) {
  return takeAll(rangeL(..._));
}
