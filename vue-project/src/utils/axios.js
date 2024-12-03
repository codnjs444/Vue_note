import axios from 'axios'

// Axios 인스턴스 생성
const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api', // Backend API 기본 URL
  timeout: 10000, // 요청 타임아웃 (ms)
  headers: {
    'Content-Type': 'application/json',
  },
})

// 요청 인터셉터 설정 (선택)
apiClient.interceptors.request.use(
  (config) => {
    // 요청 전 공통 작업 추가 가능 (예: 토큰 추가)
    console.log(`Request: ${config.method.toUpperCase()} ${config.url}`)
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// 응답 인터셉터 설정 (선택)
apiClient.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    console.error(`Response Error: ${error.message}`)
    return Promise.reject(error)
  },
)

export default apiClient
