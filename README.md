# Intro
이름 : 최영진

최종학력 : 인천대학교 정보통신공학과

#### 👨‍🦱소개 

안녕하세요.

어떤 상황에서도 침착하게 대응하고, 책임감을 갖고 프로젝트를 
      
완수하는 개발자가 되는 것을 목표로 하고 있습니다.
      
#### ✏기술역량 
<div align=left> 
  <img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white"> 
  <img src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white"> 
  <br>
  
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
  <img src="https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=white">
  <br>
  
  <img src="https://img.shields.io/badge/oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white"> 
  <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> 
  <br>
  
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
  <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
  <br>
  
  <img src="https://img.shields.io/badge/spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white"> 
  <img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white">
  <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
  <img src="https://img.shields.io/badge/django-092E20?style=for-the-badge&logo=django&logoColor=white">
  <img src="https://img.shields.io/badge/flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white">
  
  <img src="https://img.shields.io/badge/bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white">
  <br>

  <img src="https://img.shields.io/badge/linux-FCC624?style=for-the-badge&logo=linux&logoColor=black"> 
  <img src="https://img.shields.io/badge/amazonaws-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white"> 
  <img src="https://img.shields.io/badge/apache tomcat-F8DC75?style=for-the-badge&logo=apachetomcat&logoColor=white">
  <br>
  
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/fontawesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white">
  <br>
</div>

### 1차 프로젝트
<details>
      
<summary>접기/펼치기</summary>

##### 프로젝트 소개
  - 도서관리 시스템
  - <a href="https://github.com/JinProjects/40db">1차 프로젝트 이동</a>
##### 개발환경
  - Spring boot
  - Thymeleaf
  - JPA
  - JavaScript
  - Ajax
  - Html/css
  - mysql

##### 담당역할
  - 관리자 회원관리
  - 알라딘 api를 이용한 도서 CRUD
  - 전체 DB 설계, 샘플데이터 작성 및 관리
##### 주요기능

<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/1fb72202-5da6-47a8-a4c6-a9b9f405a151" width="200" height="200"></td>
    <td><img src="https://github.com/user-attachments/assets/675c1eb5-b7f5-4d11-820a-de39ec63e15b" width="200" height="200"></td>
    <td><img src="https://github.com/user-attachments/assets/70a4c402-3b86-4f35-9e82-9c94cc67128c" width="200" height="200"></td>
    <td><img src="https://github.com/user-attachments/assets/cb86a6fd-25b9-4b91-b6bb-8a0d00a947d4" width="200" height="200"></td>
  </tr>
  <tr>
    <td align="center">도서검색</td>
    <td align="center">도서관리</td>
    <td align="center">도서등록</td>
    <td align="center">회원관리</td>
  </tr>
</table>

#### 💣트러블슈팅

  * 오류
 
    - Source tree에서 제대로 pull이 되지 않는 현상
  
  * 원인분석
 
    - git 폴더 안에 프로젝트를 다시 git 폴더를 만들어 clone 한 것을 발견
  
  * 문제해결
 
    - 발견하여 정상적인 루트에서 파일 생성 후 프로젝트를 clone
  
  * 결과
   
    - 프로젝트 중간에 오류를 발견해 개발 시간이 지연되어 아쉬웠지만, Git 사용에 대한 이해도 향상
---

 * 오류
 
   - Thymeleaf에서 회원/관리자 권한 별로 페이지 렌더링하는 문제에서 구현 방안 부족
  
 * 원인분석
 
   - Controller에서 조건부 렌더링을 적용할 수 있는 로직이 미흡
  
 * 문제해결
 
   - Controller에서 비로그인 / 로그인 / 관리자 권한을 얻어 model에 담아 전달하고, Thymeleaf에서 th:if 조건문을 활용하여 권한별로 화면을 렌더링하도록 구현
  
 * 결과
   
   - 권한 별로 페이지 렌더링이 정상적으로 작동하게 되어, 사용자 경험 향상



#### 협업 및 소감
- 예상치 못 한 오류가 발생했지만 오류를 해결하면서 한단계 발전 된 개발자로 성장할 수 있는 기회였습니다.

</details>

---
---
### 2차 프로젝트
<details>
      <summary>접고/펼치기</summary>

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
    <td><img src="https://github.com/user-attachments/assets/7abdabb2-7b82-4495-bf15-daf2a0800c90" width="200" height="200"></td>
    <td><img src="https://github.com/user-attachments/assets/95c7e2a7-7a2f-438c-b205-bde6903f8f32" width="200" height="200"></td>
    <td><img src="https://github.com/user-attachments/assets/1b2554aa-bbdf-4e11-bf7a-455deb7d15dc" width="200" height="200"></td>
  </tr>
  <tr>
    <td align="center">로그인</td>
    <td align="center">이미지 업로드</td>
    <td align="center">마이페이지와 팔로우, 팔로잉</td>
  </tr>
</table>

##### 담당역할
  - 세션을 이용한 로그인 구현
  - 회원 간의 팔로우/팔로잉 구현
  - 메인 페이지에서 게시글 목록을 렌더링할 때, 각 사용자에 대한 프로필 이미지 데이터를 함께 불러오도록 구현
  - 회원가입 시 coolSMS API를 이용한 휴대폰 인증 구현
    
#### 💣트러블슈팅

#### 협업 및 소감

</details>

---
---
### 3차 프로젝트

<details>
      <summary>접고/펼치기</summary>
      
* 담당역할
* 트러블슈팅
* 협업 및 소감

</details>

---
