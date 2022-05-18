<template>
  <edit-interaction-base v-bind="{ data, hide: hideBase }" @change="updateData">
    <insert-workflow-data
      v-if="data.getValue && !hideBase"
      :data="data"
      variables
      @update="updateData"
    />
    <template v-else>
      <ui-select
        class="block w-full mb-2 mt-4"
        :placeholder="t('workflow.blocks.formsNew.type')"
        @change="updateData({ type: $event })"
      >
        <option v-for="form in forms" :key="form" :value="form">
          {{ t(`workflow.blocks.formsNew.${form}.name`) }}
        </option>
      </ui-select>
      <ui-checkbox
        v-if="data.type === 'checkbox'"
        :model-value="data.selected"
        @change="updateData({ selected: $event })"
      >
        {{ t('workflow.blocks.formsNew.selected') }}
      </ui-checkbox>
      <div v-else-if="data.type === 'time'" class="mt-2">
        <ui-input
          :model-value="data.time"
          :placeholder="t('workflow.blocks.formsNew.time')"
          type="time"
          class="w-full mt-2"
          @change="updateData({ time: $event || '00:00' })"
        />
      </div>
      <div v-else-if="data.type === 'date'" class="mt-2">
        <ui-input
          :model-value="data.date"
          :max="maxDate"
          :min="minDate"
          :placeholder="t('workflow.blocks.formsNew.date')"
          class="w-full"
          type="date"
          @change="updateDate({ date: $event })"
        />
      </div>
      <template
        v-if="
          data.type === 'short-text' ||
          data.type === 'long-text' ||
          data.type === 'text-field' ||
          data.type === 'select'
        "
      >
        <edit-autocomplete class="w-full mb-1">
          <ui-textarea
            :model-value="data.value"
            :placeholder="t('workflow.blocks.formsNew.text-field.value')"
            class="w-full"
            :maxlength="data.type === 'long-text' ? 0 : 180"
            @change="updateData({ value: $event })"
          />
        </edit-autocomplete>
        <ui-checkbox
          :model-value="data.clearValue"
          @change="updateData({ clearValue: $event })"
        >
          {{ t('workflow.blocks.formsNew.text-field.clearValue') }}
        </ui-checkbox>
      </template>
      <ui-input
        v-if="data.type === 'text-field'"
        :model-value="data.delay"
        :label="t('workflow.blocks.forms.text-field.delay.label')"
        :placeholder="t('workflow.blocks.forms.text-field.delay.placeholder')"
        class="w-full mt-1"
        min="0"
        type="number"
        @change="updateData({ delay: +$event })"
      />
      <ui-input
        v-if="data.type === 'number'"
        :model-value="data.value"
        :label="t('workflow.blocks.formsNew.number.name')"
        placeholder="0"
        class="w-full mt-1"
        min="0"
        type="number"
        @change="updateData({ value: $event })"
      />
    </template>
    <ui-textarea
      :model-value="data.prefill"
      :placeholder="t('workflow.blocks.formsNew.prefill')"
      class="w-full"
      @change="updateData({ value: $event })"
    />
    <ui-checkbox
      :model-value="data.readOnly"
      class="my-4"
      @change="updateData({ readOnly: $event })"
    >
      {{ t('workflow.blocks.formsNew.readOnly') }}
    </ui-checkbox>
    <ui-textarea
      :model-value="data.saveAs"
      :placeholder="t('workflow.blocks.formsNew.saveAs')"
      class="w-full"
      maxlength="180"
      @change="updateData({ value: $event })"
    />
    <hr />
    <insert-workflow-data
      :data="data"
      variables
      extra-row
      @update="updateData"
    />
  </edit-interaction-base>
</template>
<script setup>
import { useI18n } from 'vue-i18n';
import InsertWorkflowData from './InsertWorkflowData.vue';
import EditInteractionBase from './EditInteractionBase.vue';
import EditAutocomplete from './EditAutocomplete.vue';

const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
  hideBase: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['update:data']);

const { t } = useI18n();

const forms = [
  'text-field',
  'short-text',
  'long-text',
  'number',
  'select',
  'checkbox',
  'time',
  'date',
];

function updateData(value) {
  emit('update:data', { ...props.data, ...value });
}
</script>
