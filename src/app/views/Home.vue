<template>
  <div>
    <div class="hero is-link">
      <div class="hero-body">
        <p class="title has-text-centered">
        Hero title
        </p>
        <p class="subtitle has-text-centered">
        Hero subtitle
        </p>
      </div>
    </div>
    <div class="container is-fluid">
      <div class="section columns">
        <div class="column is-narrow">
          <div class="hero is-primary has-text-centered">
            Agendamentos
          </div>
          <div>
            <b-datepicker
                inline
                v-model="date"
                :events="events"
                :indicators="indicators"
                >
            </b-datepicker>
        </div>
        </div>
        <div class="column">
          <div class="level">
            <div class="title level-item">
              {{ new Date(date).toLocaleDateString() }}  
            </div>
            <div class="level-left">
              <b-button @click="agendarNovoHorario()" class="is-link"> Novo agendamento </b-button>
            </div>
          </div>
          <b-table :data="events.filter(e => e.date.getTime() === date.getTime())">
            <b-table-column field="date" label="Date" date v-slot="props" centered>
                {{ new Date(props.row.date).toLocaleString() }}
            </b-table-column>
            <b-table-column field="type" label="Type" html v-slot="props">
              <div class="hero" :class="computeClass(props)" ><b-icon 
                  icon="circle-small"
                  size="is-large">
              </b-icon></div>
            </b-table-column>
          </b-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Agendamento from '../components/Agendamento';

const thisMonth = new Date().getMonth();

export default {
    filters: {
      form(value) {
        console.log(value);
        return value;
      }
    },
    computed: {
        indicators() {
            return this.bars ? 'bars' : 'dots'
        }
    },
    methods: {
      computeClass(value) {
        const obj = {};
        obj[value.row.type] = true;
        return obj;
      },
      agendarNovoHorario() {
          this.$buefy.modal.open({
            parent: this,
            component: Agendamento,
            hasModalCard: true,
            // customClass: 'custom-class custom-class-2',
            trapFocus: true
        })
      }
    },
    data() {
        return {
            date: new Date(),
            isImageModalActive: false,
            events: [
                {
                    date: new Date(2021, thisMonth, 2),
                    type: 'vermelho',
                    nome: 'Teste'
                },
                {
                    date: new Date(2021, thisMonth, 6),
                    type: 'is-danger'
                },
                {
                    date: new Date(2021, thisMonth, 6),
                    type: 'is-info'
                },
                {
                    date: new Date(2021, thisMonth, 8),
                    type: 'is-danger'
                },
                {
                    date: new Date(2021, thisMonth, 10),
                    type: 'is-success'
                },
                {
                    date: new Date(2021, thisMonth, 10),
                    type: 'is-link'
                },
                {
                    date: new Date(2021, thisMonth, 12),
                    type: 'is-danger',
                },
                {
                    date: new Date(2021, thisMonth, 12),
                    type: 'is-warning'
                },
                {
                    date: new Date(2021, thisMonth, 16),
                    type: 'is-danger'
                },
                { 
                   date:new Date(2021, thisMonth, 20),
                   type: 'is-warning'
                },
                {
                    date: new Date(2021, thisMonth, 29),
                    type: 'is-success'
                },
                {
                    date: new Date(2021, thisMonth, 29),
                    type: 'is-warning'
                },
                {
                    date: new Date(2021, thisMonth, 29),
                    type: 'is-info'
                }
            ],
            bars: false,
            columns: [
                {
                    field: 'date',
                    label: 'Date',
                    centered: true
                },
                {
                    field: 'type',
                    label: 'Type',
                }
            ]
        }
    }
}
</script>

<style>
.vermelho{
  background-color: red;
}
</style>