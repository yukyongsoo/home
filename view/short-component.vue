<template>
  <v-layout justify-center class="ma-12" wrap>
    <v-flex xs12 lg4 sm4 class="mr-12">
      <v-img src="assets/me.png" class="darken-2"></v-img>
    </v-flex>

    <v-flex xs12 lg4 sm4>
      <v-layout column>
        <v-flex class="mb-3">
          <h5 class="headline primary--text text-xs-center mb-6">Who Am I</h5>
          <div class="text-xs-center">코딩에 대한 열정과 사랑으로 오늘을 살아가는 진정한 FullStack 개발자가 되고 싶은 남자!!</div>
        </v-flex>

        <v-flex>
          <h5 class="primary--text headline mb-6">What I can do for you</h5>
          <v-expansion-panels popout>
            <v-expansion-panel v-for="(item,i) in items" :key="i">
              <v-expansion-panel-header>{{item.name}}</v-expansion-panel-header>
              <v-expansion-panel-content>{{item.text}}</v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
module.exports = {
  data: function data() {
    return {
      items: [
        {
          name: "BackEnd Develpement",
          text:
            "다년간의 BackEnd 경험과 공부를 바탕으로 하여 안정하고 견고한 시스템 개발."
        },
        {
          name: "Web Develpement",
          text:
            "Back과 Front 양쪽을 경험하고 양쪽의 고충과 이해를 바탕하는 하는 개발"
        },
        {
          name: "Infra Support",
          text:
            "단순히 소프트웨어만 이해하는 개발자가 아닌 컴퓨터 그 자체를 이해하려 노력하고 인프라와 함께하는 개발 "
        },
        {
          name: "MiddleWare",
          text:
            "다양한 미들웨어 경험과 지식으로 기반으로 하는 시스템의 연결 지향적 개발."
        }
      ]
    };
  }
};
</script>