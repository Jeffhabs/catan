import { Styles } from 'react-jss';

// /**
//  * helper function to counter typescripts type widening
//  */
// // tslint:disable-next-line:no-unnecessary-generics
export function createStyles<Props = {}, C extends string = string>(styles: Styles<C, Props>): Styles<C> {
  return styles as Styles<C>;
}