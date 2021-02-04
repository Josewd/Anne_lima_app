import { StackNavigationProp } from '@react-navigation/stack';
import { UserStackNavigation} from '../router';

export type MainPageNavigationProp = StackNavigationProp<
  UserStackNavigation,
  'mainPage'
>;
