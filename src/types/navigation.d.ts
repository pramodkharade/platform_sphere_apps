import type {
  RouteConfig,
  StackNavigationEventMap,
  StackNavigationOptions,
  StackNavigationState,
} from '@react-navigation/core';

// Define the param list for the authentication stack
export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
};

// Define a type for the configuration of each route
export type StackRoutesType<ParamList extends ParamListBase> = Array<
  RouteConfig<
    ParamList,
    keyof ParamList,
    StackNavigationState<ParamList>,
    StackNavigationOptions,
    StackNavigationEventMap
  >
>;
