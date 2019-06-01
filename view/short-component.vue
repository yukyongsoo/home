<template>
  <v-layout wrap class="my-5">
    <v-flex xs12 lg4 sm4>
      <div class="headline text-xs-center mb-3">
        <h5 class="headline">Yuk Yong Soo</h5>
      </div>
      <v-img src="assets/me.png" class="darken-2"></v-img>
    </v-flex>

    <v-flex xs12 lg8 sm8>
      <v-layout column>
        <v-flex class="mb-3">
          <div>
            <h5 class="headline primary--text text-xs-center">Who Am I</h5>
			<div class="text-xs-center">저는 이런 사람입니다.</div>
          </div>
        </v-flex>

        <v-flex>
          <div class="headline text-xs-center">
            <h5 class="primary--text headline">What I can do for you</h5>
          </div>
          <v-expansion-panel popout>
            <v-expansion-panel-content v-for="(item,i) in items" :key="i">
              <template v-slot:header>
                <h6 class="subheading">{{item.name}}</h6>
              </template>
              <v-card>
                <v-card-text>{{item.text}}</v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
module.exports = {
  data: function data() {
    return {
		items : [
			{name : "BackEnd Develpement", text : "A"},
			{name : "Web Develpement", text : "B"},
			{name : "Infra Support", text : "C"},
			{name : "MiddleWare", text : "D"}
		]
	};
  }
};
</script>