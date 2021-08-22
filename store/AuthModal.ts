import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({ name: 'AuthModal', namespaced: true, stateFactory: true })
export default class AuthModal extends VuexModule {
  private _data: boolean = false

  get data(): boolean {
    return this._data
  }

  @Mutation
  public SET_DATA(data: boolean): void {
    this._data = data
  }
}
