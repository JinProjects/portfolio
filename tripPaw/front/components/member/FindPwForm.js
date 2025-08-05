import React,{useState} from "react";
import styled from "styled-components";
import axios from "axios";

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
const FindPwForm = () => {
const [email, setEmail] = useState('');

const onChangeEmailWithCookie = (e) => {
  setEmail(e.target.value);
}
const onSendEmail = async () =>{

  try{
    const response = await axios.get(`http://localhost:8080/api/auth/authorSendMail?email=${email}`,{withCredentials:true})
    console.log('전송 성공!');
    alert(response.data.message);
  setEmail('');
  }catch(error) {
    if(error.response.status===500){
      alert("이메일 전송에 실패했습니다.");
    }else{
      alert("알 수 없는 오류가 발생했습니다.");
    }
  }
  }
    return (
        <FindFormTag>

          <InputGroup>
            <label htmlFor="username" style={{ display: 'none' }}>이메일을 입력해주세요</label>
            <input
              type="text"
              id="username"
              value={email}
              onChange={onChangeEmailWithCookie}
              required
              placeholder='이메일을 입력해주세요'
              />
          </InputGroup>
            <Button type="button" onClick={onSendEmail}> 비밀번호 찾기 </Button>
            <Button> 뒤로가기 </Button>
        </FindFormTag>
    );
}

export default FindPwForm;