<template>
  <div class="dashboardDefault">
    <v-container fluid>
      <!-- <v-row> -->
      <v-row>
        <v-col cols="12" class="py-0">
          <h1>Welcome back, John Doe!</h1>
        </v-col>
      </v-row>
      <numberpane />
      <!-- Line chart and daily feed -->
      <v-row>
        <v-col cols="12" xs="12" sm="12" md="7" lg="7" xl="7">
          <v-card class="mb-5">
            <v-card-title class="d-flex justify-space-between">
              Total Revenue
              <v-chip small color="primary">Monthly</v-chip>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <chartjs
                :id="revenuedata.id"
                :type="revenuedata.type"
                :data="revenuedata.data"
                :options="revenuedata.option"
              />
            </v-card-text>
          </v-card>
          <v-card class="mb-5">
            <v-card-title class="d-flex justify-space-between">
              Calendar
              <v-menu offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn v-on="on" icon>
                    <v-icon>more_vert</v-icon>
                  </v-btn>
                </template>
                <v-list dense>
                  <v-list-item v-for="(item, index) in items" :key="index">
                    <v-list-item-title @click="alert('awdaw')">{{
                      item.title
                    }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-card-title>
            <v-divider></v-divider>
            <calendar elevation="0" />
          </v-card>
          <v-card>
            <v-card-title class="d-flex justify-space-between">
              Sales / Revenue
              <v-spacer></v-spacer>
              <v-menu offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn v-on="on" icon>
                    <v-icon>more_vert</v-icon>
                  </v-btn>
                </template>
                <v-list dense>
                  <v-list-item v-for="(item, index) in items" :key="index">
                    <v-list-item-title link router :to="item.route">{{
                      item.title
                    }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <chartjs
                :id="salesrevenuedata.id"
                :type="salesrevenuedata.type"
                :data="salesrevenuedata.data"
                :options="salesrevenuedata.option"
              />
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="5" lg="5" xl="5">
          <v-card class="mb-5">
            <v-card-title class="d-flex justify-space-between">
              Daily Feed
              <v-chip small color="info">Today</v-chip>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text class="pa-0">
              <v-list three-line>
                <template v-for="(feed, index) in dailyfeed">
                  <v-divider
                    v-if="feed.divider"
                    :key="index"
                    :inset="feed.inset"
                  ></v-divider>

                  <v-list-item v-else :key="feed.title">
                    <v-list-item-avatar>
                      <v-img :src="feed.avatar"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title
                        v-html="feed.title"
                      ></v-list-item-title>
                      <v-list-item-subtitle
                        v-html="feed.subtitle"
                      ></v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                      <span>3h ago</span>
                    </v-list-item-action>
                  </v-list-item>
                </template>
              </v-list>
            </v-card-text>
          </v-card>
          <v-card class="mb-5">
            <v-card-title class="d-flex justify-space-between">
              Weekly Sales
              <v-menu offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn v-on="on" icon>
                    <v-icon>more_vert</v-icon>
                  </v-btn>
                </template>
                <v-list dense>
                  <v-list-item v-for="(item, index) in items" :key="index">
                    <v-list-item-title @click="alert('awdaw')">{{
                      item.title
                    }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text style="height:100%;">
              <chartjs
                :id="'weeklysales'"
                :type="'doughnut'"
                :data="weeklysalesdata.data"
                :options="weeklysalesdata.option"
                height="200px"
              />
            </v-card-text>
          </v-card>
          <v-card>
            <v-card-title class="d-flex justify-space-between">
              Appointments
              <v-menu offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn v-on="on" icon>
                    <v-icon>more_vert</v-icon>
                  </v-btn>
                </template>
                <v-list dense>
                  <v-list-item v-for="(item, index) in items" :key="index">
                    <v-list-item-title @click="alert('awdaw')">{{
                      item.title
                    }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text class="pa-0">
              <timeline />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
          <v-card>
            <v-card-title class="d-flex justify-space-between">
              Latest Projects
              <v-spacer></v-spacer>
              <v-menu offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn v-on="on" icon>
                    <v-icon>more_vert</v-icon>
                  </v-btn>
                </template>
                <v-list dense>
                  <v-list-item v-for="(item, index) in items" :key="index">
                    <v-list-item-title @click="alert('awdaw')">{{
                      item.title
                    }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-card-title>
            <v-divider></v-divider>
            <v-data-table :headers="header" :items="project">
              <template v-slot:item.status="{ item }">
                <v-chip v-if="item.status == 'Done'" color="success" small>{{
                  item.status
                }}</v-chip>
                <v-chip v-if="item.status == 'Pending'" color="primary" small>{{
                  item.status
                }}</v-chip>
                <v-chip v-if="item.status == 'Cancelled'" color="error" small>{{
                  item.status
                }}</v-chip>
                <v-chip
                  v-if="item.status == 'In Progress'"
                  color="warning"
                  small
                  >{{ item.status }}</v-chip
                >
              </template>
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
// import Chart from "chart.js";
import calendar from "@/components/calendar";
import timeline from "@/components/timeline";
import chartjs from "@/components/chartjs/chartjs";
import numberpane from "@/components/default-dash/numberpane";

export default {
  name: "DefaultDashboard",
  components: {
    calendar,
    timeline,
    chartjs,
    numberpane,
  },
  data() {
    return {
      revenuedata: {
        id: "totalrevenue",
        type: "line",
        data: {
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              label: "Sales ($)",
              fill: false,
              backgroundColor: "#d64937",
              borderColor: "#d64937", //find what this is
              data: [2015, 1465, 1487, 1796, 1387, 2123],
            },
            {
              label: "Orders",
              fill: false,
              backgroundColor: "#757575",
              borderColor: "#757575",
              data: [928, 734, 626, 893, 921, 1202],
            },
          ],
        },
        options: {
          maintainAspectRatio: true,
          legend: {
            display: true,
            position: "bottom",
          },
          tooltips: {
            intersect: false,
          },
          hover: {
            intersect: true,
          },
        },
      },
      weeklysalesdata: {
        id: "weeklysales",
        type: "dougnut",
        data: {
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              label: "Sales ($)",
              fill: true,
              backgroundColor: [
                "blue",
                "indigo",
                "red",
                "cyan",
                "green",
                "orange",
                "red darken-1",
              ],
              borderColor: "transparent", //find what this is
              data: [2015, 1465, 1487, 1796, 1387, 2123],
            },
          ],
        },
        options: {
          maintainAspectRatio: true,
          legend: {
            display: true,
            position: "bottom",
          },
          tooltips: {
            intersect: false,
          },
          hover: {
            intersect: true,
          },
        },
      },
      salesrevenuedata: {
        id: "salesrevenue",
        type: "bar",
        data: {
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              label: "Sales Revenue Data",
              fill: true,
              backgroundColor: [
                "blue",
                "indigo",
                "red",
                "cyan",
                "green",
                "orange",
                "red darken-1",
              ],
              data: [10, 20, 30, 40, 50, 60, 70],
            },
          ],
        },
      },
      header: [
        {
          text: "Name",
          align: "start",
          value: "name",
        },
        {
          text: "Start Date",
          align: "center",
          value: "startdate",
        },
        {
          text: "End Date",
          align: "center",
          value: "enddate",
        },
        {
          text: "Status",
          align: "center",
          value: "status",
        },
        {
          text: "Assignee",
          align: "center",
          value: "assignee",
        },
      ],
      project: [
        {
          name: "Project Apollo",
          startdate: "01/01/2018",
          enddate: "31/06/2018",
          status: "Done",
          assignee: "Carl Jenkins",
          badgecolor: "",
        },
        {
          name: "Project Apollo",
          startdate: "01/01/2018",
          enddate: "31/06/2018",
          status: "Done",
          assignee: "Carl Jenkins",
          badgecolor: "",
        },
        {
          name: "Project Apollo",
          startdate: "01/01/2018",
          enddate: "31/06/2018",
          status: "Done",
          assignee: "Carl Jenkins",
          badgecolor: "",
        },
        {
          name: "Project Apollo",
          startdate: "01/01/2018",
          enddate: "31/06/2018",
          status: "Pending",
          assignee: "Carl Jenkins",
          badgecolor: "",
        },
        {
          name: "Project Apollo",
          startdate: "01/01/2018",
          enddate: "31/06/2018",
          status: "Done",
          assignee: "Carl Jenkins",
          badgecolor: "",
        },
        {
          name: "Project Apollo",
          startdate: "01/01/2018",
          enddate: "31/06/2018",
          status: "Done",
          assignee: "Carl Jenkins",
          badgecolor: "",
        },
        {
          name: "Project Apollo",
          startdate: "01/01/2018",
          enddate: "31/06/2018",
          status: "Done",
          assignee: "Carl Jenkins",
          badgecolor: "",
        },
        {
          name: "Project Apollo",
          startdate: "01/01/2018",
          enddate: "31/06/2018",
          status: "In Progress",
          assignee: "Carl Jenkins",
          badgecolor: "",
        },
        {
          name: "Project Apollo",
          startdate: "01/01/2018",
          enddate: "31/06/2018",
          status: "Done",
          assignee: "Carl Jenkins",
          badgecolor: "",
        },
        {
          name: "Project Apollo",
          startdate: "01/01/2018",
          enddate: "31/06/2018",
          status: "Cancelled",
          assignee: "Carl Jenkins",
          badgecolor: "",
        },
        {
          name: "Project Apollo",
          startdate: "01/01/2018",
          enddate: "31/06/2018",
          status: "Done",
          assignee: "Carl Jenkins",
          badgecolor: "",
        },
      ],
      items: [
        {
          title: "Action",
          route: "/",
        },
        {
          title: "Another Action",
          route: "/",
        },
        {
          title: "Something else here",
          route: "/",
        },
      ],
      dailyfeed: [
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Brunch this weekend?",
          subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: "Summer BBQ",
          subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "Oui oui",
          subtitle:
            '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          title: "Birthday gift",
          subtitle:
            '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
          title: "Recipe to try",
          subtitle:
            '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
      ],
      // Calendar
      type: "month",
      modes: ["stack", "column"],
      weekday: [0, 1, 2, 3, 4, 5, 6],
      weekdays: [
        { text: "Sun - Sat", value: [0, 1, 2, 3, 4, 5, 6] },
        { text: "Mon - Sun", value: [1, 2, 3, 4, 5, 6, 0] },
        { text: "Mon - Fri", value: [1, 2, 3, 4, 5] },
        { text: "Mon, Wed, Fri", value: [1, 3, 5] },
      ],
      value: "",
      events: [],
      colors: [
        "blue",
        "indigo",
        "deep-purple",
        "cyan",
        "green",
        "orange",
        "grey darken-1",
      ],
      names: [
        "Meeting",
        "Holiday",
        "PTO",
        "Travel",
        "Event",
        "Birthday",
        "Conference",
        "Party",
      ],
    };
  },
  computed: {},
};
</script>
<style scoped></style>
