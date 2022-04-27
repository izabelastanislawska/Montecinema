import { mount, Wrapper } from '@vue/test-utils'
import PasswordInput from '@/components/PasswordInput.vue';

const createComponent = () => mount(PasswordInput);

const findEyeButton = (wrapper: Wrapper<Vue, Element>) => wrapper.find("button");
const findInput = (wrapper: Wrapper<Vue, Element>) => wrapper.find("input");


describe('PasswordInput.vue', () => {
  it('shows password on eye-button click', async () => {
    const wrapper = createComponent();
    
    expect(findInput(wrapper).attributes('type')).toBe('password')

    await findEyeButton(wrapper).trigger("click")

    expect(findInput(wrapper).attributes('type')).toBe('text')
  }); 
});
