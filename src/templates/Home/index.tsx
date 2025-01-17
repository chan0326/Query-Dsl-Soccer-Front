import { Heading } from 'components/Heading';
import { instance } from 'config/axios-config';
import { useRouter } from 'next/router';

function Home() {
  const router = useRouter()

  const clickButtonHandler = (e:any) => {
    // instance().get(`/search`, {params: {c: 'stadium', q: '11', oc: 'stadium', oq:''}})
    // .then((res:any) => { alert(JSON.stringify(res.data)) })
    // .catch((error:any) => { alert(JSON.stringify(error)) })

    router.push('/player')

  }

  const question = [
    ["1", "전체 축구팀 목록을 팀이름 오름차순으로 출력하시오."],
    ["2", "플레이어의 포지션 종류를 나열하시오."],
    ["3", "플레이어의 포지션 종류를 나열하시오. 단 중복은 제거하고, 포지션이 없으면 '신입' 으로 기재하시오.	"],
    ["4", "수원팀에서 골키퍼(GK)의 이름을 모두 출력하시오. 단 수원팀 ID는 K02 입니다."],
    ["4-1", "수원팀에서 골키퍼(GK)의 이름을 모두 출력하시오. (ID 모를 경우)"],
    ["5", "수원팀에서 성이 고씨이고 키가 170 이상인 선수를 출력하시오. 단 수원팀 ID는 K02 입니다."],
    ["5-1", "수원팀에서 성이 고씨이고 키가 170 이상인 선수를 출력하시오. (ID 모를 경우)"],
    ["6", "다음 조건을 만족하는 선수명단을 출력하시오. 소속팀(삼성블루윙즈 OR 드래곤즈)], 포지션(미드필더)], 키(170<=ALL<=180)"],
    ["7", "수원을 연고지로 하는 골키퍼는 누구인가?"],
    ["8", "서울팀 선수들 이름, 키, 몸무게 목록으로 출력하시오"],
    ["9", "서울팀 선수들 이름과 포지션과 키(cm표시)와 몸무게(kg표시)와 각 선수의 BMI지수를 출력하시오"],
    ["10", "수원팀(K02) 과 대전팀(K10) 선수들 중 포지션이 골키퍼(GK)인 선수를 출력하시오"],
    ["11", "팀과 연고지를 연결해서 출력하시오"],
    ["12", "수원팀(K02) 과 대전팀(K10) 선수들 중 키가 180 이상 183 이하인 선수들"],
    ["13", "모든 선수들 중 포지션을 배정 받지 못한 선수들의 팀명과 선수이름 출력 둘다 오름차순"],
    ["14", "팀과 스타디움, 스케줄을 조인하여 2012년 3월 17일에 열린 각 경기의 팀이름, 스타디움, 어웨이팀 이름 출력"], 
    ["15", "2012년 3월 17일 경기에 포항 스틸러스 소속 골키퍼(GK) 선수, 포지션,팀명 (연고지포함), 스타디움, 경기날짜를 구하시오"], 
    ["16", "STADIUM 에 등록된 운동장 중에서 홈팀이 없는 경기장까지 전부 나오도록"],
    ["17", "페이지네이션 로직을 위한 플레이어 테이블에서 최상단 5개 로우를 출력"],
    ["18", "평균키가 인천 유나이티스팀('K04')의 평균키  보다 작은 팀의 팀ID, 팀명, 평균키 추출"],
    ["19", "포지션이 MF 인 선수들의 소속팀명 및 선수명, 백넘버 출력"], 
    ["20", "가장 키큰 선수 5명 소속팀명 및  선수명, 백넘버 출력"],
    ["21", "선수 자신이 속한 팀의 평균키보다 작은 선수 정보 출력"],
    ["22", "2012년 5월 한달간 경기가 있는 경기장 조회"]
  ]

  return <>
  <Heading>Soccer Search</Heading>
  <table>
    <thead>
      <tr>
        <td>No.</td>
        <td>문제</td>
        <td>답</td>
    </tr>
    </thead>
    <tbody>
      {question.map((row:any) => <tr key={row[0]} >
        <td>{row[0]}</td>
        <td>{row[1]}</td>
        <td><button value={row[0]} onClick={clickButtonHandler}>답</button></td>
      </tr>) }
    </tbody>
  </table>
  </>;
}

export default Home;
