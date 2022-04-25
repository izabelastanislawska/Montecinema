import { mount, RouterLinkStub } from '@vue/test-utils'
import RegisterCard from '@/components/RegisterCard.vue';

const createComponent = () => mount(RegisterCard, { stubs: {
    RouterLink: RouterLinkStub }});
const findForm = (wrapper) => wrapper.find("[data-spec='form']");
const findErrorMessageEmail = (wrapper) => wrapper.find("[data-spec='emailError']");
const findEmailInput = (wrapper) => wrapper.find("[data-spec='emailInput'");
const findErrorMessagePassword = (wrapper) => wrapper.find("[data-spec='passwordError']");
const findPasswordInput = (wrapper) => wrapper.find("[data-spec='passwordInput']");
const findPassword8CharactersMessage = (wrapper) => wrapper.find("[data-spec='pass-8-char']");
const findPassword1LetterMessage = (wrapper) => wrapper.find("[data-spec='pass-1-lett']");
const findPassword1DigitMessage = (wrapper) => wrapper.find("[data-spec='pass-1-dig']")

describe('RegisterCard.vue', () => {
    describe('when there`s no email entered', () => {
        it('shows error message on form submit', async () => {
            const wrapper = createComponent();
            await findForm(wrapper).trigger("submit");
            expect(findErrorMessageEmail(wrapper).text()).toMatch("Please enter your email")
        })
    })
    describe('when invalid email is entered', () => {
        it('shows error message on form submit', async () => {
            const wrapper = createComponent();
            findEmailInput(wrapper).find('input').setValue('mail test@.com');
            await findForm(wrapper).trigger("submit");
            expect(findErrorMessageEmail(wrapper).text()).toMatch("Please enter valid email address")
        })
    })
    describe('when there`s no password entered', () => {
        it('shows error message on form submit', async () => {
            const wrapper = createComponent();
            await findForm(wrapper).trigger("submit");
            expect(findErrorMessagePassword(wrapper).text()).toMatch("Please enter your password")
        })
    })
    describe('when entered password has less than 8 characters', () => {
        it('shows error message on form submit', async () => {
            const wrapper = createComponent();
            findPasswordInput(wrapper).find('input').setValue('pass1');
            await findForm(wrapper).trigger("submit");
            expect(findPassword8CharactersMessage(wrapper).text()).toMatch("At least 8 characters");
        })
    })
    describe('when entered password has less than 1 letter', () => {
        it('shows error message on form submit', async () => {
            const wrapper = createComponent();
            findPasswordInput(wrapper).find('input').setValue('12345678');
            await findForm(wrapper).trigger("submit");
            expect(findPassword1LetterMessage(wrapper).text()).toMatch("At least one letter");
        })
    })
    describe('when entered password has less than 1 digit', () => {
        it('shows error message on form submit', async () => {
            const wrapper = createComponent();
            findPasswordInput(wrapper).find('input').setValue('qweertyui');
            await findForm(wrapper).trigger("submit");
            expect(findPassword1DigitMessage(wrapper).text()).toMatch("At least one digit");
        })
    })
});
