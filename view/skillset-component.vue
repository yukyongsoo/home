<template>
  <section>
    <v-layout align-center column class="my-5">
      <v-flex class="my-5 text-xs-center">
        <div>
          <h4 class="display-1 primary--text ">What I Used In Project</h4>
          <a href="https://www.stackshare.io/yozx9079/devskill">stackshare.io에 정리된 링크!!</a>
        </div>
      </v-flex>
      <v-flex wrap>
        <v-layout row wrap justify-center>
          <v-flex md8 xs12>
            <v-tabs>
              <v-tab v-for="(item,i) in itemset" :key="i" ripple>{{item.name}}</v-tab>
              <v-tab-item v-for="(item,i) in itemset" :key="i">
                <v-card flat>
                  <v-container grid-list-xl>
                    <v-layout row wrap>
                      <v-flex v-for="(image,j) in item.images" :key="j" xs4 d-flex>
                        <v-card flat tile class="d-flex">
                          <v-layout class="ma-1" column>
                            <v-img
                              contain
                              :src="`assets/skill/${image.path}`"
                              class="lighten-2"
                              max-height="200px" max-width="200px"
                              min-height="50px" min-width="50px"
                            ></v-img>
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
      itemset: [
        {
          name: "F/W",
          images: [
            { name: "Spring Web/Flux", path: "fw/springWebflux.PNG" },
            { name: "Spring", path: "fw/springFrameWork.png" },
            { name: "Spring Boot", path: "fw/springBoot.png" },
            { name: "Spring Security", path: "fw/springSecurity.png" },
            { name: "Spring Cloud", path: "fw/springCloud.PNG" },
            { name: "Vaadin", path: "fw/vaadin.PNG" },
            { name: "RAP", path: "fw/RAP.PNG" }
          ]
        },
        {
          name: "Network",
          images: [
            { name: "Http-Components", path: "net/httpcomponents.png" },
            { name: "Mina", path: "net/mina.png" },
            { name: "Netty", path: "net/netty.PNG" }
          ]
        },
        {
          name: "OS",
          images: [
            { name: "HP-UX", path: "os/hpux.JPG" },
            { name: "Linux", path: "os/linux.png" },
            { name: "NT", path: "os/NT.PNG" },
            { name: "Solaris", path: "os/Solaris.png" },
            { name: "AIX", path: "os/aix.PNG" }
          ]
        },
        {
          name: "DB",
          images: [
            { name: "H2", path: "db/H2.png" },
            { name: "HyperSql", path: "db/hypersql.png" },
            { name: "MS-sql", path: "db/MSSQL.png" },
            { name: "Oracle", path: "db/oracle.PNG" },
            { name: "My-Sql", path: "db/mysql.PNG" }
          ]
        },
        {
          name: "DISK",
          images: [
            { name: "Centera", path: "disk/centera.png" },
            { name: "HCP", path: "disk/hcp.png" },
            { name: "NetApp", path: "disk/netapp.PNG" }
          ]
        },
        {
          name: "TOOLS",
          images: [
            { name: "GIT", path: "tools/git.png" },
            { name: "Jenkins", path: "tools/jenkins.JPG" },
            { name: "Jd-Core", path: "etc/Jd-Core.PNG" },
            { name: "Elastic", path: "etc/elastic.png" },
            { name: "HazelCast", path: "tools/HazelCast.PNG" },
            { name: "Redis", path: "tools/redis.png" },
            { name: "activemq", path: "tools/activemq.png" }
          ]
        },
        {
          name: "ETC",
          images: [
            { name: "Apache-Common", path: "etc/Apache-Common.PNG" },
            { name: "ChartJS", path: "etc/chartJS.PNG" },
            { name: "JFreeChart", path: "etc/JFreeChart.PNG" },
            { name: "Logback", path: "etc/Logback.jpg" },
            { name: "Quartz", path: "etc/quartz.PNG" },
            { name: "Vue-Material", path: "etc/Vue-Material.PNG" },
            { name: "Vue", path: "etc/vue.png" },
            { name: "JPA-Hbm", path: "etc/jpa.png" },
            { name: "Exposed", path: "interest/noimg.png" },
            { name: "Coroutine", path: "interest/noimg.png" },
          ]
        },
        {
          name: "Cloud",
          images: [
            { name: "Elastic Beanstalk", path: "interest/noimg.png" },
            { name: "ElastiCache", path: "interest/noimg.png" },
            { name: "CodePipeline", path: "interest/noimg.png" },
            { name: "X-Ray", path: "interest/noimg.png" },
            { name: "CloudWatch", path: "interest/noimg.png" },
            { name: "QuickSight", path: "interest/noimg.png" },
            { name: "Glue", path: "interest/noimg.png" },
            { name: "Amazon MQ", path: "interest/noimg.png" },
            { name: "Amazon SNS", path: "interest/noimg.png" }
          ]
        }
      ]
    };
  }
};
</script>
