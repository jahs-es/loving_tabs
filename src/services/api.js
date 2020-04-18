import axios from 'axios';

let tokenSource;
export const fetchTabs = async keyword => {
  try {
    if (typeof tokenSource !== typeof undefined) {
      tokenSource.cancel('Operation canceled due to new request.');
    }

    // save the new request for cancellation
    tokenSource = axios.CancelToken.source();

    const { data } = await axios.get(`http://www.songsterr.com/a/ra/songs.json?pattern=${keyword}}`, {
      cancelToken: tokenSource.token
    });

    return { result: data };
  } catch (err) {
    if (axios.isCancel(err)) return { cancelPrevQuery: true };
    return [err];
  }
};
