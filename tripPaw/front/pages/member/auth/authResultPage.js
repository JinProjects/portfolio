import React, { useEffect} from 'react';
import {useRouter} from 'next/router'; 

const AuthResultPage = () => {
  const router = useRouter();
  const isSuccess = router.query.success;
  const token = router.query.token;
//  const [params] = Router;
  console.log('params=',router.query.token);
  useEffect(() =>{
    if(!router.isReady){
      return;
    }
    console.log('isSuccess=',isSuccess,'token=',token);
    if(isSuccess === 'true'){
      alert('이메일 인증이 완료되었습니다. 잠시후 비밀번호 변경페이지로 이동합니다.');
      setTimeout(() => {
        router.push(`/member/findPwUpdate?token=${token}`);
      }, 3000);
    }else{
      alert('이메일 인증에 실패했습니다. 링크가 만료되었거나 올바르지 않습니다.');
    }
  },[isSuccess,token])
  return (<>
  </>);
}

export default AuthResultPage;