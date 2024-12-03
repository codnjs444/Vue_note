import apiClient from '../../utils/axios' // Axios 인스턴스
import authEndpoints from '../auth' // API URL

// 로그인 API 호출
export const login = async (username, password) => {
  try {
    const response = await apiClient.post(authEndpoints.login, {
      username,
      password,
    })
    return response.data // 성공 시 데이터 반환
  } catch (error) {
    // 에러 처리
    throw error.response ? error.response.data : error.message
  }
}
