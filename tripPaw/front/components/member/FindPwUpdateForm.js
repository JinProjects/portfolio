import React,{useState} from "react";
import styled from "styled-components";
import axios from "axios";
import { useRouter } from "next/router";

const FindFormTag = styled.form`
  .logo-login-section {
   margin-top: -30px;
    margin-bottom: 20px;
    .logo-img {
  height: 50px;
  width: auto;
  display: block;
  margin: 0 auto;
  border: 2px solid red;
}
  }

  .welcome-text {
    font-size: 16px;
    color: #666;
    margin-bottom: 50px;
  }
`;
const Button = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;
const InputGroup = styled.div`
  text-align: left;
  margin-bottom: 20px;
  position: relative;

  label {
    display: block;
    font-size: 14px;
    color: #555;
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    padding: 12px 10px;
    border: none;
    border-bottom: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    box-sizing: border-box;
  }
`;
const FindPwUpdateForm = () => {
const router = useRouter();
const token = router.query.token;
const [password, setPassword] = useState('');
const onChangePassword = (e) => {
  setPassword(e.target.value);
}
const [passwordChk, setPasswordChk] = useState('');
const onChangePasswordChk = (e) => {
  setPasswordChk(e.target.value);
}

const onChangePass = async () =>{
  const response = await axios.post(`http://localhost:8080/api/auth/updatePass?token=${token}`,
    {
      password:password,
      
    },{withCredentials:true})
  
    if(response.status == 200){
      alert(response.data.message+'로그인화면으로 이동합니다.');
      router.push('/member/login')
    }

    if(response.status == 500){
      alert('이메일 전송 실패!');
    }

}
    return (
        <FindFormTag>

          <InputGroup>
            <label htmlFor="username" style={{ display: 'none' }}>비밀번호를 입력해주세요</label>
            <input
              type="text"
              id="password"
              value={password}
              onChange={onChangePassword}
              required
              placeholder='비밀번호를 입력해주세요'
              />
          </InputGroup>
          <InputGroup>
            <label htmlFor="username" style={{ display: 'none' }}>비밀번호를 확인해주세요</label>
            <input
              type="text"
              id="password"
              value={passwordChk}
              onChange={onChangePasswordChk}
              required
              placeholder='비밀번호를 확인해주세요'
              />
          </InputGroup>
            <Button type="button" onClick={onChangePass}> 비밀번호 변경 </Button>
            <Button> 뒤로가기 </Button>
        </FindFormTag>
    );
}

export default FindPwUpdateForm;