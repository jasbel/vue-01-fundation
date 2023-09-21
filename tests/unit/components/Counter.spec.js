import { shallowMount, mount } from "@vue/test-utils";
import CounterVue from "@/components/Counter.vue";

describe("Counter component", () => {
  test("should match with snapshot", () => {
    const wrapper = shallowMount(CounterVue)
    expect(wrapper.html()).toMatchSnapshot();
  });
});
