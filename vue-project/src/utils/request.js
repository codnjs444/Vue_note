/**
 * ============================================================================================================================================================
 * 👉 Http 통신을 위한 설정 및 공통 모듈 페이지
 * -> axios를 활용한 Http 통신 관련 공통 인스턴스 정의
 *
 * -> 🗝️ Header 보안 셋팅
 * -> 🍂 Http Status 값에 따라 분기 처리
 *
 * -> 🔔 notify : kind 값에 따라 푸쉬 알람 사용 유무 처리
 * -> ex) notify : { kind: 'none' } => 푸쉬 알람 사용하지 않음
 * -> ex) notify : { kind: 'server' } => 서버단 메시지 사용
 * -> ex) notify : { kind: 'custom', type: 'success', title:'사용 변경', msg: '변경에 성공하였습니다' } => 클라이언트단 메시지 사용
 * ============================================================================================================================================================
 */

// utils/request.js
import axios from 'axios'

const instance = axios.create({
  baseURL: '/', // 기본 URL 설정, 필요에 맞게 수정
  timeout: 5000, // 요청 시간 초과 설정 (5초)
})

// 요청 인터셉터 설정 (필요 시)
instance.interceptors.request.use(
  (config) => {
    // 예: 인증 토큰 추가
    // const token = localStorage.getItem('token');
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config
  },
  (error) => Promise.reject(error),
)

// 응답 인터셉터 설정 (필요 시)
instance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
)

export default instance
