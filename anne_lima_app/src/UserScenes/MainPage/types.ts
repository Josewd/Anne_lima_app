import { StackNavigationProp } from '@react-navigation/stack';
import { UserStackNavigation} from '../router';

export type MainPageNavigationProp = StackNavigationProp<
  UserStackNavigation,
  'mainPage'
>;

export type service = {
id: string;
title: string;
duration: string;
durationTime: number;
price: number;
description?: string;
available: boolean
}
