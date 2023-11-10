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

export const delectPictureByIndexGET = (
  Constants,
  { picIndex },
  handlers = {}
) =>
  fetch(
    `https://zynanci.top:441/spig020000/deleteHousePicByIndex?picIndex=${encodeURIComponent(
      `${
        typeof picIndex === 'string' ? picIndex : JSON.stringify(picIndex ?? '')
      }`
    )}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  ).then(res => handleResponse(res, handlers));

export const useDelectPictureByIndexGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['sPIG020000DelectPictureByIndexGET', args],
    () => delectPictureByIndexGET(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () =>
        queryClient.invalidateQueries(['sPIG020000DelectPictureByIndexGETS']),
    }
  );
};

export const FetchDelectPictureByIndexGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  picIndex,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useDelectPictureByIndexGET(
    { picIndex },
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
  return children({
    loading,
    data,
    error,
    refetchDelectPictureByIndex: refetch,
  });
};

export const selectHousePicGET = (Constants, _args, handlers = {}) =>
  fetch(`https://zynanci.top:441/spig020000/selectHousePic`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  }).then(res => handleResponse(res, handlers));

export const useSelectHousePicGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['selectHousePics', args],
    () => selectHousePicGET(Constants, args, handlers),
    {
      refetchInterval,
    }
  );
};

export const FetchSelectHousePicGET = ({
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
  } = useSelectHousePicGET(
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
  return children({ loading, data, error, refetchSelectHousePic: refetch });
};
