<template>
  <v-layout column wrap class="my-5" align-center>
    <v-flex xs12 sm4 lg4 class="my-5">
      <div>
        <h4 class="display-1 primary--text text-xs-center">Where Am I Worked</h4>
      </div>
    </v-flex>
    <v-flex xs12 sm8 lg8 class="my-3">
      <v-timeline>
        <v-timeline-item v-for="(item,i) in items" :key="i" color="primary darken" large>
          <template v-slot:opposite>
            <span>{{item.priod}}</span>
          </template>
          <v-card class="elevation-2">
            <v-card-title class="subheadding">{{item.name}}</v-card-title>
            <v-card-text>{{item.text}}</v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-flex>
  </v-layout>
</template>

<script>
module.exports = {
  data() {
    return {
      items: [
        {
          name: "연구 및 페이퍼 작성",
          priod: "2012.6 ~ 2013.6",
          text:
            "버그 트래킹 시스템 데이터 추출 및 정제. 자세한 내용은 논문 참조."
        },
        {
          name: "APM 개발",
          priod: "2014.01 ~ 2015.2",
          text:
            "Engine 자체 코드 변경 없는 APM개발. 콘솔로 개발되었으나 추후 WEB으로 전환."
        },
        {
          name: "Enigne 디버깅 / 기능추가",
          priod: "2015.01 ~ 2016.01",
          text:
            "회사 메인 솔루션에 대한 내재적 버그/ 발견된 버그 제거. 큰 장애에 대한 트러블 슈팅. 기능 추가."
        },
        {
          name: "알리안츠 출금동의서 연동",
          priod: "2015.06 ~ 2015.08",
          text:
            "기존 DMS 시스템 분석. 특정 업무 코드로 들어온 문서에 대하여 XML 형태로 변경 한 후 WEB SERVICE를 통해 SAP로 전송."
        },
        {
          name: "롯데캐피탈 모바일 개발 ",
          priod: "2015.07 ~ 2015.08",
          text:
            "비대면 특성에 따른 새로운 메타 데이터 및 문서 전송을 위한 JAVA 중계 에이전트 작성."
        },
        {
          name: "롯데손해보험 녹취 시스템 윈백",
          priod: "2015.10 ~ 2016.02",
          text: "타사 EDMS 시스템 메타 데이터 분석. 메타 데이터 이관"
        },
        {
          name: "현대라이프 이미지 시스템 고도화",
          priod: "2016.08 ~ 2016.11",
          text: "분리보관 시스템 도입 및 자동 분리 배치 프로그램 작성."
        },
        {
          name: "하나 공전소 이미지 시스템 고도화",
          priod: "2016.11 ~ 2017.03",
          text:
            "HA에 지원되지 않는 기존 Engine 교체 및 데이터 이관. 관리 용이를 위한 기능 개선."
        },
        {
          name: "한국원자력 안전기술원 차세대",
          priod: "2017.04 ~ 2018.04",
          text:
            "타사 솔루션 분석 및 데이터 정제 이관 . 인프라 시스템 설계 / 솔루션 구축."
        },
        {
          name: "사내 사원/대리 교육담당",
          priod: "2018.03 ~ 2018.07",
          text: "교육 담당 및 지식전수, 개발 가이드 제공, 트러블 슈팅 지원"
        },
        {
          name: "카카오페이 투자 서비스 출시",
          priod: "2019.2 ~ 2019.04",
          text: "카카오 페이에서의 투자 서비스 출시 및 연동 서비스 개발"
        },
        {
          name: "S사 투자 서비스 개발",
          priod: "2019.5 ~ 진행중",
          text: "진행중(자세한 내용 기재가 불가능합니다. ㅠㅠ) "
        }
      ]
    };
  },
  methods: {}
};
</script>