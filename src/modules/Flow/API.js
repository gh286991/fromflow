import api from '../../lib/configAxios';

const apiList = {
  getFlowList: async () => api.get('api/getFlowData'),
}

export default apiList
