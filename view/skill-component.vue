<template>
  <v-layout justify-center wrap>
    <v-flex xs12 lg4 sm4 class="mr-12">
      <h4 class="display-1 text-xs-center mb-5 primary--text">My Education</h4>
      <B class="mb-0">Education</B>
      <p class="mb-0">충북대학교 학사</p>
      <p >Major in computer engineering ( 3.46 / 4.5 )</p>

      <B class="mb-0">Write Paper</B>
      <p>
        <a href="https://www.computer.org/csdl/proceedings/icisa/2013/0602/00/06579462.pdf">
			ICISA 2013 : Comparison of Extraction Methods for bug Tracking System Analysis 링크</a>
      </p>

      <B>Certificate</B>
      <p class="mb-0">정보처리기능사 - 2002/10/07</p>
      <p>OPIC IL - 2013/09/15</p>

      <B class="mb-0">Career</B>
      <p class="mb-0">2014 ~ 2015 : ㈜ 스펜오컴– 연구개발</p>
      <p class="mb-0">2016 ~ 2018.07 : ㈜ Inzent – 프로젝트 수행 및 기술지원</p>
      <p>2018.11 ~ Now : ㈜ 테라핀테크 – 플랫폼 개발</p>
    </v-flex>

    <v-flex xs12 lg4 sm4>
      <h4 class="display-1 text-xs-center mb-5 primary--text">My Skill</h4>
	  <v-layout class="mb-1" v-for="(item,i) in skillItems" :key="i">
		  <v-flex><p>{{item.name}}</p></v-flex>
		  <v-flex><v-rating :value="item.value" readonly></v-rating></v-flex>
	  </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
module.exports = {
  data: function data() {
    return {
		skillItems : [
			{value : 5 , name : "Java"},
			{value : 4 , name : "Kotlin"},
			{value : 3 , name : "C#"},
			{value : 3 , name : "JavaScript"},
			{value : 2 , name : "Css"}
		]
	};
  }
};
</script>