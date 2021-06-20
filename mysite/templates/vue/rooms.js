Vue.component("day-picker", {
    template: `
      <div>
        <label :for="day.id">Choose Room for [[day.name]]</label>
        <select id="day.id" :name="day.id">
          <option v-for="room in day.rooms" :value="room.id" :key="room.id">
              [[room.name]]
          </option>
        </select>
      </div>
      `,
    props: ["day"],
});
  
// "Top-level" Vue component that will associate itself with the `#alpha` div.
new Vue({
    delimiters: ["[[", "]]"],
    name: "day-form", // This shows up in the Vue debugger.
    el: "#app", // DOM element to take over
    data: {
        // Local data value, just for illustration.
        message: "Pick a room, ... any room.",
        // Access static data from the server, defined in the top-level `<script>` tag.
        days: dayData,
    },
});