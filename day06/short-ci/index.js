function login(){
    const password = prompt('비밀번호 입력')
    if (password === 'megastudy') loginSuccess('운영자')
    else loginFailed()
}

function loginSuccess(name){
    alert(`${name}님 환영합니다!`)
}

function loginFailed(name){
    alert(`비밀번호 잘못 입력했습니다`)
}

login()
// ---- 정리함

function login(){
    const password = prompt('비밀번호 입력')
    const isPass = password === 'megastudy'
    // and 임. isPass가 맞으면 실행해줘
    isPass && loginSuccess('운영자')
    // isPass가 아니면 실행해줘
    !isPass && loginFailed()
}

function loginSuccess(name){
    alert(`${name}님 환영합니다!`)
}

function loginFailed(name){
    alert(`비밀번호 잘못 입력했습니다`)
}

login()