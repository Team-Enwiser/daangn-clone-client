import styled from "styled-components"
import logo from "../images/logo.png"

export default function Start(){
    return(
        <Container>
            <LogoImg/>
            <MainText>당신 근처의 당근</MainText>
            <SubText>동네라서 가능한 모든 것<br/>지금 내 동네를 선택하고 시작해보세요!</SubText>
            <Button>시작하기</Button>
            <LoginText>이미 계정이 있다면? <span>로그인</span></LoginText>
        </Container>
    )
}

const Container = styled.div`
    width: 55vh;
    height : 99vh;
    margin: auto;
    border: 1px solid black;
    text-align: center;
`

const LogoImg = styled.div`
    margin: auto;
    margin-top: 40%;
    width: 40%;
    padding-top: 40%;

    background-position: 50% 50%;
    background-repeat: no-repeat;
    // border: 1px solid blue;
    background-image: url(${logo});
    background-size: cover;
`

const MainText = styled.div`
    margin-top: 5%;
    font-weight: bold;
    font-size: 30px;
`

const SubText = styled.div`
    margin-top: 5%;
    font-size: 22px;
`

const Button = styled.div`
    margin-top : 35%;
    width: 80%;
    height : 6%;
    display : inline-flex;
    padding : 0 6%;

    color : white;
    background-color: #FF7E36;
    // border: 1px solid black;

    border-radius : 4px;
    align-items : center;
    justify-content: center;

    font-size : 24px;
    font-weight : bold;
`

const LoginText = styled.div`
    margin-top: 5%;
    font-size: 22px;
    font-weight: 400;
    color: #AAAAAA;

    span{
        color: #FF7E36;
    }
`

