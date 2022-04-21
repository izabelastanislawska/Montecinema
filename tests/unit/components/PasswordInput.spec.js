import { mount } from '@vue/test-utils'
import PasswordInput from '@/components/PasswordInput.vue';

const createComponent = () => mount(PasswordInput);

const findEyeButton = (wrapper) => wrapper.find("button");
const findInput = (wrapper) => wrapper.find("input");


describe('PasswordInput.vue', () => {
  it('shows password on eye-button click', async () => {
    const wrapper = createComponent();
    
    expect(findInput(wrapper).attributes('type')).toBe('password')

    await findEyeButton(wrapper).trigger("click")

    expect(findInput(wrapper).attributes('type')).toBe('text')
  }); 
});
