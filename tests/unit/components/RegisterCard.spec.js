import { mount } from '@vue/test-utils'
import RegisterCard from '@/components/RegisterCard.vue';

const createComponent = () => mount(RegisterCard);

const findButton = (wrapper) => wrapper.find("[data-spec='button']");

const findErrorMessageEmail = (wrapper) => wrapper.find("[data-spec='emailError']");

const findEmailInput = (wrapper) => wrapper.find("[data-email='emailInput']");

describe('RegisterCard', () => {
    describe('when there`s no email entered', () => {
        it('shows error message on button click', async () => {
            const wrapper = createComponent();
            
            await findEmailInput.setValue('');
            expect(findEmailInput(wrapper).elemetn.value).toBe('');

            await findButton(wrapper).trigger("click");
            expect(findErrorMessageEmail(wrapper).text()).toMatch(" emailError: Please enter your email")
        })
    })
});
