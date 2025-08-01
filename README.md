# 👨‍💻 풀스택 개발자 포트폴리오
> **"침착한 대응과 책임감을 갖춘 개발자"** <br>
> 안녕하세요.<br>
> 어떤 상황에서도 침착하게 대응하고, <br>책임감을 갖고 프로젝트를 
완수하는 <br>개발자가 되는 것을 목표로 하고 있습니다.

---

## 📌About Me

- 이름 : 최영진
- 이메일: during4277@gmail.com
- GitHub: [JinProjects](https://github.com/JinProjects)
- 1차 프로젝트 : <a href="https://github.com/JinProjects/40db">도서관리 시스템</a>
- 2차 프로젝트 : <a href="https://github.com/dpflaalee/sseudamsseudam">반려동물 SNS 프로젝트</a>
- 3차 프로젝트 : <a href="https://github.com/syeon279/tripPaw">반려동물과 동반 여행 플랫폼 </a>

---

## 🛠️Skills 
| 분야             | 기술 및 버전 | 설명 및 CS 관점 |
|------------------|-----------------------------|------------------|
| **Frontend**     | HTML5, CSS3, JavaScript (ES6+), React 18, Bootstrap 5, Ant Design 4.x | **DOM 구조와 렌더링 최적화**, **CSR/SSR 차이**, **이벤트 버블링**, **비동기 처리 (Promise, async/await)** 숙련 |
| **Backend**      | Java 11, Spring Boot 2.7.14, Spring Security 5, JPA, MyBatis 8.0.42 | **HTTP 프로토콜**, **RESTful 설계 원칙**, **인증/인가 흐름**, **트랜잭션 처리**, **ORM vs SQL 직접 제어**에 대한 이해 |
| **Mobile**       | Flutter 3.10, Dart | **위젯 트리 구조**, **상태 관리 방식 (Provider, Riverpod)**, **API 통신 및 비동기 처리** |
| **Infra**        | AWS (EC2, RDS, S3), Redis 7 | **클라우드 인프라 구성**, **Redis 세션 관리 및 토큰 블랙리스트 처리**, **CORS 정책 이해** |
| **Database**     | MySQL 8.0, Oracle 11c | **인덱스 최적화**, **JOIN 전략**, **정규화/비정규화**, **트랜잭션 격리 수준**, **SQL Injection 방어** |
| **협업 도구**    | Git 2.42, GitHub, SourceTree | **Git Flow 전략**, **충돌 해결 경험**, **PR 리뷰 및 코드 품질 관리** |

---

## 📚 Education & Certification

- **AI 활용 풀스택 부트캠프** (2025.02 ~ 2025.08, 더조은 컴퓨터아카데미)
- **정보처리기사**, **SQLD**, **컴퓨터활용능력 1급 필기** 등 자격 보유

---

## 🚀 Project: 도서관리 시스템
> 도서관리 시스템의 대여/반납, 사용자 상태 관리 등 <br>직접 설계하고 구현했습니다.

##### 프로젝트 소개
  - Spring boot, Thymeleaf, JPA를 이용한 도서관리 시스템
##### 개발환경
  - Spring boot 2.7.14
  - Spring Security 5
  - Thymeleaf
  - JPA
  - JavaScript
  - Ajax
  - Html5 / css3
  - mysql 8.0.42

##### 담당역할
  - 관리자 회원관리
  - 알라딘 api를 이용한 도서 CRUD
  - 전체 DB 설계, 샘플데이터 작성 및 관리
##### 주요기능

<table>
  <tr>
    <td align="center">도서검색</td>
    <td align="center">도서관리</td>
    <td align="center">도서등록</td>
    <td align="center">회원관리</td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/1fb72202-5da6-47a8-a4c6-a9b9f405a151" width="200" height="200"></td>
    <td><img src="https://github.com/user-attachments/assets/675c1eb5-b7f5-4d11-820a-de39ec63e15b" width="200" height="200"></td>
    <td><img src="https://github.com/user-attachments/assets/70a4c402-3b86-4f35-9e82-9c94cc67128c" width="200" height="200"></td>
    <td><img src="https://github.com/user-attachments/assets/cb86a6fd-25b9-4b91-b6bb-8a0d00a947d4" width="200" height="200"></td>
  </tr>
</table>

### 💣트러블슈팅 사례
#### 📌 1. Git 디렉토리 중복 생성으로 인한 Pull 실패 문제 해결

  * 오류
 
    - Source tree에서 제대로 pull이 되지 않는 현상
  
  * 원인분석
 
    - git 폴더 안에 프로젝트를 다시 git 폴더를 만들어 clone 한 것을 발견
  
  * 문제해결
 
    - 발견하여 정상적인 루트에서 파일 생성 후 프로젝트를 clone
  
  * 결과
   
    - 프로젝트 중간에 오류를 발견해 개발 시간이 지연되어 아쉬웠지만, Git 사용에 대한 이해도 향상
---
#### 📌 2. Thymeleaf 권한별 조건부 페이지 렌더링 구현 방안 개선
 
 * 오류
 
   - Thymeleaf에서 회원/관리자 권한 별로 페이지 렌더링하는 문제에서 구현 방안 부족
  
 * 원인분석
 
   - Controller에서 조건부 렌더링을 적용할 수 있는 로직이 미흡
  
 * 문제해결
 
   - Controller에서 비로그인 / 로그인 / 관리자 권한을 얻어 model에 담아 전달하고, Thymeleaf에서 th:if 조건문을 활용하여 권한별로 화면을 렌더링하도록 구현
  
 * 결과
   
   - 권한 별로 페이지 렌더링이 정상적으로 작동하게 되어, 사용자 경험 향상



#### 💬 협업 및 소감
- 예상치 못 한 오류가 발생했지만 오류를 해결하면서 한단계 발전 된 개발자로 성장할 수 있는 기회였습니다.


---
---
### 2차 프로젝트

##### 프로젝트 소개
  - React와 Nodejs를 이용한 반려동물SNS 
  - <a href="https://github.com/dpflaalee/sseudamsseudam">2차 프로젝트 이동</a>
##### 개발환경
  - Node.js
  - React
  - Sequelize
  - Javascript
  - mysql
  - css

##### 주요기능

<table>
  <tr>
    <td align="center">로그인</td>
    <td align="center">이미지 업로드</td>
    <td align="center">마이페이지와 팔로우, 팔로잉</td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/7abdabb2-7b82-4495-bf15-daf2a0800c90" width="200" height="200"></td>
    <td><img src="https://github.com/user-attachments/assets/95c7e2a7-7a2f-438c-b205-bde6903f8f32" width="200" height="200"></td>
    <td><img src="https://github.com/user-attachments/assets/1b2554aa-bbdf-4e11-bf7a-455deb7d15dc" width="200" height="200"></td>
  </tr>
</table>

##### 담당역할
  - 세션을 이용한 로그인 구현
  - 회원 간의 팔로우/팔로잉 구현
  - 메인 페이지에서 게시글 목록을 렌더링할 때, 각 사용자에 대한 프로필 이미지 데이터를 함께 불러오도록 구현
  - 회원가입 시 coolSMS API를 이용한 휴대폰 인증 구현
    
#### 💣트러블슈팅

  * 오류
 
    - 트윗글의 프로필 이미지 불러왔을 때 트윗글이 바로 등록이 안되는 이슈 발생
  
  * 원인분석
 
    - Sequelize include 작성하는 로직 미흡
  
  * 문제해결
 
    - User테이블과 UserProfileImage테이블을 join하여 트윗글 작성 시 바로 등록되도록 문제 해결
  
  * 결과
   
    - 조인 로직 수정 후 트윗이 정상적으로 동작하게 되었고, Sequelize의 include 활용 능력 향상
      
---

  * 오류
 
    - 회원가입 이후 프로필 이미지를 등록하려 할 때, 이미지 저장 시점이 명확하지 않아 정상적으로 처리되지 않는 문제 발생
  
  * 원인분석
 
    - 프로필 이미지 저장 시점을 결정하는데 필요한 요구사항 분석이 부족하여, 회원가입과 이미지 등록 간의 관계 처리 미흡
  
  * 문제해결
 
    - 회원가입 시 UserProfileImage 테이블에 기본값(빈 값)을 먼저 insert하도록 처리하고, 이 후 프로필 수정 시 이미지 데이터를 update하는 방식으로 로직 수정하여 문제 해결
  
  * 결과
   
    - 회원가입 이후에도 프로필 이미지를 안정적으로 등록할 수 있게 되었고, 사용자 정보와 관련된 테이블 흐름과 상태 관리에 대한 이해도 향상
---


#### 협업 및 소감


---
---
### 3차 프로젝트

      
* 담당역할
* 트러블슈팅
* 협업 및 소감


---
