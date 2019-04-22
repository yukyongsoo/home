<template>
<v-layout column wrap class="my-5" align-center>
<v-container grid-list-sm>
	<v-layout row wrap>
		
		<v-flex d-flex xs12 sm3 child-flex>
        	<v-card color="blue lighten-2" dark tile flat>
          		<v-card-text>프로젝트명</v-card-text>
        	</v-card>
      	</v-flex>
      <v-flex d-flex xs12 sm3>
        <v-card color="lighten-2" tile flat>
          <v-card-text>{{curItem.name}}</v-card-text>
        </v-card>
      </v-flex>
      
      <v-flex d-flex xs12 sm3 child-flex>
        <v-card color="blue lighten-2" dark tile flat>
          <v-card-text>규모</v-card-text>
        </v-card>
      </v-flex>     
      <v-flex d-flex xs12 sm3>
        <v-card color="lighten-2" tile flat>
          <v-card-text>{{curItem.scale}}</v-card-text>
        </v-card>
      </v-flex>
	
      <v-flex d-flex xs12 sm3 child-flex>
        <v-card color="blue lighten-2" dark tile flat>
          <v-card-text>문제점</v-card-text>
        </v-card>
      </v-flex> 
      <v-flex d-flex xs12 sm3>
        <v-card color="lighten-2" tile flat>
          <v-card-text>{{curItem.problem}}</v-card-text>
        </v-card>
      </v-flex>
      
      <v-flex d-flex xs12 sm3 child-flex>
        <v-card color="blue lighten-2" dark tile flat>
          <v-card-text>담당 업무</v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm3>
        <v-card color="lighten-2" tile flat>
          <v-card-text>{{curItem.work}}</v-card-text>
        </v-card>
      </v-flex>
      
      <v-flex d-flex xs12 sm3 child-flex>
        <v-card color="blue lighten-2" dark tile flat>
          <v-card-text>사용 기술</v-card-text>
        </v-card>
      </v-flex> 
      <v-flex d-flex xs12 sm3>
        <v-card color="lighten-2" tile flat>
          <v-card-text>{{curItem.skill}}</v-card-text>
        </v-card>
      </v-flex>
      
      <v-flex d-flex xs12 sm3 child-flex>
        <v-card color="blue lighten-2" dark tile flat>
          <v-card-text>성과</v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm3>
        <v-card color="lighten-2" tile flat>
          <v-card-text>{{curItem.result}}</v-card-text>
        </v-card>
      </v-flex>
      
      <v-flex d-flex xs12>
        <v-layout column>
          <v-flex d-flex>
            <v-card color="blue lighten-2" dark tile flat>
              <v-card-text>업무 내용 </v-card-text>
            </v-card>
          </v-flex>
          <v-flex d-flex>
            <v-card tile flat>
              <v-card-text>{{curItem.text}}</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex> 
      
	</v-layout>
</v-container>
</v-layout>
</template>

