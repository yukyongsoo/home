<template>
<section>
<v-layout column class="my-5">
	<v-flex class="my-5">
		<div class="text-xs-center">
        	<h2 class="headline">Learn Skill</h2>
		</div>
	</v-flex>
	<v-flex wrap>	
			<v-layout row wrap justify-center> 
				<v-flex md4 xs12>
					<v-tabs dark>
				      <v-tab v-for="(item,i) in itemset" :key="i" ripple>{{item.name}}</v-tab>
				      <v-tab-item v-for="(item,i) in itemset" :key="i">
				        <v-card flat>
				        	<v-container grid-list-xl>
	          					<v-layout row wrap>
						            <v-flex v-for="(image,j) in item.images" :key="j" xs4 d-flex>
						              <v-card flat tile class="d-flex">
						              	<v-layout class="ma-1" column>
						              		  <v-img contain :src="`assets/skill/${image.path}`" aspect-ratio="1" class="lighten-2"></v-img>
						              		  <div class="body-2">{{image.name}}</div>
						              	</v-layout>
						              </v-card>
						            </v-flex>
								</v-layout>
							</v-container>
				        </v-card>
				      </v-tab-item>
				    </v-tabs>
				</v-flex>
					
				<v-flex md4 xs12>
					<v-img src="assets/level.PNG" fill-height contain aspect-ratio="1.0" class="lighten-3"></v-img>
				</v-flex>
			</v-layout>
	</v-flex>
</v-layout>
<v-divider></v-divider>
</section>
</template>

<script>
	module.exports = {
		data: function data() {
			return {
					itemset : [
						{
							name : "F/W",
							images : [
								{name : "RAP" , path: "fw/RAP.PNG"},
								{name : "Spring Web" , path: "fw/spring.PNG"},
								{name : "Spring Cloud", path: "fw/springCloud.PNG"},
								{name : "Vaadin", path: "fw/vaadin.PNG"}
							]
						},
						{
							name : "Network",
							images : [
								{name : "Http-Components" , path: "net/httpcomponents.png"},
								{name : "Mina" , path: "net/mina.png"},
								{name : "Netty", path: "net/netty.PNG"}
							]
						},
						{
							name : "OS",
							images : [
								{name : "HP-UX" , path: "os/hpux.JPG"},
								{name : "Linux" , path: "os/linux.png"},
								{name : "NT" , path: "os/NT.PNG"},
								{name : "Solaris" , path: "os/Solaris.png"},
								{name : "AIX" , path: "os/aix.PNG"}
							]
						},
						{
							name : "DB",
							images : [
								{name : "H2" , path: "db/H2.png"},
								{name : "HazelCast" , path: "db/HazelCast.PNG"},
								{name : "HyperSql" , path: "db/hypersql.png"},
								{name : "MS-sql" , path: "db/MSSQL.png"},
								{name : "Oracle" , path: "db/oracle.PNG"},
								{name : "My-Sql" , path: "db/mysql.PNG"}
							]
						},
						{
							name : "DISK",
							images : [
								{name : "Centera" , path: "disk/centera.png"},
								{name : "HCP" , path: "disk/hcp.png"},
								{name : "NetApp" , path: "disk/netapp.PNG"},
							]
						},
						{
							name : "TOOLS",
							images : [
								{name : "GIT" , path: "tools/git.png"},
								{name : "Jenkins" , path: "tools/jenkins.JPG"},
								{name : "Docker" , path: "leaned/docker.png"},
								{name : "Jd-Core" , path: "etc/Jd-Core.PNG"},
								{name : "Elastic" , path : "etc/elastic.png"}
							]
						},
						{
							name : "ETC",
							images : [
								{name : "Apache-Common" , path: "etc/Apache-Common.PNG"},
								{name : "ChartJS" , path: "etc/chartJS.PNG"},
								{name : "JFreeChart" , path: "etc/JFreeChart.PNG"},
								{name : "Logback" , path: "etc/Logback.jpg"},
								{name : "Quartz" , path: "etc/quartz.PNG"},
								{name : "Vue-Material" , path: "etc/Vue-Material.PNG"},
								{name : "Vue" , path: "etc/vue.png"},
								{name : "Vuetify" , path: "etc/vuetify.png"},
								{name : "JPA-Hbm" , path: "etc/jpa.png"}
							]
						}	
					]
			}
		}
	}
</script>