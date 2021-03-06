const STATUS_INITIAL = 'STATUS_INITIAL';
const STATUS_LOADING = 'STATUS_LOADING';
const STATUS_NORMAL = 'STATUS_NORMAL';
const STATUS_ERROR = 'STATUS_ERROR';

export const severeLevel = {
  [STATUS_INITIAL]: 0,
  [STATUS_NORMAL]: 1,
  [STATUS_LOADING]: 2,
  [STATUS_ERROR]: 3,
};

const reduxStatus =  {
  STATUS_INITIAL,
  STATUS_LOADING,
  STATUS_NORMAL,
  STATUS_ERROR,
}

export default reduxStatus;