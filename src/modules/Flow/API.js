import api from '../../lib/configAxios';

export default {
  getFlowList: async () => api.get('api/getFlowData'),
};
