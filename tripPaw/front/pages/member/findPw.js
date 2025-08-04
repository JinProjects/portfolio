import React from "react";
import AuthLayout from './loginLayout';
import FindPwForm from "../../components/member/FindPwForm";

const FindPw = () => {
    return (
        <AuthLayout>
            <FindPwForm />
        </AuthLayout>
    );
}

export default FindPw;