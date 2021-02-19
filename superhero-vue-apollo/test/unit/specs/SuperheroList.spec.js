import Vue from 'vue'
import SuperheroList from '@/components/SuperheroList'

describe('SuperheroList.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(SuperheroList)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.container h1').textContent)
      .toEqual('Marvel Superhero Explorer')
  })
})
