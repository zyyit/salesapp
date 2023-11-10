import * as React from 'react';
import {
  useQuery,
  useMutation,
  useIsFetching,
  useQueryClient,
} from 'react-query';
import useFetch from 'react-fetch-hook';
import { useIsFocused } from '@react-navigation/native';
import { handleResponse, isOkStatus } from '../utils/handleRestApiResponse';
import usePrevious from '../utils/usePrevious';
import * as GlobalVariables from '../config/GlobalVariableContext';

export const foodItemsGET = (Constants, _args, handlers = {}) =>
  fetch(`https://example-data.draftbit.com/food_items`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  }).then(res => handleResponse(res, handlers));

export const useFoodItemsGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['food_items', args],
    () => foodItemsGET(Constants, args, handlers),
    {
      refetchInterval,
    }
  );
};

export const FetchFoodItemsGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useFoodItemsGET(
    {},
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchFoodItems: refetch });
};

export const usersGET = (Constants, { limit }, handlers = {}) =>
  fetch(
    `https://example-data.draftbit.com/users?_limit=${encodeURIComponent(
      `${typeof limit === 'string' ? limit : JSON.stringify(limit ?? '')}`
    )}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  ).then(res => handleResponse(res, handlers));

export const useUsersGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(['Users', args], () => usersGET(Constants, args, handlers), {
    refetchInterval,
  });
};

export const FetchUsersGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  limit,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useUsersGET(
    { limit },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchUsers: refetch });
};

export const productsGET = (Constants, _args, handlers = {}) =>
  fetch(`https://example-data.draftbit.com/products/3`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  }).then(res => handleResponse(res, handlers));

export const useProductsGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['exampleDataProductsGET', args],
    () => productsGET(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () =>
        queryClient.invalidateQueries(['exampleDataProductsGETS']),
    }
  );
};

export const FetchProductsGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useProductsGET(
    {},
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchProducts: refetch });
};
