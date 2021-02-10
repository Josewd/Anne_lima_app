import { StackNavigationProp } from '@react-navigation/stack';
import { UserStackNavigation} from '../router';

export type ServicesNavigationProp = StackNavigationProp<
  UserStackNavigation,
  'services'
>;

export type userDb = {
    name: any;
    email: any;
    birthday: any;
    role:any;
  }

export type service = {
    title: string;
    description: string;
    duration: string;
    price: number;
    durationTime: number
    available: boolean;
   
}

export type image = {uri: string|undefined}
  