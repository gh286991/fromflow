import api from '../../lib/configAxios';

const apiList = {
  getFlowList: async () => api.get('api/getTemplateFlow'),
}

export default apiList
