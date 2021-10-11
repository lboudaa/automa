/* link, tab loaded, and close tab block? */

export const tasks = {
  trigger: {
    name: 'Trigger',
    icon: 'riFlashlightLine',
    component: 'BlockBasic',
    editComponent: 'EditTrigger',
    category: 'general',
    inputs: 0,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      description: '',
      type: 'manual',
    },
  },
  'event-click': {
    name: 'Click element',
    icon: 'riCursorLine',
    component: 'BlockBasic',
    editComponent: 'EditInteractionBase',
    category: 'interaction',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      description: '',
      selector: '',
      multiple: false,
    },
  },
  delay: {
    name: 'Delay',
    icon: 'riTimerLine',
    component: 'BlockDelay',
    editComponent: 'EditTrigger',
    category: 'general',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      time: 500,
    },
  },
  'get-text': {
    name: 'Get text',
    icon: 'riParagraph',
    component: 'BlockBasic',
    editComponent: 'EditGetText',
    category: 'interaction',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      description: '',
      selector: '',
      multiple: false,
      regex: '',
      regexExp: ['g'],
      dataColumn: '',
    },
  },
  'export-data': {
    name: 'Export data',
    icon: 'riDownloadLine',
    component: 'BlockExportData',
    editComponent: 'EditTrigger',
    category: 'general',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      type: 'JSON',
    },
  },
  'element-scroll': {
    name: 'Scroll element',
    icon: 'riMouseLine',
    component: 'BlockBasic',
    editComponent: 'EditScrollElement',
    category: 'interaction',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      description: '',
      selector: 'html',
      multiple: false,
      scrollY: 0,
      scrollX: 0,
    },
  },
  'attribute-value': {
    name: 'Attribute value',
    icon: 'riBracketsLine',
    component: 'BlockBasic',
    editComponent: 'EditAttributeValue',
    category: 'interaction',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      description: '',
      selector: '',
      multiple: false,
      attributeName: '',
      dataColumn: '',
    },
  },
  'open-website': {
    name: 'Open website',
    icon: 'riGlobalLine',
    component: 'BlockOpenWebsite',
    editComponent: 'EditTrigger',
    category: 'general',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      url: '',
    },
  },
  forms: {
    name: 'Forms',
    icon: 'riInputCursorMove',
    component: 'BlockBasic',
    editComponent: 'EditForms',
    category: 'interaction',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      description: '',
      selector: '',
      multiple: false,
      selected: true,
      type: 'text-field',
      value: '',
      delay: 0,
      events: [],
    },
  },
  'repeat-task': {
    name: 'Repeat task',
    icon: 'riRepeat2Line',
    component: 'BlockRepeatTask',
    editComponent: 'EditTrigger',
    category: 'general',
    inputs: 1,
    outputs: 2,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      repeatFor: 1,
    },
  },
  // 'reload-page': {
  //   name: 'Reload page',
  //   icon: 'riRestartLine',
  //   component: 'BlockBasic',
  //   category: 'interaction',
  //   inputs: 1,
  //   outputs: 1,
  //   allowedInputs: true,
  //   maxConnection: 1,
  //   disableEdit: true,
  //   data: {},
  // },
  'trigger-event': {
    name: 'Trigger event',
    icon: 'riLightbulbFlashLine',
    component: 'BlockBasic',
    editComponent: 'EditTriggerEvent',
    category: 'interaction',
    inputs: 1,
    outputs: 1,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      description: '',
      selector: '',
      multiple: false,
      eventName: '',
      eventType: '',
      eventParams: { bubbles: true, cancelable: false },
    },
  },
  conditions: {
    name: 'Conditions',
    icon: 'riAB',
    component: 'BlockConditions',
    category: 'conditions',
    inputs: 1,
    outputs: 0,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      conditions: [],
    },
  },
  'element-exists': {
    name: 'Element exists',
    icon: 'riFocus3Line',
    component: 'BlockElementExists',
    category: 'conditions',
    inputs: 1,
    outputs: 2,
    allowedInputs: true,
    maxConnection: 1,
    data: {
      selector: '',
    },
  },
};

export const categories = {
  interaction: {
    name: 'Web interaction',
    color: 'bg-green-200',
  },
  general: {
    name: 'General',
    color: 'bg-yellow-200',
  },
  conditions: {
    name: 'Conditions',
    color: 'bg-blue-200',
  },
};

export const eventList = [
  { id: 'click', name: 'Click', type: 'mouse-event' },
  { id: 'dblclick', name: 'Double Click', type: 'mouse-event' },
  { id: 'mouseup', name: 'Mouseup', type: 'mouse-event' },
  { id: 'mousedown', name: 'Mousedown', type: 'mouse-event' },
  { id: 'focus', name: 'Focus', type: 'focus-event' },
  { id: 'blur', name: 'Blur', type: 'focus-event' },
  { id: 'touchstart', name: 'Touch start', type: 'touch-event' },
  { id: 'touchend', name: 'Touch end', type: 'touch-event' },
  { id: 'touchmove', name: 'Touch move', type: 'touch-event' },
  { id: 'touchcancel', name: 'Touch cancel', type: 'touch-event' },
  { id: 'keydown', name: 'Keydown', type: 'keyboard-event' },
  { id: 'keyup', name: 'Keyup', type: 'keyboard-event' },
  { id: 'keypress', name: 'Keypress', type: 'keyboard-event' },
  { id: 'submit', name: 'Submit', type: 'submit-event' },
  { id: 'wheel', name: 'Wheel', type: 'wheel-event' },
];
