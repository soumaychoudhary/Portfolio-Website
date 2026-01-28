import {clsx} from 'clsx'
import { twMerge } from 'tailwind-merge'
// this function use tailwind merge to allow us to easily combine class without really writing a lines of classnames in one single line
export const cn= (...inputs)=>{
  return twMerge(clsx(...inputs));
}