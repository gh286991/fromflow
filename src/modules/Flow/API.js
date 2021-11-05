import api from '../../lib/configAxios';

const apiList = {
  getFlowList: async () => api.post('/formManagement/readFormFlow'),
}

export default apiList
