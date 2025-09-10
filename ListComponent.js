export default {
  name: "ListComponent",
  props: {
    status: {
      type: Boolean,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  template: `
    <div class="card m-2">
      <div class="card-content">
        <label class="checkbox">
          <input
            type="checkbox"
            :checked="status"
            @change="$emit('update-task-status', $event.target.checked)"
          />
          {{ description }}
        </label>
        <div class="buttons is-right mt-2">
          <button class="button is-small is-info" @click="$emit('editar')">
            Editar
          </button>
          <button class="button is-small is-danger" @click="$emit('remover')">
            Remover
          </button>
        </div>
      </div>
    </div>
  `,
};
