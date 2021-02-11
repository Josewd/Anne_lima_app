import { StackNavigationProp } from '@react-navigation/stack';
import { UserStackNavigation} from '../router';

export type AdminPageNavigationProp = StackNavigationProp<
  UserStackNavigation,
  'adminPage'
>;