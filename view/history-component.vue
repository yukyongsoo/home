<template>
<section>
<v-layout column wrap class="my-5" align-center>
	<v-flex xs12 sm4 class="my-3">
		<div class="text-xs-center">
        	<h2 class="headline">Project History</h2>
        	<h3 class="subheading">자세한 내용을 원하시면 셀을 클릭하세요</h3>
		</div>
	</v-flex>
    <v-flex xs12 sm4>
		<v-data-table :headers="headers" :items="items" class="elevation-1" >
			<template slot="items" slot-scope="props">
				<tr @click="detail(props.item.detail)">
					<td class="text-xs-center">{{ props.item.name }}</td>
					<td class="text-xs-center">{{ props.item.priod }}</td>
					<td class="text-xs-center">{{ props.item.work }}</td>
					<td class="text-xs-center">{{ props.item.type }}</td>
				</tr>
			</template>
		</v-data-table>
	</v-flex>
</v-layout>
<hisdetail-component id='target' v-bind:style="{ display : active }" :cur='cur'></hisdetail-component>
<v-divider></v-divider>
</section>
</template>

<script>
module.exports =  {
	data () {
		return {		
			active : 'inline',
			cur : 0,
			headers: [
				{ text: '프로젝트', value: 'name'},
				{ text: '기간', value: 'priod'},
				{ text: '직무', value: 'work' },
				{ text: 'Type', value: 'type' }
			],
			items: [
				{
					detail : 0,
					name: '연구 및 페이퍼 작성',
					priod: "2012.6-2013.6",
					work: "연구",
					type: "제 1 저자"
				},
				{
					detail : 1,
					name: 'APM 개발',
					priod: "2014.01~2015.2",
					work: "연구 및 개발",
					type: "서브 개발자"
				},
				{
					detail : 2,
					name: 'Enigne 디버깅 / 기능추가',
					priod: "2015.01~2016.01",
					work: "연구 및 개발",
					type: "서브 개발자"
				},
				{
					detail : 3,
					name: '알리안츠 출금동의서 연동',
					priod: "2015.06~2015~08",
					work: "개발 및 회의",
					type: "메인 개발자"
				},
				{
					detail : 4,
					name: '롯데캐피탈 모바일 개발 ',
					priod: "2015.07~2015.08",
					work: "개발",
					type: "메인 개발자"
				},
				{
					detail : 5,
					name: '롯데손해보험 녹취 시스템 윈백',
					priod: "2015.10~2016.02",
					work: "개발",
					type: "서브 개발자"
				},
				{
					detail : 6,
					name: '현대라이프 이미지 시스템 고도화',
					priod: "2016.08~2016.11",
					work: "개발 및 설계",
					type: "메인 개발자"
				},
				{
					detail : 7,
					name: '하나 공전소 이미지 시스템 고도화',
					priod: "2016.11~2017.03",
					work: "개발 및 회의",
					type: "메인 개발자"
				},
				{
					detail : 8,
					name: '한국원자력 안전기술원 차세대',
					priod: "2017.04~2018.04",
					work: "개발 및 설계",
					type: "메인 개발자"
				},
				{
					detail : 9,
					name: '사내 사원/대리 교육담당',
					priod: "2018.03 ~ 2018.07",
					work: "교육",
					type: "메인"
				},
				{
					detail : 10,
					name: '카카오페이 투자 서비스 출시',
					priod: "2018.2 ~ 2018.04",
					work: "개발/ 설계",
					type: "메인"
				}
			]
		}
	},
	methods: {
		detail: function (data,event) {						
				this.cur = data;
				Vue.prototype.$vuetify.goTo('#target',  {
			          duration: 1000,
			          offset: -100,
			          easing: 'easeOutQuart'
			    });
			}
	}
}
</script>