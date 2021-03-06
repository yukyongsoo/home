<template>
  <section>
    <v-layout column class="my-5" align-center>
      <v-flex xs12 sm4 lg4 class="my-5">
        <div>
          <h4 class="display-1 primary--text text-xs-center">What I Developed Alone/Team</h4>
        </div>
      </v-flex>

      <v-flex xs10>
        <v-container grid-list-xl>
          <v-layout column>
            <v-flex v-for="(item,i) in items" :key="i">
              <v-layout column align-center>
                <v-flex xs12 md4>
                  <h2 class="headline text-xs-center"><v-icon class="blue--text text--lighten-2">{{item.icon}}</v-icon>{{item.name}}</h2>
                  <span class="subheading" text-xs-center>{{item.text}}</span>
                </v-flex>

                <v-flex>
                  <v-layout row wrap>
                    <v-flex xs12 md8 align-center>
                      <v-carousel :show-arrows="false">
                        <v-carousel-item
                          v-for="(image,i) in item.images"
                          :key="i"
                          :src="`assets/dev/${image}`"
                          contain
                        ></v-carousel-item>
                      </v-carousel>
                    </v-flex>

                    <v-flex xs12 md4>
                      <v-card class="elevation-0 transparent">
                        <v-card-text>
                          <B class="mb-0">Description</B>
                          <p>{{item.desc}}</p>

                          <B class="mb-0">Stack</B>
                          <p>{{item.stack}}</p>

                          <B class="mb-0">Module</B>
                          <p class="mb-0" v-for="line in item.mod" :key="line">{{line}}</p>

                          <B class="mt-4">Function</B>
                          <p v-for="line in item.func" :key="line" class="mb-0">{{line}}</p>
                        </v-card-text>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>

    <v-divider></v-divider>
  </section>
</template>

<script>
module.exports = {
  data: function data() {
    return {
      items: [
        {
          icon: "color_lens",
          name: "Monitoring",
          text: "Java 어플리케이션 성능 모니터링",
          desc:
            "운영 어플리케이션의 성능을 모니터링하며 장애 감지 및 파악에 쓰이는 도구. 1인 개발",
          stack: "AspectJ, H2, Netty, Vaadin, jsoniter, vaadin-addon",
          func: [
            "1. Service 모니터링",
            "2. App 자원 사용량(Cpu,Heap)",
            "3. 서버 자원 사용량(Disk,Network,Cpu)",
            "4. App Log Trace",
            "5. App Metric Trace",
            "(Method, Db Query)",
            "6. Data Statistics",
            "7. Exception Catch",
            "8. Runtime Decomplie",
            "9. Thread State Snapshot",
            "10. Java Memory Pool State"
          ],
          mod: [
            "1. Agent : 각 APP에 삽입되어 데이터를 수집하여 Raw Data로 가공 후 Collector로 전송",
            "2. Collector : 기본적으로 서버(장비) 당 한 대를 설치하여 장비 정보 및 Agent의 데이터를 중간 가공",
            "3. Server : 각 Collector에 수집된 모든 데이터를 수집하여 가공, 영구 저장함.",
            "4. Web UI : 서버와 직접적으로 연결하여 화면 상에 데이터를 시각적으로 표현함."
          ],
          demo: "dev",
          images: [
            "apmarch.JPG",
            "apmmod.JPG",
            "apmscr1.png",
            "apmscr2.png",
            "apmscr3.png",
            "apmscr4.png"
          ]
        },
        {
          icon: "flash_on",
          name: "CSP(ECM)",
          text: "비정형 문서 관리 시스템",
          desc:
            "전통적인 ECM 사상을 이용하여 현대에 맞도록 개량중인 CSP 솔루션. 1인 개발",
          stack:
            "Spring Boot, Vue, Vue-Material,Gson, Spring-security" +
            ",http-components, jasypt, quartz",
          func: [
            "1. Document Service",
            "2. Version Service",
            "3. Search Service",
            "4. Folder Service",
            "5. Life Cycle Service",
            "6. Manage Service",
            "7. Meta Data Service",
            "8. User/Group SPI",
            "9. ACL/Secure SPI"
          ],
          mod: [
            "1. API : Server가 가진 모든 기능을 관리자 웹만이 아닌 API를 통해 조정할 수 있도록 구현." +
              "개발자의 실수를 대비한 Strong Validation.",
            "2. Admin Web : 타 시스템과의 연계가 없을 시 권한  있는 관리자가 Server를 관리하기 위함." +
              "타 CSP와의 연계를 위해 CMIS Spec을 구현함.(CMIS는 Was가 필요함) ",
            "3. CSP 솔루션에 필요한 각 기능들을  구현해 DB 및 파일로 저장하는 서버.",
            "다양한 Storage 및 DB를 지원하도록 설계.",
            "각 설정 정보를 공유하기 위해 Cluster Cache(Near Cache 타입)을 내장."
          ],
          demo: "dev",
          images: ["csparch.JPG", "cspmod.JPG"]
        },
        {
          icon: "build",
          name: "Team KMS",
          text: "사내 지식 전파 시스템",
          desc:
            "사이트,솔루션 히스토리 관리 및 장애 전파/대응 지원을 위한 시스템 . 6인 팀 개발",
          stack:
            "Spring Boot, Vue, Vuetify, Hibernate, JPA, My-Sql, Elastic Search",
          func: [
            "1.Site Service",
            "2.Solution Service",
            "3.QnA Service",
            "4.Alram Service(본인 파트)",
            "5. Manage Service",
            "6. SPI",
            "7. Search Service"
          ],
          mod: ["계약으로 인해 이미지 공개가 불가합니다. ㅠㅠ"],
          demo: "dev",
          images: ["noimg.PNG"]
        }
      ]
    }
  },
  methods: {
    demo: function(name, event) {
      this.dialog = true;
    }
  }
};
</script>