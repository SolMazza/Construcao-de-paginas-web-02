export default {
  name: "FormComponent",
  props: {
    tarefaParaEditar: Object,
  },
  data() {
    return {
      inputDescricao: "",
    };
  },
  watch: {
    tarefaParaEditar: {
      handler(novaTarefa) {
        this.inputDescricao = novaTarefa ? novaTarefa.description : "";
      },
      immediate: true,
    },
  },
  template: `
    <form @submit.prevent="handleSubmit" class="box">
      <div class="field">
        <label class="label">Descrição da Tarefa</label>
        <div class="control">
          <input
            class="input"
            type="text"
            v-model="inputDescricao"
            placeholder="Digite a tarefa"
          />
        </div>
      </div>
      <div class="buttons">
        <button class="button is-primary" type="submit">
          {{ tarefaParaEditar ? "Atualizar" : "Adicionar" }}
        </button>
        <button
          v-if="tarefaParaEditar"
          class="button is-light"
          @click.prevent="$emit('cancelar-edicao')"
        >
          Cancelar
        </button>
      </div>
    </form>
  `,
  methods: {
    handleSubmit() {
      const texto = this.inputDescricao.trim();
      if (!texto) return;

      if (this.tarefaParaEditar) {
        this.$emit("atualizar", texto);
      } else {
        this.$emit("adicionar", texto);
      }

      this.inputDescricao = "";
    },
  },
};
