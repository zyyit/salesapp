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

export const selectCitisGET = (Constants, { prefectureId }, handlers = {}) =>
  fetch(
    `https://zynanci.top:441/spig020500/selectCitis?prefectureId=${encodeURIComponent(
      `${
        typeof prefectureId === 'string'
          ? prefectureId
          : JSON.stringify(prefectureId ?? '')
      }`
    )}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  ).then(res => handleResponse(res, handlers));

export const useSelectCitisGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['selectCitis', args],
    () => selectCitisGET(Constants, args, handlers),
    {
      refetchInterval,
    }
  );
};

export const FetchSelectCitisGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  prefectureId,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useSelectCitisGET(
    { prefectureId },
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
  return children({ loading, data, error, refetchSelectCitis: refetch });
};

export const selectNyushajisekiGET = (Constants, _args, handlers = {}) =>
  fetch(`https://zynanci.top:441/spig020500/nyushajiseki`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  }).then(res => handleResponse(res, handlers));

export const useSelectNyushajisekiGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['Nyushajisekis', args],
    () => selectNyushajisekiGET(Constants, args, handlers),
    {
      refetchInterval,
    }
  );
};

export const FetchSelectNyushajisekiGET = ({
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
  } = useSelectNyushajisekiGET(
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
  return children({ loading, data, error, refetchSelectNyushajiseki: refetch });
};

export const selectPrefecturesGET = (Constants, _args, handlers = {}) =>
  fetch(`https://zynanci.top:441/spig020500/selectPrefectures`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  }).then(res => handleResponse(res, handlers));

export const useSelectPrefecturesGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['selectPrefectures', args],
    () => selectPrefecturesGET(Constants, args, handlers),
    {
      refetchInterval,
    }
  );
};

export const FetchSelectPrefecturesGET = ({
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
  } = useSelectPrefecturesGET(
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
  return children({ loading, data, error, refetchSelectPrefectures: refetch });
};

export const selectProductGET = (Constants, _args, handlers = {}) =>
  fetch(`https://zynanci.top:441/spig020500/selectProduct`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  }).then(res => handleResponse(res, handlers));

export const useSelectProductGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['selectProducts', args],
    () => selectProductGET(Constants, args, handlers),
    {
      refetchInterval,
    }
  );
};

export const FetchSelectProductGET = ({
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
  } = useSelectProductGET(
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
  return children({ loading, data, error, refetchSelectProduct: refetch });
};
