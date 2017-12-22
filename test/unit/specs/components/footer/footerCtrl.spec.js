// import Vue from 'vue'
import { destroyVM, createTest } from '../../../util'
import footerCtrl from '@/components/footer/footerCtrl'

describe('footerCtrl.vue', () => {
  // 检查原始组件选项
  // it('创建钩子', () => {
  //   const Constructor = Vue.extend(footerCtrl)
  //   new Constructor().$mount()
  //   Vue.nextTick(() => {
  //     expect(typeof Constructor.created).to.be.an('function')
  //   })
  // })

  // 检查 mount 中的组件实例
  // it('默认选中第一个菜单', () => {
  //   const vm = new Vue(footerCtrl).$mount()
  //   Vue.nextTick(() => {
  //     expect(vm.data.chooseMenuOne).to.be.ok
  //   })
  // })

  let vm

  afterEach(() => {
    destroyVM(vm)
  })

  it('components - footer - footerCtrl = 测试选中首页菜单', () => {
    vm = createTest(footerCtrl, { }, true)
    // console.log(vm.$el.querySelector('i').classList)
    expect(vm.chooseMenuOne).to.equal(true)
    // expect(vm.$el.querySelector('i').classList.contains('icon-iconfont-kecheng1')).to.be.true
    // console.log(vm)
    // expect(vm.$el.querySelector('.hello h1').textContent).to.equal('Welcome!')
    // expect(vm.$el.querySelector('.hello h2').textContent).to.have.be.equal('Hello World')
  })

  // it('测试获取Vue对象中数据', () => {
  //   vm = createTest(footerCtrl, { content: 'Hello World' }, true)
  //   expect(vm.msg).to.equal('Welcome!')
  //   // Chai的语言链是无意义的，可以随便写。如下：
  //   expect(vm.content).which.have.to.be.that.equal('Hello World')
  // })
  //
  // it('测试获取DOM中是否存在某个class', () => {
  //   vm = createTest(footerCtrl, { content: 'Hello World' }, true)
  //   expect(vm.$el.classList.contains('hello')).to.be.true
  //   const title = vm.$el.querySelector('.hello h1')
  //   expect(title.classList.contains('hello-title')).to.be.true
  //   const content = vm.$el.querySelector('.hello-content')
  //   expect(content.classList.contains('hello-content')).to.be.true
  // })
})
