import React from "react";
import AuthLayout from './loginLayout';
import FindPwUpdateForm from "../../components/member/FindPwUpdateForm";

const FindPw = () => {
    return (
        <AuthLayout>
            <FindPwUpdateForm />
        </AuthLayout>
    );
}

export default FindPw;