<script>
module.exports =  {
	props: ['cur'],
	data: function data() {
		return {
			curItem : {},
			items: [
				{
					name : "연구 및 페이퍼 작성(ICISA 2013)",
					work : "논문작성,데이터 수집, 테스터 개발",
					skill : "Html,C#, Html Parser",
					result : "Short career 링크를 참조해 주세요",
					scale : "2",
					problem : "없음",
					text : "버그 트래킹 시스템 데이터 추출 및 정제. 자세한 내용은 논문 참조."
				
				},
				{
					name : "Engine APM tool 개발",
					work : "설계 및 개발, 문서 작성",
					skill : "AOP, RCP, RAP, SQLITE",
					result : "신한은행,기업은행, 삼성화재 등 대형 금융사 납품",
					scale : "4",
					problem : "기존 EDMS 엔진에 퍼포먼스 및 문제점 해결을 위한 지원도구의 부재",
					text : "Engine 자체 코드 변경 없는 APM개발. 콘솔로 개발되었으나 추후 WEB으로 전환. 개발 기간과 성능을 고려하여 선정. 사이트 DB와 무관하도록 선정."
					    +"오버헤드가 적어야 하므로 비동기 방식 통신(NETTY), 서버 부하가 적도록 하기 위해 Agent-Collector-Server-UI 파트로 나눔."
					    +"개발 : DB 설계 -> Agent -> Collector -> Server 순으로 개발." 
					    +" 테스트 및 필드 테스트 : Junit을 이용한 내부 테스트 및 QA를 통한 통합 테스트.실 사이트 개발계 배포 후 잠재적 문제점 확인 및 디버깅."
				},
				{
					name : "Enigne 디버깅 / 기능추가",
					work : "개발 / 트러블슈팅",
					skill : "Java,Jprofiler, Junit, ETC",
					result : "트러블 슈팅 및 솔루션 기능/안정성 향상",
					scale : "2",
					problem : "솔루션 메이저 업데이트로 인한 내재적 버그 확인됨",
					text : "회사 메인 솔루션에 대한 내재적 버그/ 발견된 버그 제거. 큰 장애에 대한 트러블 슈팅. 기능 추가."
						+ "SKT 이미지 시스템 장애 / 신한캐피탈 직원 PC 블루스크린 해결. 한화생명 Agent 크래시 분석"
				},
				{
					name : "알리안츠 출금동의서 연동",
					work : "개발, Was 컨트롤, 문서작성",
					skill : "JSP, WebSphere",
					result : "금결원 연동을 통한 법규 준수 시스템 구축",
					scale : "10",
					problem : "법규 변경으로 인한 사내 시스템 상의 문제점 발생.",
					text : "기존 DMS 시스템 분석. 특정 업무 코드로 들어온 문서에 대하여 XML 형태로 변경 한 후 WEB SERVICE를 통해 SAP로 전송." +
							"SAP 응답 코드를 통하여 실패 시 재전송. 가장 적은 코드 변경으로 업무 수행하기 위해 구성."
				},
				{
					name : "롯데캐피탈 모바일 에이전트 개발 ",
					work : "개발",
					skill : "JAVA,TCP Networking",
					result : "모바일 비대면 대용량 데이터에 대응하는 에이전트 개발",
					scale : "10~30",
					problem : "신규 비대면 시스템 구축으로 인한 기존 통신 방식 적용 불가",
					text : "비대면 특성에 따른 새로운 메타 데이터 및 문서 전송을 위한 JAVA 중계 에이전트 작성."
						+ "WAS 위에서 동작하지 않는 순수 JAVA,TCP를 이용한 통신구성(고객사 요청)"
				},
				{
					name : "롯데손해보험 녹취 시스템 윈백",
					work : "개발, 문서작성",
					skill : "Java,C++,C#, Rcp",
					result : "다양한 Storage를 지원하도록 솔루션 변경 및 성능 향상",
					scale : "3",
					problem : "기존 시스템이 특정 스토리지만 지원하도록 되어 있어 신규 스토리지 도입 불가.",
					text : "타사 EDMS 시스템 메타 데이터 분석. 메타 데이터 이관 및 신규 EDMS 스토리지에 따른"
						+ " 키값 변경. 기존 업무 시스템에 영향에 주지 않기 위해 중계 테이블 구축."
				},
				{
					name : "현대라이프 이미지 시스템 고도화",
					work : "개발, 트러블 슈팅, 문서작성",
					skill : "Java, Weblogic, GWT",
					result : "전 이미지 암호화 및 이미지 원장 분리보관",
					scale : "3",
					problem : "개인정보 보호법에 따른 시스템 변경 요구.",
					text : "1. 3rd 파티 암호화 모듈을 이용하여 암호화를 요청. 단순 다운로드/업로드 방식으로는 성능 저하."
						+ "이미지 엔진 자체에 필터를 통해 이미지 암호화." 
						+ "2.특정 기간 이상 되는 고객에 대해 이미지를 별도 보관 요청. 이에 따라 화면을 통해 분리된 이미지를 확인하고 싶어함."
						+ "자사 분리보관 시스템 도입 및 자동 분리 배치 프로그램 작성."
				},
				{
					name : "하나 공전소 이미지 시스템 고도화",
					work : "개발, 트러블 슈팅",
					skill : "Java, Oracle, Network, Storage",
					result : "성능 향상, 무 중단 시스템 구축",
					scale : "10",
					problem : "자사 EOS 제품 사용에 대한 교체 요청",
					text : "HA에 지원되지 않는 기존 Engine 교체 및 데이터 이관. 관리 용이를 위한 기능 개선."
						+ "기존 장비의 노후화로 인한 데이터베이스 성능 저하. 전체 데이터 약 24억건 이관요청."
						+ "신규 제품에 맞는 스키마로 데이터 정제 및 이관. 트러블 슈팅"
				},
				
				{
					name : "한국원자력 안전기술원 차세대",
					work : "개발,구축,설계,DB/Was 컨트롤,문서 작성",
					skill : "Java,Jeus,Servlet,Http-Components",
					result : "전사 시스템의 모든 비정형 데이터 중앙화. 기존의 가비지 데이터 정제",
					scale : "100 이상",
					problem : "노후화된 시스템의 신규 구축. L4 성능문제. 디스크 Ops 저하",
					text : "타사 솔루션(사이버다임) 분석 및 데이터 정제 이관 . 인프라 시스템 설계 / 솔루션 구축."
						+ "통합 API GATEWAY 개발, 솔루션 기능 개선 및 트러블슈팅. 기술 이관 문서 작성."
						+ "기존 데이터 중 가비지 판별 및 EOF없는 파일(전송중단) 된 파일의 선별"
				},
				{
					name : "사원/대리 교육담당, 트러블 슈팅",
					work : "교육 , 트러블슈팅 지원, 설계 회의",
					skill : "없음",
					result : "장애 처리 및 사내 지식 전파. 트러블 슈팅 노하우 전수",
					scale : "3~10",
					problem : "없음",
					text : "사원/대리급 교육 담당 및 지식전수, 개발 가이드 제공, 트러블 슈팅 지원 등. CS 교육, 패턴 , 트렌드, 알고리즘 등"
				}
			]		
		}			
	},
	watch: {
	    cur: function cur(cur) {
	      if(cur != -1)
	      	this.curItem = this.items[cur];
	    }
	}
}
</script>