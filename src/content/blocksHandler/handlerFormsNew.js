import handleFormElementNew from '@/utils/handleFormElementNew';
import handleSelector, { markElement } from '../handleSelector';

async function formsNew(block) {
  const { data } = block;
  const elements = await handleSelector(block, { returnElement: true });

  if (!elements) {
    throw new Error('element-not-found');
  }

  if (data.getValue) {
    let result = '';

    if (data.multiple) {
      result = elements.map((element) => element.value || '');
    } else {
      result = elements.value || '';
    }

    return result;
  }

  if (data.multiple) {
    const promises = Array.from(elements).map(async (element) => {
      markElement(element, block);
      await handleFormElementNew(element, data, eventResolve);
    });

    await Promise.allSettled(promises);
  } else {
    markElement(elements, block);
    await handleFormElementNew(elements, data);
  }

  return null;
}

export default formsNew;