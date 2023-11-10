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

export const selectWorkTimeGET = (Constants, _args, handlers = {}) =>
  fetch(`https://zynanci.top:441/spig030000/selectWorkTime`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  }).then(res => handleResponse(res, handlers));

export const useSelectWorkTimeGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['selectWorkTimes', args],
    () => selectWorkTimeGET(Constants, args, handlers),
    {
      refetchInterval,
    }
  );
};

export const FetchSelectWorkTimeGET = ({
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
  } = useSelectWorkTimeGET(
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
  return children({ loading, data, error, refetchSelectWorkTime: refetch });
};
