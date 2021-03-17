<template>
    <form action="">
      <div class="modal-card" style="height: 60vh">
        <div class="modal-card-head has-text-centered">
           <p class="modal-card-title"> Schedule </p>
        </div>
        <div class="modal-card-body">
          <b-field label="Choose date and hour">
              <b-datetimepicker
                  rounded
                  placeholder="Click to select..."
                  icon="calendar-today"
                  locale="pt-BR"
                  horizontal-time-picker>
              </b-datetimepicker>
              </b-field>
          <b-field label="Name">
            <b-input></b-input>
          </b-field>
          <b-field label="Type">
            <b-select></b-select>
          </b-field>
        </div>
        <footer class="modal-card-foot">
        </footer>
      </div>
    </form>
</template>

<script>
export default {

}
</script>

