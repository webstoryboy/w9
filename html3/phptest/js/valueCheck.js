$(document).ready(function(){
    //[로그인하기] 버튼
    var loginSubmit = $('#loginSubmit');
    //이메일 주소 입력 폼
    var loginEmail = $('#loginEmail');
    //로그인 폼의 비밀번호 입력 폼
    var loginPw = $('#loginPw');
    //[로그인하기] 버튼 클릭 이벤트
    loginSubmit.click(function(){
        //이메일 유효성 검사식입니다. 이 식은 정규식이라고합니다.
        //PHP에서 학습하므로 그냥 따라합니다.
        var regEmailPattern = /^[a-zA-Z_\-0-9]+@[a-z]+.[a-z]+$/;
        //아래 if문의 조건문은 위의 정규식을 이메일 주소가 따르는지 아닌지를 판별합니다.
        //앞에 !가 있는 것에 주의하세요.
        if(!regEmailPattern.test(loginEmail.val())){
            alert('입력한 이메일 주소가 올바르지 않습니다. ');
            return false;
        }
        if(loginPw.val().length < 8){
            alert('비밀번호를 입력하지 않았거나 8글자 이하입니다. ');
            return false;
        }
    });

    //회원가입 입력 정보 필터링

    //[가입하기] 버튼
    var signUpSubmit = $('#signUpSubmit');
    //이름 입력 폼
    var userName = $('#userName');
    //이메일 입력 폼
    var userEmail = $('#userEmail');
    //비밀번호 입력 폼
    var userPw = $('#userPw');
    //생년 selectTag
    var birthYear = $('#birthYear');
    //생월 selectTag
    var birthMonth = $('#birthMonth');
    //생일 selectTag
    var birthDay = $('#birthDay');

    //필터링 시값이 오류일 때 무엇이 오류인지 보여주는 박스
    var valueError = $('#valueError');

    //[가입하기] 버튼 클릭 이벤트
    signUpSubmit.click(function() {

        //이름이 공백인지 확인
        if (userName.val() == '') {
            //알릴 오류 메시지 입력
            valueError.text('이름을 입력하세요.');
            //이름 입력란에 포커스
            userName.focus();
            //오류 메시지를 2초 후 사라지게 하는 함수를 호출
            timeOutCall();
            return false;
        }

        //값이 공백이 아니면 해당 값이 유효한 값인지 확인
        //아래의 식은 PHP 학습 시 학습하므로 그냥 따라해 주세요.
        //입력한 값이 한글이거나 알파벳이라는 것을 확인하는 식입니다.

        var regNamePattern = /^[가-힣a-zA-Z]+$/;
        if (regNamePattern.test(userName.val())) {
            //크롬 웹브라우저의 콘솔에서 확인하기 위함
            console.log('the value of userName is good');
        } else {
            valueError.text('정확한 이름을 입력하세요.');
            userName.focus();
            timeOutCall();
            return false;
        }

        //이메일 유효성 확인
        var regEmailPattern = /^[a-zA-Z_\-0-9]+@[a-z]+.[a-z]+$/;

        if (regEmailPattern.test(userEmail.val())) {
            console.log('exp email good');
        } else {
            valueError.text('정확한 이메일 주소를 입력하세요.');
            userEmail.focus();
            timeOutCall();
            return false;
        }

        //같은 이메일 주소를 사용하는 사용자가 데이터베이스에 있는지 확인
        // 이 기능은 PHP 학습 시 AJAX 후 구현합니다.

        //비밀번호가 8자 이상인지 확인
        if (userPw.val().length >= 8) {
            console.log('the value of password is good');
        } else {
            valueError.text('비밀번호를 8자 이상 입력하세요.');
            userPw.focus();
            timeOutCall();
            return false;
        }

        //생년값 확인
        if (birthYear.val() == '') {
            valueError.text('생년을 입력하세요.');
            birthYear.focus();
            timeOutCall();
            return false;
        }

        //생월값 확인
        if (birthMonth.val() == '') {
            valueError.text('생월을 입력하세요.');
            birthMonth.focus();
            timeOutCall();
            return false;
        }

        //생일값 확인
        if (birthDay.val() == '') {
            valueError.text('생일을 입력하세요.');
            birthDay.focus();
            timeOutCall();
            return false;
        }

        //성별을 체크했는지 확인. 값이 m이거나 w이면 통과
        if ($(":input:radio[name=gender]:checked").val() == 'm' || $(":input:radio[name=gender]:checked").val() == 'w') {
            console.log('gender val good');
        } else {
            valueError.text('성별을 선택해주세요.');
            timeOutCall();
            return false;
        }

        //여기까지 return false에 만나지 않았다면 true를 반환해 회원가입 정보를 제출
        return true;


    });

    function timeOutCall(){
    //setTimeout 함수는 어떠한 기능의 시간을 지연시킬 때 사용하는 내장 함수
        setTimeout(function(){
        $('#valueError').text('');
        },2000);
    }


});