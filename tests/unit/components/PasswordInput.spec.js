import { mount } from '@vue/test-utils'
import PasswordInput from '@/components/PasswordInput.vue';

const createComponent = () => mount(PasswordInput);

const findEyeButton = (wrapper) => wrapper.find("button");
const findInputPassword = (wrapper) => wrapper.find("input[type='password']");
const findInputText = (wrapper) => wrapper.find("input[type='text']");


describe('PasswordInput.vue', () => {
  it('shows password on eye-button click', async () => {
    const wrapper = createComponent();
    
    expect(findInputPassword(wrapper).text()).toBe("password")

    await findEyeButton(wrapper).trigger("click")

    expect(findInputText(wrapper).text()).toBe("text")
  }); 
});
